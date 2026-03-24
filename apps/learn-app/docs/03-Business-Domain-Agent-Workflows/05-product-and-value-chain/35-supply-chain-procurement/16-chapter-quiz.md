---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/chapter-quiz
sidebar_position: 16
title: "Chapter 35: Supply Chain & Procurement Quiz"
---

# Chapter 35: Supply Chain & Procurement Quiz

Test your understanding of supply chain intelligence, vendor management, invoice reconciliation, supplier risk monitoring, logistics optimisation, spend analytics, and persistent procurement agents.

<Quiz
title="Chapter 35: Supply Chain & Procurement Assessment"
  questions={[    {
      question: "A procurement team reports that 18% of invoices require manual exception handling costing £45 per exception. Which structural failure does this describe?",
      options: [
        "The reconciliation swamp failure",
        "The static optimisation trap",
        "The vendor blind spot failure",
        "The compliance monitoring gap"
      ],
      correctOption: 0,
      explanation: "The reconciliation swamp is characterised by discrepancy rates of 15–25% and exception-handling costs of £25–80 per exception. An 18% discrepancy rate and £45 cost per exception falls squarely within this range. The vendor blind spot refers to absent continuous monitoring of supplier performance. The static optimisation trap describes network design that fails to adapt to demand changes. Compliance monitoring gap is not one of Chapter 35's three named structural failures.",
      source: "Lesson 1: Three Structural Failures"
    },
    {
      question: "Which of the following best describes the 'vendor blind spot' structural failure?",
      options: [
        "Invoices are matched manually rather than automatically",
        "Suppliers are monitored only at contract renewal rather than continuously",
        "Network design uses annual snapshots rather than real-time data",
        "Freight carriers are scored on cost alone, ignoring service levels"
      ],
      correctOption: 1,
      explanation: "The vendor blind spot means the organisation has no continuous monitoring of supplier performance: problems accumulate invisibly until a crisis or contract renewal forces a review. Manual invoice matching describes the reconciliation swamp. Using annual snapshots for network design describes the static optimisation trap. Scoring carriers on cost alone is a logistics scoring weakness but not one of the chapter's three named structural failures.",
      source: "Lesson 1: Three Structural Failures"
    },
    {
      question: "A supply chain director argues that the current distribution network was optimised three years ago and needs no review. Which structural failure does this attitude represent?",
      options: [
        "Reconciliation swamp",
        "Vendor blind spot",
        "Static optimisation trap",
        "Compliance monitoring gap"
      ],
      correctOption: 2,
      explanation: "The static optimisation trap occurs when network design is treated as a one-time exercise rather than a dynamic response to changing demand and costs. A network that was optimal three years ago may now be costly or fragile. The reconciliation swamp relates to invoice exception rates. The vendor blind spot relates to supplier monitoring frequency. Compliance monitoring gap is not one of the three named structural failures in Chapter 35.",
      source: "Lesson 1: Three Structural Failures"
    },
    {
      question: "The Chapter 35 plugin includes eight skills but deliberately omits a router skill. What is the primary reason for this architectural choice?",
      options: [
        "The skills are too complex to route automatically",
        "Procurement tasks require human selection to maintain audit trails",
        "The plugin was designed for single-user rather than team use",
        "Each skill is invoked directly, making a routing layer unnecessary"
      ],
      correctOption: 3,
      explanation: "Unlike some chapter plugins, the supply chain plugin has no router because each of the eight skills is designed to be invoked directly by name. This keeps the architecture simpler and removes an intermediary layer that could introduce routing errors. The absence of a router is not about audit trails or task complexity: it is a deliberate design decision. The plugin is equally suitable for team and individual use; user count does not drive the routing decision.",
      source: "Lesson 2: Plugin Architecture"
    },
    {
      question: "Which three skill names were renamed in the Chapter 35 plugin to avoid collision with Anthropic-owned surfaces?",
      options: [
        "/invoice-reconcile, /vendor-communicate, /supply-network-design",
        "/kraljic-map, /three-way-match, /spend-analytics",
        "/carrier-scorecard, /risk-monitor, /exit-protocol",
        "/spend-classify, /contract-draft, /supplier-onboard"
      ],
      correctOption: 0,
      explanation: "The three renamed skills are /invoice-reconcile, /vendor-communicate, and /supply-network-design. These names were chosen to avoid collision with Anthropic-owned command surfaces while preserving the core function of each skill. The other options list skills or names that are either not part of the plugin or were not subject to renaming. Understanding the renaming rationale matters for correctly invoking skills in Cowork and for plugin maintenance.",
      source: "Lesson 2: Plugin Architecture"
    },
    {
      question: "In the Kraljic Matrix, a commodity sits in the quadrant with low supply risk and low profit impact. Which quadrant represents the opposite extreme?",
      options: [
        "Tactical",
        "Strategic",
        "Commodity",
        "Bottleneck"
      ],
      correctOption: 1,
      explanation: "The Kraljic Matrix plots supply risk on one axis and profit impact on the other. Strategic items have both high supply risk and high profit impact: the opposite of Commodity items which have low risk and low impact. Tactical items have low supply risk but higher profit impact. Bottleneck items have high supply risk but low profit impact. Strategic items demand the most management attention and typically require partnership-level supplier relationships.",
      source: "Lesson 3: Kraljic Matrix"
    },
    {
      question: "A procurement analyst classifies a single-source industrial solvent as Bottleneck. The solvent represents 1% of total spend. Why is this classification the most dangerous category despite the low spend?",
      options: [
        "Low-spend items always receive less management attention",
        "Strategic items are more dangerous because they carry both high spend and high risk",
        "Bottleneck items combine low spend with high supply dependency, creating hidden vulnerability",
        "Commodity items are riskiest because they are purchased from many vendors simultaneously"
      ],
      correctOption: 2,
      explanation: "Bottleneck items are characterised by low spend but high supply dependency: the organisation cannot substitute or do without them easily. This combination is the most dangerous because the low spend figure makes the item invisible to cost-focused management while a supply disruption can halt production. Strategic items carry high risk too but their high spend makes them visible. Commodity items have low risk by definition. Tactical items have manageable supply risk despite higher spend.",
      source: "Lesson 3: Kraljic Matrix"
    },
    {
      question: "Which Kraljic quadrant combines high profit impact with low supply risk?",
      options: [
        "Strategic",
        "Bottleneck",
        "Commodity",
        "Tactical"
      ],
      correctOption: 3,
      explanation: "Tactical items sit in the quadrant with high profit impact but low supply risk: they contribute meaningfully to the business but can be sourced from multiple vendors relatively easily. Strategic items have both high profit impact and high supply risk. Bottleneck items have high supply risk but low profit impact. Commodity items have both low profit impact and low supply risk. Tactical items often benefit from supplier consolidation and volume leverage strategies.",
      source: "Lesson 3: Kraljic Matrix"
    },
    {
      question: "The Six-Dimension Assessment evaluates suppliers across commercial, operational, financial, compliance, strategic, and geopolitical dimensions. What is the On-Time Delivery threshold that defines acceptable operational performance?",
      options: [
        "Greater than 80%",
        "Greater than 90%",
        "Greater than 85%",
        "Greater than 95%"
      ],
      correctOption: 1,
      explanation: "The Six-Dimension Assessment sets the On-Time Delivery (OTD) threshold at greater than 90% for acceptable operational performance. Falling below this threshold signals a supplier requiring corrective action. The quality dimension uses a separate threshold of less than 1.5% defect rate. The other percentages listed are plausible but incorrect; 80% and 85% are too lenient for most B2B supply chains, and 95% is the threshold used in high-reliability industries not specified in Chapter 35.",
      source: "Lesson 4: Six-Dimension Assessment"
    },
    {
      question: "A supplier scores well on commercial and financial dimensions but its country of origin has just imposed new export restrictions. Which dimension of the Six-Dimension Assessment captures this risk?",
      options: [
        "Geopolitical",
        "Compliance",
        "Strategic",
        "Operational"
      ],
      correctOption: 0,
      explanation: "The geopolitical dimension of the Six-Dimension Assessment captures risks arising from trade policy, export controls, sanctions, and political instability in a supplier's country of operation. Export restrictions are a classic geopolitical risk trigger. The compliance dimension covers regulatory adherence within the buyer's jurisdiction. The strategic dimension covers alignment with long-term business objectives. The operational dimension covers delivery, quality, and capacity performance.",
      source: "Lesson 4: Six-Dimension Assessment"
    },
    {
      question: "What quality defect rate threshold does the Six-Dimension Assessment use to define acceptable supplier quality?",
      options: [
        "Less than 0.5%",
        "Less than 1.0%",
        "Less than 2.0%",
        "Less than 1.5%"
      ],
      correctOption: 3,
      explanation: "The Six-Dimension Assessment specifies a quality defect rate of less than 1.5% as the threshold for acceptable supplier quality in the operational dimension. This is paired with the OTD threshold of greater than 90%. Thresholds below 1.0% are typically reserved for safety-critical or pharmaceutical supply chains. Thresholds above 2.0% indicate a lenient standard inconsistent with the chapter's framework. The 1.5% figure is the specific benchmark taught in Chapter 35.",
      source: "Lesson 4: Six-Dimension Assessment"
    },
    {
      question: "Three-way matching compares which three documents to approve an invoice for payment?",
      options: [
        "Invoice, contract, and delivery note",
        "Invoice, bank statement, and supplier agreement",
        "Invoice, purchase order, and goods receipt",
        "Purchase order, payment run, and audit log"
      ],
      correctOption: 2,
      explanation: "Three-way matching compares the invoice against the purchase order (PO) and the goods receipt (GR) record. All three documents must agree within tolerance before payment is authorised. This prevents overpayment, duplicate payment, and fraud. Comparing against a contract is part of commercial review but not standard three-way matching. Bank statements are used for reconciliation after payment, not before. An audit log records what happened and is not a source document in the matching process.",
      source: "Lesson 5: Three-Way Match"
    },
    {
      question: "Under what circumstances is two-way matching: comparing only the invoice against the purchase order: considered sufficient?",
      options: [
        "For services, utilities, or items below the materiality threshold",
        "When the invoice exceeds the materiality threshold",
        "For all Strategic quadrant suppliers to speed up payment",
        "When the supplier has an OTD score above 90%"
      ],
      correctOption: 0,
      explanation: "Two-way matching (invoice against PO only) is appropriate for services where there is no physical goods receipt, for utilities billed periodically, and for invoices below the organisation's materiality threshold where the cost of three-way matching exceeds the risk of error. Two-way matching is never appropriate simply because a supplier scores well on OTD or because an item is Strategic. Invoices above the materiality threshold require the full three-way process regardless of supplier relationship.",
      source: "Lesson 5: Three-Way Match"
    },
    {
      question: "During invoice reconciliation, an exception flags that a supplier's bank account details have changed since the last payment run. How should this exception be treated?",
      options: [
        "As a low-priority formatting error requiring supplier confirmation",
        "As a high-priority fraud flag requiring immediate investigation",
        "As a medium-priority discrepancy to be resolved in the next batch",
        "As a routine update to be applied automatically after 48 hours"
      ],
      correctOption: 1,
      explanation: "A bank detail change on a supplier invoice is a primary fraud indicator: it is a common vector for payment diversion fraud, also known as business email compromise. Chapter 35 classifies this as a fraud flag requiring immediate investigation before any payment is made. Treating it as a routine update, a low-priority error, or a medium-priority discrepancy exposes the organisation to significant financial loss. The four-stage reconciliation process includes this as a specific fraud detection check.",
      source: "Lesson 6: Invoice Reconciliation"
    },
    {
      question: "An analyst notices the same invoice quantity discrepancy appearing on three consecutive invoices from the same vendor. How should this pattern be classified?",
      options: [
        "As three separate isolated exceptions requiring individual resolution",
        "As a tolerance breach that can be waived if the amounts are small",
        "As a data entry error on the buyer's side requiring internal correction",
        "As a systematic issue requiring root-cause investigation at the supplier"
      ],
      correctOption: 3,
      explanation: "Three or more of the same exception type from the same vendor is the threshold for classifying an issue as systematic rather than isolated. A systematic issue indicates a process failure at the supplier: such as incorrect unit-of-measure mapping or a billing system error: that will recur unless the root cause is addressed. Treating each as isolated wastes resolution effort. Waiving small amounts masks a growing liability. The chapter's four-stage reconciliation framework includes systematic pattern detection as a distinct stage.",
      source: "Lesson 6: Invoice Reconciliation"
    },
    {
      question: "The supplier risk framework uses five dimensions. When data is absent for a supplier, what risk rating must be assigned?",
      options: [
        "LOW, because absence of negative data implies low risk",
        "MEDIUM, as a neutral starting position pending further review",
        "UNASSESSED, because a rating cannot be justified without data",
        "HIGH, to apply the precautionary principle until data is gathered"
      ],
      correctOption: 2,
      explanation: "Chapter 35's supplier risk framework requires an UNASSESSED rating when data is absent: it is never acceptable to infer LOW risk from missing information. Absence of data means the risk is unknown, not absent. Assigning LOW without data is a false assurance that can lead to undetected supplier failures. MEDIUM as a neutral default is also incorrect because it implies a degree of knowledge that does not exist. UNASSESSED triggers a data-gathering action rather than masking the gap.",
      source: "Lesson 7: Supplier Risk"
    },
    {
      question: "For which Kraljic category does the supplier risk framework require Tier 2 supplier mapping?",
      options: [
        "Strategic",
        "Tactical",
        "Bottleneck",
        "Commodity"
      ],
      correctOption: 0,
      explanation: "Tier 2 mapping: identifying the suppliers of your suppliers: is required for Strategic category items. Strategic items carry both high profit impact and high supply risk, meaning a failure in a Tier 2 supplier can cascade to your business even if your direct Tier 1 supplier appears stable. Commodity and Tactical items have lower supply risk profiles that do not typically justify the cost of Tier 2 mapping. Bottleneck items may warrant selective Tier 2 review but the chapter specifies this requirement for Strategic items.",
      source: "Lesson 7: Supplier Risk"
    },
    {
      question: "A logistics manager reports that 12% of shipments required expedited freight last quarter. How should this figure be interpreted?",
      options: [
        "As an acceptable level of supply chain agility",
        "As a signal of an upstream planning or supplier performance problem",
        "As a cost that should be absorbed in the logistics budget",
        "As a carrier reliability issue requiring scorecard review only"
      ],
      correctOption: 1,
      explanation: "An expedited freight rate above 10% is a warning signal that an upstream problem exists: typically poor demand forecasting, supplier delivery failures, or inadequate buffer stock. Expedited shipping is a symptom, not a root cause. Accepting it as normal agility or absorbing it as a budget line ignores the underlying issue and ensures costs will persist. While carrier scorecard review is useful, the 10%+ expedite rate points to planning or supplier failures upstream of the carrier relationship.",
      source: "Lesson 8: Logistics"
    },
    {
      question: "In logistics carbon accounting, freight emissions are classified under which scope of the GHG Protocol?",
      options: [
        "Scope 1",
        "Scope 2",
        "Scope 3",
        "Scope 4"
      ],
      correctOption: 2,
      explanation: "Freight and logistics emissions fall under Scope 3 of the Greenhouse Gas Protocol: indirect emissions in a company's value chain that are not owned or directly controlled by the reporting organisation. Scope 1 covers direct emissions from owned sources such as company vehicles. Scope 2 covers purchased electricity and heat. Scope 4 is not an official GHG Protocol category. Logistics procurement decisions, including carrier selection and modal shift, are a primary lever for reducing Scope 3 emissions.",
      source: "Lesson 8: Logistics"
    },
    {
      question: "Which two trigger conditions in the Chapter 35 framework indicate that a network design review is required?",
      options: [
        "Invoice discrepancy rate >15% and supplier OTD <90%",
        "Bottleneck supplier count >3 and Strategic supplier count >5",
        "Spend concentration >60% and geopolitical risk elevated",
        "Demand change >20% and carrier cost increase >15%"
      ],
      correctOption: 3,
      explanation: "The network design review triggers defined in Chapter 35 are a demand change exceeding 20% or a carrier cost increase exceeding 15%. Either condition can make the current network suboptimal. The other combinations describe thresholds from other chapters or frameworks: invoice discrepancy and OTD drive reconciliation and supplier reviews, not network redesign. Spend concentration and geopolitical triggers drive sourcing strategy reviews. Supplier count thresholds are not defined network redesign triggers in the chapter.",
      source: "Lesson 9: Network Design"
    },
    {
      question: "When running a network design analysis, what must be produced alongside the scenario comparison to validate the recommendation?",
      options: [
        "A Gantt chart showing implementation milestones",
        "A sensitivity analysis testing key assumptions",
        "A full list of all current carrier contracts",
        "A carbon emission reduction forecast for each scenario"
      ],
      correctOption: 1,
      explanation: "Chapter 35 requires that a network design scenario comparison be accompanied by a sensitivity analysis that tests how the recommendation holds up when key assumptions: such as demand forecasts, fuel costs, or lead times: are varied. A recommendation that is only optimal under a single set of assumptions may be fragile. Gantt charts and carrier contract lists are implementation tools, not analytical requirements at the design stage. Carbon forecasts are valuable but not the primary validation requirement in the chapter's framework.",
      source: "Lesson 9: Network Design"
    },
    {
      question: "Spend analytics in Chapter 35 covers four types of analysis. When a commodity category exceeds what spend concentration threshold does the framework recommend renegotiation?",
      options: [
        "Greater than 8%",
        "Greater than 5%",
        "Greater than 10%",
        "Greater than 15%"
      ],
      correctOption: 0,
      explanation: "The Chapter 35 spend analytics framework recommends initiating renegotiation when a commodity category exceeds 8% of total spend. At this concentration level, the organisation has sufficient leverage to negotiate improved terms. Below 8%, the spend may not justify the time cost of renegotiation. Above this threshold, leaving pricing unchanged is a missed savings opportunity. The 8% figure is the specific threshold taught in the chapter alongside the four types of spend analysis.",
      source: "Lesson 10: Spend Analytics"
    },
    {
      question: "In the savings tracking framework, what is the correct sequence of savings states from identification through realisation?",
      options: [
        "Captured → Active → Identified",
        "Active → Identified → Captured",
        "Identified → Active → Captured",
        "Identified → Captured → Active"
      ],
      correctOption: 2,
      explanation: "The savings tracking progression is Identified (opportunity found and sized), Active (initiative underway: negotiation, tender, or consolidation in progress), and Captured (saving realised and reflected in actual spend or contract). Reversing the order, such as claiming Captured savings before an initiative is Active, is a common reporting error that inflates procurement performance. Procurement dashboards should show the pipeline across all three states so leadership can see both current savings and future potential.",
      source: "Lesson 10: Spend Analytics"
    },
    {
      question: "Which of the five supplier communication types in Chapter 35 is used to formally document a recurring performance failure and request a corrective action plan?",
      options: [
        "Dispute communication",
        "Emergency assurance communication",
        "Non-renewal notice",
        "Corrective Action Request (CAR)"
      ],
      correctOption: 3,
      explanation: "A Corrective Action Request (CAR) is the formal communication used when a supplier has a recurring performance failure that requires a documented response and remediation plan. A dispute communication challenges a specific invoice or contract interpretation. A non-renewal notice informs a supplier that the contract will not be extended. An emergency assurance communication is sent when an urgent supply risk requires immediate confirmation of the supplier's ability to deliver. All five types generate an audit trail.",
      source: "Lesson 11: Communications"
    },
    {
      question: "Why is maintaining an audit trail the critical requirement across all five supplier communication types?",
      options: [
        "It provides legal and contractual evidence in disputes and exit processes",
        "It satisfies internal KPI reporting requirements",
        "It enables the AI agent to learn from past communications",
        "It reduces the time required to draft future communications"
      ],
      correctOption: 0,
      explanation: "An audit trail across all supplier communications provides legal and contractual evidence that can be used in disputes, arbitration, or regulatory investigations. When a vendor exit or payment dispute escalates, the absence of documented communications severely weakens the buyer's position. KPI reporting is a secondary benefit. While an audit trail can inform agent behaviour, that is not its primary purpose. Communication templates reduce drafting time but the audit trail is the compliance and legal requirement driving the design.",
      source: "Lesson 11: Communications"
    },
    {
      question: "The procurement-calendar agent manages a cascade of review triggers. What action is scheduled at the 120-day milestone before contract expiry?",
      options: [
        "Issue the non-renewal notice to the supplier",
        "Initiate the supplier performance review and renewal decision",
        "Launch the emergency RFQ for replacement sourcing",
        "Send the corrective action request for outstanding issues"
      ],
      correctOption: 1,
      explanation: "The 120-day milestone in the procurement-calendar cascade triggers the supplier performance review and internal decision on whether to renew, renegotiate, or exit. This gives sufficient lead time to run a competitive tender if exit is chosen. The non-renewal notice is issued closer to expiry, typically at the 90 or 60-day mark. Emergency RFQ is not part of the scheduled cascade: it is triggered by unexpected supplier failure. Corrective action requests are issued based on performance events, not calendar countdown.",
      source: "Lesson 12: Agents and Schedule"
    },
    {
      question: "Chapter 35 introduces five persistent agents. Which agent is responsible for generating the procurement-calendar schedule and milestone alerts?",
      options: [
        "The invoice-monitor agent",
        "The risk-sentinel agent",
        "The spend-tracker agent",
        "The procurement-calendar agent"
      ],
      correctOption: 3,
      explanation: "The procurement-calendar agent manages the 120/90/60/30-day cascade of contract renewal milestones and generates alerts and action triggers at each stage. The invoice-monitor agent watches for invoice anomalies. The risk-sentinel agent monitors supplier risk signals. The spend-tracker agent tracks spend against categories and savings states. Each agent has a distinct persistent function; the procurement-calendar agent specifically owns the time-based contract management workflow.",
      source: "Lesson 12: Agents and Schedule"
    },
    {
      question: "In a vendor exit scenario, what is the purpose of the post-mortem conducted after the exit is complete?",
      options: [
        "To calculate the final invoice settlement amount owed to the exiting vendor",
        "To formally close the supplier record in the ERP system",
        "To identify what went wrong, update the supplier risk framework, and prevent recurrence",
        "To notify remaining suppliers about the change in the supply base"
      ],
      correctOption: 2,
      explanation: "The post-mortem after a vendor exit is a learning exercise: it identifies what warning signals were missed, what the risk framework failed to detect, and what process changes would prevent a similar costly exit in the future. Financial settlement and ERP record closure are administrative tasks, not the purpose of a post-mortem. Notifying other suppliers may be required operationally but is not the post-mortem objective. The post-mortem output feeds directly back into the supplier risk and monitoring frameworks.",
      source: "Lesson 13: Vendor Exit"
    },
    {
      question: "During a 60-day vendor exit scenario, when should the emergency RFQ process be launched?",
      options: [
        "Only after the replacement supplier has been identified internally",
        "Immediately, in parallel with serving the exit notice, to protect supply continuity",
        "After the post-mortem has been completed and lessons documented",
        "At the 30-day mark once the exiting vendor has confirmed wind-down plans"
      ],
      correctOption: 1,
      explanation: "The emergency RFQ must be launched immediately and in parallel with the exit notice to protect supply continuity within the 60-day window. Waiting for internal identification first, or until the 30-day mark, compresses the sourcing timeline dangerously. The post-mortem comes after the exit is complete, not during the active exit phase. Running RFQ and exit notice in parallel is the key lesson: the two tracks are concurrent, not sequential, to avoid a supply gap.",
      source: "Lesson 13: Vendor Exit"
    },
    {
      question: "The capstone exercise in Chapter 35 requires using all eight skills and all five agents across seven phases. What does this structure demonstrate about enterprise supply chain intelligence?",
      options: [
        "That full supply chain intelligence requires orchestrating skills and agents as a system",
        "That individual skills are more powerful when used in isolation for focused tasks",
        "That the plugin is too complex for everyday procurement use",
        "That agents should replace human procurement professionals entirely"
      ],
      correctOption: 0,
      explanation: "The seven-phase capstone demonstrates that enterprise supply chain intelligence emerges from orchestrating all eight skills and five agents together as a system: not from any single skill in isolation. The chapter's three structural failures each require multiple capabilities to address. Skills handle discrete analytical tasks while agents provide continuous monitoring and scheduling. The capstone explicitly rejects the idea that supply chain AI is a collection of point tools; it is an integrated operational capability. Human professionals direct and review the system throughout.",
      source: "Lesson 14: Capstone"
    },
    {
      question: "What is the primary purpose of the Quick Reference lesson at the end of Chapter 35?",
      options: [
        "To introduce new skills not covered in the main lessons",
        "To summarise the academic theory behind supply chain management",
        "To provide a consolidated reference for skill invocations, thresholds, and agent triggers",
        "To list all plugin installation commands for technical setup"
      ],
      correctOption: 2,
      explanation: "The Quick Reference lesson consolidates the chapter's key skill invocations, threshold values (OTD, quality, spend concentration, network triggers), agent functions, and decision rules into a single reference page for operational use. It does not introduce new skills: all skills are taught in prior lessons. It is a practitioner reference, not academic theory. Installation commands are covered in the plugin architecture lesson, not the quick reference. The quick reference is designed for use during actual procurement workflows.",
      source: "Lesson 15: Quick Reference"
    },
    {
      question: "A procurement manager uses only the invoice-reconcile skill without activating the risk-sentinel or procurement-calendar agents. Which structural failure does this approach leave unaddressed?",
      options: [
        "The reconciliation swamp only",
        "All three structural failures simultaneously",
        "The compliance monitoring gap only",
        "The vendor blind spot and the static optimisation trap"
      ],
      correctOption: 3,
      explanation: "Using only the invoice-reconcile skill addresses the reconciliation swamp by improving exception handling. However, the vendor blind spot: the absence of continuous supplier monitoring: requires the risk-sentinel agent. The static optimisation trap: network design that does not adapt: requires the network design skill and supporting agents. Using a single skill in isolation leaves two of the three structural failures completely unaddressed. Chapter 35's integrated approach is designed precisely to address all three failures together.",
      source: "Lesson 1: Three Structural Failures"
    },
    {
      question: "A procurement analyst runs a Kraljic assessment and finds that packaging materials represent 18% of spend and can be sourced from twelve qualified vendors globally. Which quadrant should packaging be assigned?",
      options: [
        "Tactical, due to high spend and low supply risk",
        "Strategic, due to the high spend",
        "Bottleneck, due to the number of available vendors",
        "Commodity, due to low spend and low risk"
      ],
      correctOption: 0,
      explanation: "Packaging at 18% of spend represents meaningful profit impact, and twelve qualified global vendors means supply risk is low: this combination places it in the Tactical quadrant. It does not qualify as Strategic because supply risk is low despite the high spend. Bottleneck requires high supply risk, which contradicts having twelve qualified vendors. Commodity requires both low profit impact and low supply risk; 18% of spend is not low impact. The Tactical classification suggests a leverage and volume-consolidation strategy.",
      source: "Lesson 3: Kraljic Matrix"
    },
    {
      question: "During a Six-Dimension Assessment, a supplier scores 94% OTD and 1.2% defect rate but has no publicly available financial statements. How should the financial dimension be scored?",
      options: [
        "HIGH financial risk, because undisclosed financials are inherently risky",
        "UNASSESSED, because a rating cannot be made without the required data",
        "LOW financial risk, because operational performance suggests financial stability",
        "MEDIUM financial risk, as a neutral default pending document request"
      ],
      correctOption: 1,
      explanation: "Strong operational performance does not imply financial health: a supplier can deliver reliably until the day it enters insolvency. Without financial statements, the financial dimension must be scored UNASSESSED. The UNASSESSED rating triggers a data-collection action rather than inferring risk level from incomplete information. MEDIUM as a neutral default is incorrect because it implies knowledge that does not exist. This mirrors the supplier risk rule: absent data always yields UNASSESSED, never a favourable rating.",
      source: "Lesson 4: Six-Dimension Assessment"
    },
    {
      question: "An invoice is received for consultancy services with no associated goods receipt. Which matching approach is correct?",
      options: [
        "Three-way match using the most recent purchase order as a proxy GR",
        "Four-way match adding the signed statement of work",
        "Two-way match comparing invoice against the purchase order only",
        "Hold payment until a retrospective goods receipt is created"
      ],
      correctOption: 2,
      explanation: "For services, there is no physical goods receipt because nothing tangible was delivered to a warehouse. Two-way matching: comparing the invoice against the purchase order: is the appropriate approach. Creating a retrospective GR is a process workaround that undermines the integrity of the goods receipt record. A four-way match including a statement of work is an additional control some organisations apply but is not the standard defined in Chapter 35. Two-way matching for services is an explicit exception rule in the three-way match framework.",
      source: "Lesson 5: Three-Way Match"
    },
    {
      question: "The invoice reconciliation process has four stages. Which stage specifically checks for systematic patterns such as repeated exception types from the same vendor?",
      options: [
        "Stage 1: Document ingestion and field extraction",
        "Stage 2: Tolerance checking against the purchase order",
        "Stage 4: Escalation routing and approval workflow",
        "Stage 3: Pattern detection across the exception log"
      ],
      correctOption: 3,
      explanation: "Stage 3 of the four-stage invoice reconciliation process is dedicated to pattern detection: examining the exception log to identify whether the same exception type is recurring from the same vendor, which signals a systematic issue. Stage 1 handles document ingestion and field extraction. Stage 2 runs tolerance checks against the PO. Stage 4 manages escalation and approval routing. Pattern detection is explicitly separated as its own stage because it requires looking across multiple invoices, not just analysing a single document.",
      source: "Lesson 6: Invoice Reconciliation"
    },
    {
      question: "A supplier delivers 88% on time consistently over six months. According to the Six-Dimension Assessment framework, what action does this performance level require?",
      options: [
        "No action, as 88% is within an acceptable operational range",
        "A corrective action request, as OTD is below the 90% threshold",
        "Immediate non-renewal notice due to sustained underperformance",
        "A Kraljic reclassification from Strategic to Bottleneck"
      ],
      correctOption: 1,
      explanation: "An OTD of 88% falls below the 90% threshold defined in the Six-Dimension Assessment framework's operational dimension, requiring a Corrective Action Request (CAR) to formally document the performance gap and request a remediation plan. It does not automatically trigger non-renewal: that escalation follows if corrective action fails. Reclassifying the supplier in the Kraljic Matrix is driven by supply risk and profit impact changes, not operational KPI shortfalls. Six months of data makes this a persistent issue rather than a one-off exception.",
      source: "Lesson 4: Six-Dimension Assessment"
    },
    {
      question: "When a supply chain agent operates persistently and detects a new geopolitical event affecting a Strategic supplier's country, what is the correct immediate action?",
      options: [
        "Raise an alert with a preliminary risk assessment for human review",
        "Automatically place the supplier order on hold pending human approval",
        "Wait for the next scheduled quarterly review to assess impact",
        "Reclassify the supplier to Bottleneck status in the risk register"
      ],
      correctOption: 0,
      explanation: "A persistent agent detecting a geopolitical event should raise an alert with a preliminary risk assessment: surfacing the signal to the human procurement team for decision-making. Waiting for a quarterly review defeats the purpose of continuous monitoring. Automatically placing orders on hold could disrupt supply without human judgement. Reclassifying the supplier is a human decision requiring full Six-Dimension Assessment review, not an automated agent action. The agent's role is detection and escalation, not autonomous decision execution.",
      source: "Lesson 7: Supplier Risk"
    },
    {
      question: "A carrier's scorecard shows 95% on-time delivery but their expedited freight bookings from this shipper account for 14% of volume. What does this combination indicate?",
      options: [
        "Excellent carrier performance with minor planning variability",
        "A data quality issue where expedited and standard bookings are miscategorised",
        "A carrier that specialises in urgent freight and should be used more widely",
        "An upstream planning or supplier failure masking carrier performance data"
      ],
      correctOption: 3,
      explanation: "When expedited freight exceeds 10% of volume, it indicates an upstream problem: poor demand forecasting or supplier delivery failures: that is being solved by paying premium rates to the carrier. A high carrier OTD score in this context is misleading: the organisation is essentially buying performance by using expedited services. Treating the carrier as a specialist in urgent freight encourages the root cause to persist. The 14% expedite rate is the signal that the problem lies upstream of the carrier relationship.",
      source: "Lesson 8: Logistics"
    },
    {
      question: "A network design scenario analysis recommends shifting 30% of volume from road to rail. What must accompany this recommendation for it to be valid under Chapter 35's framework?",
      options: [
        "Board-level sign-off before the analysis is shared with operations",
        "A complete list of all current carrier contracts and termination clauses",
        "A sensitivity analysis showing how the recommendation changes under different cost assumptions",
        "An environmental impact statement quantifying the Scope 3 reduction"
      ],
      correctOption: 2,
      explanation: "Any network design recommendation must be accompanied by a sensitivity analysis that tests whether the recommendation holds under different assumptions for fuel costs, demand volumes, lead times, or carrier pricing. A recommendation that collapses when a single assumption changes by 10% is not robust enough to justify capital or contract commitments. Board approval, carrier contract lists, and environmental statements may all be required at implementation stage but are not the analytical validation requirement specified in Chapter 35's network design framework.",
      source: "Lesson 9: Network Design"
    },
    {
      question: "A spend analysis reveals that the top three vendors in the MRO category represent 73% of category spend. What action does the Chapter 35 framework recommend?",
      options: [
        "Diversify to reduce single-vendor dependency immediately",
        "Assess whether concentration provides leverage for renegotiation",
        "Split spend across more vendors to reduce Bottleneck risk",
        "Flag for geopolitical risk review given high supply concentration"
      ],
      correctOption: 1,
      explanation: "High spend concentration in a category provides negotiating leverage: the organisation is an important customer to those three vendors. The framework recommends assessing whether this concentration can be used to negotiate better pricing, terms, or service levels. Automatic diversification sacrifices leverage. Whether concentration creates Bottleneck risk depends on the Kraljic classification of MRO, not the spend percentage alone. Geopolitical review is driven by supplier geography and Kraljic classification, not by spend concentration within a category.",
      source: "Lesson 10: Spend Analytics"
    },
    {
      question: "A savings initiative is progressing through negotiation with three shortlisted vendors but no contract has been signed. Which savings state should it be classified as?",
      options: [
        "Active, because the initiative is underway with vendors engaged",
        "Identified, because no contract is signed yet",
        "Captured, because the preferred vendor has been selected",
        "Deferred, because final decision is pending budget approval"
      ],
      correctOption: 0,
      explanation: "An initiative in active vendor negotiation is in the Active savings state: the opportunity has been identified, vendors are engaged, and work is underway to realise the saving. Identified applies when the opportunity has been sized but no action has begun. Captured applies only when the saving is reflected in actual spend or a signed contract. Deferred is not one of the three states in the Chapter 35 savings framework. Correctly classifying the state ensures the pipeline report accurately distinguishes committed savings from potential ones.",
      source: "Lesson 10: Spend Analytics"
    },
    {
      question: "A procurement manager needs to inform a supplier that due to strategic realignment their contract will not be renewed at expiry. Which communication type should be used?",
      options: [
        "Dispute communication",
        "Corrective Action Request",
        "Non-renewal notice",
        "Emergency assurance communication"
      ],
      correctOption: 2,
      explanation: "A non-renewal notice is the correct communication type when informing a supplier that a contract will not be extended at its natural expiry date, regardless of whether performance has been satisfactory. A dispute communication addresses a specific invoice or contractual disagreement. A Corrective Action Request is used for recurring performance failures. An emergency assurance communication is used when urgent supply risk requires immediate confirmation of delivery capability. The non-renewal notice should be issued at the appropriate calendar milestone: typically 90 or 60 days before expiry.",
      source: "Lesson 11: Communications"
    },
    {
      question: "Why must all supplier communications: including routine performance updates: maintain a formal audit trail?",
      options: [
        "To satisfy the procurement-calendar agent's data requirements",
        "To demonstrate to internal stakeholders that the procurement team is active",
        "To ensure the risk-sentinel agent can access communication history for scoring",
        "To provide evidence in potential disputes, contract terminations, or regulatory investigations"
      ],
      correctOption: 3,
      explanation: "Audit trails across all five communication types exist primarily to create legal and contractual evidence. In a dispute, termination, or regulatory investigation, undocumented communications are unenforceable and may actually harm the buyer's position. Agent data requirements are a secondary operational benefit. Demonstrating team activity to stakeholders is a governance benefit but not the primary driver. Risk-sentinel scoring may use communication history but that is a design choice, not the reason audit trails are mandatory.",
      source: "Lesson 11: Communications"
    },
    {
      question: "The procurement-calendar agent operates a 120/90/60/30-day cascade. What is the primary purpose of the 30-day milestone action?",
      options: [
        "To initiate the formal supplier performance review",
        "To execute final transition steps and confirm handover readiness",
        "To issue the non-renewal or renewal notice to the supplier",
        "To launch the emergency RFQ process for replacement sourcing"
      ],
      correctOption: 1,
      explanation: "The 30-day milestone is the final checkpoint in the procurement-calendar cascade: at this point, decisions have been made and the focus shifts to executing transition steps: confirming the incoming supplier is ready, ensuring knowledge transfer is complete, and verifying that no supply gap will occur at contract expiry. The supplier performance review happens at 120 days. Non-renewal or renewal notices are issued at 90 days. Emergency RFQ is an unscheduled event triggered by unexpected supplier failure, not a calendar milestone.",
      source: "Lesson 12: Agents and Schedule"
    },
    {
      question: "Which of the five Chapter 35 agents provides continuous monitoring of supplier risk signals between scheduled review cycles?",
      options: [
        "Risk-sentinel agent",
        "Invoice-monitor agent",
        "Procurement-calendar agent",
        "Spend-tracker agent"
      ],
      correctOption: 0,
      explanation: "The risk-sentinel agent provides continuous between-cycle monitoring of supplier risk signals: news events, financial alerts, regulatory actions, and geopolitical developments that could affect supplier viability. The procurement-calendar agent manages time-based contract milestones. The invoice-monitor agent watches for invoice anomalies and exception patterns. The spend-tracker agent monitors spend against categories and savings states. The risk-sentinel specifically addresses the vendor blind spot structural failure by providing real-time rather than periodic risk visibility.",
      source: "Lesson 12: Agents and Schedule"
    },
    {
      question: "During a vendor exit, the exiting supplier refuses to provide transition documentation for a proprietary process. Which communication type should be sent?",
      options: [
        "A non-renewal notice confirming the exit timeline",
        "A corrective action request for the documentation failure",
        "An emergency assurance communication requesting immediate delivery confirmation",
        "A dispute communication citing the contractual documentation obligation"
      ],
      correctOption: 3,
      explanation: "Withholding contractual transition documentation is a breach of the contract's exit obligations, making a dispute communication the appropriate tool: it formally cites the contractual obligation and puts the supplier on notice. A non-renewal notice was already issued earlier in the exit process. An emergency assurance communication addresses supply delivery risk, not documentation disputes. A CAR is for recurring performance failures, not contractual exit obligations. The dispute communication creates the legal evidence trail needed if escalation to legal counsel becomes necessary.",
      source: "Lesson 13: Vendor Exit"
    },
    {
      question: "What is the significance of the 60-day vendor exit scenario specifically, rather than a 90-day or 30-day scenario?",
      options: [
        "60 days is the minimum notice period required by UK procurement regulations",
        "60 days is the standard contract notice period in most commercial agreements",
        "60 days represents the tight window that requires concurrent action on multiple tracks",
        "60 days is chosen because it matches the procurement-calendar cascade intervals"
      ],
      correctOption: 2,
      explanation: "The 60-day scenario is taught because it represents a constrained window that requires running multiple tracks simultaneously: exit notice, emergency RFQ, transition planning, and post-mortem preparation: rather than sequentially. It illustrates how to orchestrate the full toolkit under time pressure. The scenario is not derived from UK regulatory requirements or standard notice period norms. The 60-day timeframe is a teaching construct that demonstrates the highest-value orchestration challenge: maintaining supply continuity under an aggressive exit timeline.",
      source: "Lesson 13: Vendor Exit"
    },
    {
      question: "In the capstone exercise, Phase 1 establishes the Kraljic classification before any other work begins. Why is this the correct starting sequence?",
      options: [
        "Kraljic classification determines the management strategy for all subsequent phases",
        "Regulatory compliance requires Kraljic classification before any supplier contact",
        "The invoice-reconcile skill cannot function without a prior Kraljic assessment",
        "Phase 1 must be completed before the plugin can be installed"
      ],
      correctOption: 0,
      explanation: "Starting with Kraljic classification is correct because it determines the appropriate management strategy for all subsequent phases: which suppliers need Tier 2 mapping, which communication tone to use, how much network design investment is justified, and what risk monitoring intensity is required. Without knowing whether a supplier is Strategic, Tactical, Bottleneck, or Commodity, every subsequent decision lacks its foundational context. The skill dependencies and regulatory requirements in the other options are not accurate characterisations of the capstone structure.",
      source: "Lesson 14: Capstone"
    },
    {
      question: "A supply chain analyst completes the Chapter 35 capstone and uses all eight skills but only activates two of the five agents. Which structural failure remains partially unaddressed?",
      options: [
        "The reconciliation swamp, because invoice-monitor is not active",
        "The vendor blind spot, because continuous monitoring requires agents not just skills",
        "The static optimisation trap, because the network design skill alone is insufficient",
        "All three structural failures, because skills without agents provide no intelligence"
      ],
      correctOption: 1,
      explanation: "The vendor blind spot specifically requires persistent agents: particularly the risk-sentinel and procurement-calendar agents: to provide continuous monitoring between manual reviews. Skills are invoked on demand and cannot watch for signals autonomously. Using only skills means the organisation still has periodic rather than continuous supplier visibility. The reconciliation swamp can be significantly addressed by the invoice-reconcile skill even without an invoice-monitor agent for continuous watching. The static optimisation trap is addressed primarily through the network design skill.",
      source: "Lesson 14: Capstone"
    },
    {
      question: "A new procurement analyst asks why the plugin has exactly eight skills rather than consolidating the eight functions into three or four broader skills. What is the best answer from Chapter 35's framework?",
      options: [
        "Eight is the maximum number of skills a Claude plugin can contain",
        "Each skill maps to a distinct analytical domain with different data inputs and outputs",
        "Fewer skills would reduce the plugin's marketability in the agent marketplace",
        "Eight skills are required to cover the seven capstone phases plus one overlap"
      ],
      correctOption: 1,
      explanation: "Each of the eight skills in the Chapter 35 plugin addresses a distinct analytical domain: invoice reconciliation, supplier risk assessment, network design, spend analytics, logistics scoring, communications drafting, Kraljic mapping, and Six-Dimension Assessment: with different data requirements, methodologies, and output formats. Consolidating them would create multi-purpose skills that are harder to invoke precisely and harder to maintain. Plugin skill count is not technically capped at eight. Marketability and phase count are not the architectural drivers.",
      source: "Lesson 2: Plugin Architecture"
    },
    {
      question: "Which combination of dimensions in the Six-Dimension Assessment is most likely to surface a risk that has not yet appeared in financial statements or operational KPIs?",
      options: [
        "Commercial and financial dimensions",
        "Operational and compliance dimensions",
        "Geopolitical and strategic dimensions",
        "Geopolitical and compliance dimensions"
      ],
      correctOption: 3,
      explanation: "Geopolitical and compliance dimensions surface emerging risks: regulatory changes, sanctions, export restrictions, and political instability: that can materially affect a supplier before they appear in financial statements or operational delivery data. Commercial and financial dimensions are lag indicators that reflect problems after they have manifested. Operational KPIs are also lag indicators. The geopolitical and compliance dimensions function as leading indicators, which is why the Six-Dimension framework requires all six rather than relying on financial and operational data alone.",
      source: "Lesson 4: Six-Dimension Assessment"
    },
    {
      question: "A procurement team receives an invoice where the unit price matches the PO but the quantity is 5% above the GR quantity, and the total invoice value is £180,000. Should tolerance rules allow automatic approval?",
      options: [
        "Yes, if the 5% quantity variance is within the configured tolerance band",
        "No, because the high invoice value requires manual approval regardless of variance",
        "Yes, because quantity variances under 10% are always within tolerance",
        "No, because three-way match quantity variances always require manual resolution"
      ],
      correctOption: 0,
      explanation: "Three-way match processes include configurable tolerance rules precisely to handle small variances without requiring manual intervention on every invoice. If the organisation's tolerance rule permits a 5% quantity variance (which is common for goods that are counted or weighed), automatic approval is appropriate. The high invoice value creates a legitimate argument for a lower tolerance threshold, but the question tests whether tolerance rules are applied: not overridden by value alone. Blanket rules requiring manual resolution for all quantity variances defeat the automation purpose.",
      source: "Lesson 5: Three-Way Match"
    },
    {
      question: "The risk-sentinel agent flags that a Tier 1 Strategic supplier has excellent scores on all six assessment dimensions but one of their key raw material suppliers (a Tier 2 supplier) has just entered administration. What action is required?",
      options: [
        "No action, because the Tier 1 supplier's scores remain strong",
        "Initiate a Six-Dimension reassessment of the Tier 1 supplier only",
        "Activate contingency sourcing review because Tier 2 failure threatens Tier 1 continuity",
        "Reclassify the Tier 1 supplier from Strategic to Bottleneck immediately"
      ],
      correctOption: 2,
      explanation: "Tier 2 mapping exists precisely for this scenario. A Tier 2 supplier entering administration is a direct threat to the Tier 1 supplier's ability to deliver, regardless of that Tier 1 supplier's current assessment scores. The correct action is to activate a contingency sourcing review to understand the Tier 1 supplier's exposure and alternative sourcing options. Reassessing the Tier 1 supplier in isolation ignores the supply chain systemic risk. Immediate reclassification requires a full assessment, not just an external event trigger.",
      source: "Lesson 7: Supplier Risk"
    },
    {
      question: "An organisation's spend analytics shows that three categories each exceed 8% concentration with a single vendor: IT hardware, facility management, and industrial gases. In which order should renegotiation be prioritised?",
      options: [
        "Alphabetical order, for process consistency",
        "By Kraljic classification: Strategic first, then Bottleneck, then Tactical",
        "By absolute spend value, largest category first",
        "By contract expiry date, soonest expiry first"
      ],
      correctOption: 1,
      explanation: "Renegotiation priority should follow the Kraljic classification: Strategic items carry the highest combined risk and profit impact and should be addressed first. Bottleneck items, despite lower spend, have high supply risk that makes renegotiation urgent. Tactical items have high spend but lower risk urgency. Alphabetical ordering has no business logic. Prioritising by absolute spend might miss a low-spend Bottleneck item that poses a production-halting risk. Contract expiry date matters for timing but does not override the strategic prioritisation of categories by risk and impact.",
      source: "Lesson 10: Spend Analytics"
    },
    {
      question: "Why does the Chapter 35 plugin architecture specify five distinct agents rather than relying solely on skill invocations by the procurement team?",
      options: [
        "Agents are cheaper to run than repeated skill invocations",
        "Agents provide persistent, continuous monitoring that on-demand skill invocations cannot",
        "Skills cannot process the volume of data required for enterprise procurement",
        "Agents are required by the plugin specification format even if skills could do the work"
      ],
      correctOption: 1,
      explanation: "The five agents address a fundamental limitation of on-demand skill invocations: skills only act when invoked by a human. The vendor blind spot structural failure exists precisely because humans do not continuously monitor suppliers: they check periodically. Agents run persistently, monitor data streams, detect events between human-initiated reviews, and raise alerts proactively. This is the architectural answer to continuous monitoring. Cost, data volume, and specification requirements are not the reasons the agent layer exists in Chapter 35's design.",
      source: "Lesson 12: Agents and Schedule"
    }
  ]}
questionsPerBatch={18}
/>
