---
sidebar_position: 17
title: "Chapter 40: Intrapreneurship & Innovation Agents Quiz"
---

# Chapter 40 Quiz

Test your understanding of the DLA Stack, customer discovery, assumption mapping, business model design, financial modelling, and the innovation agent architecture.

<Quiz
title="Chapter 40 Assessment"
questions={[
{
question: "A startup founder builds a polished MVP with a beautiful dashboard and clever PO-matching algorithm, then discovers after six months that no CFO wanted the product. Which DLA stage did the founder skip?",
options: ["Design Thinking: the founder never validated whether the problem was real", "Agile: the delivery sprints were not iterative enough to catch the problem", "Lean Startup: the founder did not build a minimum viable test before committing", "All three stages were attempted but executed in the wrong overall sequence"],
correctOption: 0,
explanation: "Design Thinking operates at the problem level and answers 'what is the real problem worth solving?' Skipping it means building a solution to an imagined problem. Agile handles delivery once you know what to build: the sprints were irrelevant because the problem was unvalidated. Lean Startup tests solution assumptions, but the failure here was at the problem level: the founder never confirmed the problem existed. The scenario describes skipping one specific stage, not all three.",
source: "Lesson 1: The Innovation OS"
},
{
question: "An innovation team uses Design Thinking to deeply understand their customer's pain, then immediately starts building features using Agile sprints. According to the DLA Stack, what predictable failure mode will this produce?",
options: ["Beautifully understood problem that never gets a validated or tested solution", "Learning without delivery because the team never ships anything useful", "Well-executed solution that is adopted by nobody at all", "Validated idea executed chaotically with no project management discipline"],
correctOption: 0,
explanation: "Skipping Lean Startup means the team understood the problem (Design Thinking) but never validated whether their specific solution was the right answer. This produces a well-understood problem with an untested solution. Option A describes skipping Design Thinking entirely. Option B describes using Lean Startup without Agile. Option D describes using Design Thinking and Lean Startup but skipping Agile. The DLA Stack requires all three stages in sequence.",
source: "Lesson 1: The Innovation OS"
},
{
question: "According to the DLA Stack, AI compresses execution overhead at every stage. Which of the following does AI explicitly NOT do in the innovation process?",
options: ["Synthesise 10 customer interviews into an insight map in approximately 2 hours", "Decide whether an idea is good or whether a customer insight is actually accurate", "Generate 100 structured ideas across 10 categories in a single brainstorming session", "Build a first-draft Business Model Canvas with stress-test analysis in one sitting"],
correctOption: 1,
explanation: "The lesson states explicitly: AI does not tell you whether your idea is good, whether your customer insight is accurate, or whether your financial model is believable. It does not validate assumptions, customers do that. It does not decide whether to pivot; you do that. AI eliminates execution overhead (synthesis, structuring, first drafts) but the entrepreneur's judgment remains irreplaceable. All other options describe legitimate AI acceleration capabilities listed in the DLA acceleration table.",
source: "Lesson 1: The Innovation OS"
},
{
question: "The innovation plugin includes stage-aware calibration. What happens when a user invokes /financials at the IDEA stage of their venture?",
options: ["The command refuses to execute and redirects to the /discovery command instead", "The command runs normally since financial modelling works at any venture stage", "The command generates a simplified financial template designed for early-stage ventures", "The command warns that numbers will be speculative without customer data present"],
correctOption: 3,
explanation: "Stage-aware calibration provides warnings, not restrictions. At IDEA stage, /financials warns that the user lacks customer data and the numbers will be highly speculative, then asks whether to proceed with scenario modelling or return after customer discovery. It does not refuse to execute or redirect. It does not run silently as if nothing is wrong. And it does not generate a simplified template ; it provides the same rigorous output with an explicit uncertainty flag.",
source: "Lesson 2: Plugin Architecture and Installation"
},
{
question: "A student installs the innovation plugin and sees the innov.local.md template with eight sections. When should they fully complete this configuration file according to the chapter's progression?",
options: ["At the Lesson 15 capstone after all prior exercises provide the required data", "Immediately after installation so that every command has full venture context", "After completing Lesson 5 when the first assumption stack has been fully built", "Only when they begin fundraising and need investor-ready configuration documents"],
correctOption: 0,
explanation: "The innov.local.md template is introduced in Lesson 2 but designed to be fully completed in the Lesson 15 capstone. Each section maps to a specific prior exercise: customer profiles from L03, assumptions from L05, financial model from L09, competitive landscape from L10, and fundraising from L12. Completing it immediately would mean filling it with placeholder text. Lesson 5 provides only the assumption stack. Fundraising is one section, not the whole file.",
source: "Lesson 2: Plugin Architecture and Installation"
},
{
question: "The innovation plugin maps 10 commands across the DLA stages. Which two commands belong to the Design Thinking stage of the stack?",
options: ["/hypothesis and /validate, both test assumptions against customer evidence", "/sprint and /gtm, both operate at the execution and delivery planning level", "/discovery and /idea: one synthesises customer research and one generates ideas", "/canvas and /financials, both model the business structure and unit economics"],
correctOption: 2,
explanation: "The 10-command map places /discovery (customer interview guides, JTBD synthesis, pain ranking, HMW statements) and /idea (idea generation, DVF scoring, pressure testing) in the Design Thinking stage. /hypothesis and /validate are Lean Startup commands. /sprint is the Agile command. /canvas, /financials, /market, /pitch, and /gtm are cross-cutting commands. The command map shows these stage assignments explicitly in the lesson's reference table.",
source: "Lesson 2: Plugin Architecture and Installation"
},
{
question: "A discovery interview reveals that 7 out of 10 CFOs mention a pain rated 'minor annoyance' while 4 out of 10 mention a pain rated 'nearly shut us down.' Which pain should rank higher in the frequency-times-severity matrix?",
options: ["The pain mentioned by 7 CFOs because higher frequency signals broader market demand", "Both pains rank equally because frequency and severity balance each other out exactly", "Neither can be ranked without also measuring the customer's willingness to pay first", "The pain mentioned by 4 CFOs because catastrophic severity outweighs higher frequency"],
correctOption: 3,
explanation: "Pain ranking uses frequency multiplied by severity, not frequency alone. If the 7/10 pain has a severity of 2/10, its score is 14. If the 4/10 pain has severity 9/10, its score is 36, more than double. A rare but catastrophic pain outranks a common annoyance. The pains do not cancel out because multiplication favours high severity. Willingness to pay is important but is a separate validation step in the assumption map, not part of the pain ranking matrix.",
source: "Lesson 3: Customer Discovery and Problem Statement"
},
{
question: "A team produces the insight statement: 'Customers want their AP process to be faster.' According to the four tests for a strong insight, what is wrong with this statement?",
options: ["It fails the non-obvious test because everyone already wants everything to be faster", "It fails all four tests, non-obvious, specific, actionable, and evidence-based simultaneously", "It fails the evidence-based test because no interview count has been referenced at all", "It fails the actionable test because faster does not imply what to build or avoid next"],
correctOption: 1,
explanation: "This statement fails every test. Non-obvious: wanting speed is universal and would be assumed without discovery. Specific: it says 'customers' without naming the segment or context. Actionable: 'faster' does not imply a direction for what to build. Evidence-based: no interview data is referenced. A strong insight like 'the core AP problem is reconciliation and audit trail, not payment execution' passes all four because it is surprising, names the context, implies what to build, and references discovery data.",
source: "Lesson 3: Customer Discovery and Problem Statement"
},
{
question: "During a How Might We exercise, a team generates five HMW statements that all describe product features rather than desired outcomes. What lens diversity principle are they violating?",
options: ["Each HMW must include a quantified metric that the team can directly measure after launch", "The five HMW statements must each map to one of the three different DLA Stack methodologies", "A strong HMW set should cover solution, outcome, emotional, constraint, and systemic lenses", "HMW statements must always reference specific customer segments identified by annual revenue band"],
correctOption: 2,
explanation: "The five-lens framework for HMW generation covers Solution, Outcome, Emotional, Constraint, and Systemic perspectives. If all statements describe features, the team is only using the Solution lens and missing the other four. HMW statements reference customers but not necessarily by revenue. Quantified metrics belong in success criteria, not HMW framing. And HMW statements are a Design Thinking tool; they do not map to different DLA methodologies.",
source: "Lesson 3: Customer Discovery and Problem Statement"
},
{
question: "An idea scores GREEN on Desirability and Feasibility but RED on Viability. According to the DVF framework, what should happen to this idea?",
options: ["It should be shortlisted because two GREEN scores clearly outweigh one RED score overall", "It is automatically disqualified because a RED in any single dimension eliminates the idea", "It should proceed to pressure testing since two out of three dimensions are demonstrably strong", "It should be placed in the backlog for reconsideration after market conditions eventually change"],
correctOption: 1,
explanation: "The DVF shortlist targets ideas with at least two GREEN scores and no RED scores. A RED in any single dimension, even with two GREENs, means the idea does not pass the filter. A RED on Viability means there is no clear path to a significant revenue business. The shortlist is not a vote where majority wins. Backlog placement is reasonable but the framework's rule is disqualification. Pressure testing is for ideas that pass DVF, not those that fail it.",
source: "Lesson 4: Hundred Ideas, One Hour"
},
{
question: "A founder selects an idea from the DVF shortlist and skips the pressure test entirely. According to the chapter, what critical input for Lesson 5's assumption mapping will they be missing?",
options: ["The pressure test objections which form the foundation for assumption map entries in Lesson 5", "The DVF scores themselves which directly populate the assumption risk tier classifications", "Market sizing data that would normally come from the pressure test analysis process", "Competitor analysis that the devil's advocate process would have surfaced during the testing"],
correctOption: 0,
explanation: "Each objection in the pressure test corresponds to one or more hidden assumptions in the idea. The pressure test converts the selected idea into the foundation for the assumption map in Lesson 5. Without it, the founder must identify assumptions from scratch rather than building on structured objections. DVF scores inform idea selection, not assumption tiers. Market sizing comes from Lesson 10, not the pressure test. Competitor analysis is a separate exercise, not a pressure test output.",
source: "Lesson 4: Hundred Ideas, One Hour"
},
{
question: "Before finalising any shortlisted idea, the 'Why Now?' test asks a critical timing question. Which of the following is a valid 'Why Now?' answer according to the lesson?",
options: ["The founder has personal passion for this problem and wants to work on it starting today", "A regulatory change created new compliance requirements that generate immediate market demand", "The idea has been discussed in online forums for several years and now has growing social proof", "A similar product exists in an adjacent market segment so the concept has already been validated"],
correctOption: 1,
explanation: "Valid 'Why Now?' answers reference specific changes in the last 2-3 years: new technology, regulatory change, behaviour change, cost inflection, demographic shift, or market gap. A regulatory change creating new demand is directly listed. Personal passion is about founder motivation, not market timing. Online discussion over years actually suggests the idea is old, not timely. Adjacent market validation shows the concept works but does not explain why NOW is the right moment.",
source: "Lesson 4: Hundred Ideas, One Hour"
},
{
question: "An assumption has evidence quality marked as ANECDOTAL. What specific threshold separates ANECDOTAL evidence from VALIDATED evidence in the framework?",
options: ["ANECDOTAL requires three customer mentions while VALIDATED requires at least ten customer mentions", "ANECDOTAL is from interviews while VALIDATED is from formal market research survey instruments", "ANECDOTAL is from existing customers while VALIDATED is from entirely new customer segments", "ANECDOTAL is based on stated intent while VALIDATED requires payment or sustained unprompted usage"],
correctOption: 3,
explanation: "VALIDATED requires systematic behavioural evidence, customers paid for it OR used it repeatedly without prompting. ANECDOTAL means some external evidence exists but it is not systematic: a few customer conversations, one industry report, or stated intent. The key distinction is behaviour versus statements. There is no specific mention threshold. Formal surveys still produce stated intent, not behavioural evidence. Customer segment (existing vs. new) is irrelevant to evidence quality classification.",
source: "Lesson 5: The Assumption Stack"
},
{
question: "The MVT hierarchy places 'Conversation' at Level 1 and 'Functional MVP' at Level 5. A team decides to build a Functional MVP to test whether CFOs will pay $500 per month. What principle does this violate?",
options: ["The assumption should be tested at the lowest cost level that can provide a valid answer", "Functional MVPs are reserved exclusively for testing complex technical assumptions only", "Payment assumptions can only ever be validated through signed letters of intent documents", "Building anything before all TIER 1 assumptions are first conversation-tested is prohibited"],
correctOption: 0,
explanation: "The MVT hierarchy rule states: go to Level 5 only if Levels 1-4 cannot test the assumption. The question 'would you sign an LOI for $500/month before we build?' is a Level 1 conversation that takes 30 minutes and costs nothing. Building a Functional MVP to test pricing wastes months of development time on something a conversation could answer. MVPs test multiple things, not just technical assumptions. LOIs are one form of evidence, not the only valid one. The principle is about cost efficiency, not about sequencing.",
source: "Lesson 5: The Assumption Stack"
},
{
question: "The assumption map for the AP automation venture targets 20 to 30 assumptions across five categories. If a team identifies only 8 assumptions across all categories, what does the lesson say about this?",
options: ["Eight assumptions is acceptable for pre-MVP ventures that lack sufficient customer data", "Fewer assumptions indicate a simpler business model that requires less overall validation effort", "The team is not thinking hard enough about the hidden bets embedded in their chosen idea", "The team should proceed with 8 and add more assumptions as they naturally emerge from pilot data"],
correctOption: 2,
explanation: "The lesson states directly: 'Target 20-30 assumptions. If you have fewer than 15, you are not thinking hard enough.' The goal is to surface the bets before they surface themselves as failures. Eight assumptions across five categories means critical risks are being missed entirely. Pre-MVP stage does not justify fewer assumptions, discovery conversations alone should surface 15+. Fewer assumptions does not indicate simplicity; it indicates incomplete analysis. While assumptions do emerge from pilots, starting with too few means building on unexamined bets.",
source: "Lesson 5: The Assumption Stack"
},
{
question: "A founder adds a beautiful analytics dashboard to their MVP because customers mentioned wanting better reporting. The dashboard tests no TIER 1 or TIER 2 assumption. What should happen according to MVP scoping principles?",
options: ["The dashboard should be included because customer requests validate its overall importance", "The dashboard should be built as a simplified version to satisfy the customer request quickly", "The dashboard should be excluded because it tests no critical assumption in the current MVP", "The dashboard should be deferred until after the fundraising round has been successfully completed"],
correctOption: 2,
explanation: "The feature inclusion test is clear: every MVP feature must test a TIER 1 or TIER 2 assumption. If the analytics dashboard tests no critical assumption, it is scope creep that delays learning, regardless of whether customers mentioned it. Customer requests do not override the inclusion criteria. A simplified version still wastes build time on something that tests nothing critical. The deferral reason should be 'tests no critical assumption,' not 'waiting for funding.'",
source: "Lesson 6: MVP: The Minimum That Validates"
},
{
question: "A team defines their MVP success criterion as 'users like it and give positive feedback.' Why does this fail the success criteria quality standard?",
options: ["It should reference the competitive landscape to be meaningful as a valid success metric", "It needs to include a timeframe because user sentiment changes over the product lifecycle", "It is too optimistic because early users rarely report liking a minimum viable product", "It is not specific or measurable, success criteria must be a number tied to an assumption"],
correctOption: 3,
explanation: "Success criteria must be specific (a number), measurable (observable from pilot data), and tied to an assumption. 'Users like it' fails all three: no number, no measurement method, and no assumption linkage. A proper criterion would be '3 customers pay $500/month, validates A-001.' The issue is not optimism but measurability. Competitive context is useful but not a requirement of success criteria. While timeframes help, the fundamental problem is the absence of specificity and assumption linkage.",
source: "Lesson 6: MVP: The Minimum That Validates"
},
{
question: "The MVP scoping process produces both an inclusion list and an exclusion list. What specific information must each excluded feature document according to the lesson?",
options: ["The estimated development cost and the sprint number when the feature would be built later", "Which assumption it tests and why that assumption does not need testing in the current MVP", "The customer who requested it and the interview in which the request was originally made", "The competitive impact of excluding it and which competitor offers it as a standard feature"],
correctOption: 1,
explanation: "For every excluded feature, the lesson requires documenting: (a) which assumption it tests, and (b) why that assumption does not need to be tested in the MVP. This makes the exclusion defensible when stakeholders push back and records the design decision for post-pilot review. Development cost and sprint scheduling are implementation details, not exclusion rationale. The customer source is useful but not the required documentation. Competitive comparisons inform strategy but are not part of the exclusion framework.",
source: "Lesson 6: MVP: The Minimum That Validates"
},
{
question: "A pilot customer tells the founding team 'I love this product and would definitely recommend it to other CFOs.' According to the evidence hierarchy, what level does this represent?",
options: ["Level 1: the customer expressed both deep satisfaction and strong referral willingness", "Level 3, verbal commitment to recommend is equivalent to a signed letter of intent", "Level 7, enthusiasm without any behavioural evidence is the weakest signal on the scale", "Level 5, stated intent to pay or recommend is useful but not validated actual behaviour"],
correctOption: 3,
explanation: "The evidence hierarchy ranks 'customer said they would pay a specific amount in an interview' at Level 5, stated intent. Enthusiasm and stated referral willingness fall into the same category. Level 1 requires payment AND renewal, actual behavioural evidence over time. A verbal recommendation is not equivalent to an LOI with specific terms (Level 3). Level 7 is 'multiple people described the same problem,' which is even weaker. The core principle: what customers say is not what customers do.",
source: "Lesson 7: Build-Measure-Learn"
},
{
question: "A Build-Measure-Learn analysis shows that one feature of the MVP gets disproportionate engagement while the rest of the product is largely ignored. Which pivot type does this scenario suggest?",
options: ["Zoom-in pivot: one feature of the product should become the entire product offering", "Customer segment pivot: the product works for a different customer than was originally expected", "Business architecture pivot: the pricing model needs to change from subscription to usage-based", "Technology pivot: the current technology cannot achieve the required accuracy or scale levels"],
correctOption: 0,
explanation: "A zoom-in pivot means one feature becomes the whole product. When customers disproportionately engage with one feature and ignore the rest, the signal is that the valuable product is smaller and more focused than what was built. A customer segment pivot changes the target customer, not the product scope. A business architecture pivot changes the revenue model structure. A technology pivot changes the underlying technical approach. The scenario describes product scope, not customer, technology, or revenue issues.",
source: "Lesson 7: Build-Measure-Learn"
},
{
question: "Before recommending a pivot, the pivot decision checklist requires four conditions to be met. A team has run only one test of their approach and it failed. What does the checklist say?",
options: ["Pivot immediately because one clear failure provides sufficient evidence to change direction", "Redefine the test criteria to be less strict and then re-evaluate the exact same result set", "Escalate the decision to an external advisor since the team cannot be objective after a failure", "Wait for at least two iterations of the same test because one failure is only a data point"],
correctOption: 3,
explanation: "The pivot decision checklist requires two iterations minimum before drawing a conclusion. One failure is a data point, not a pattern. A pattern requires multiple tests. The other three conditions are: behaviour over opinion, team readiness, and preserved learning. Pivoting on a single test risks overcorrecting based on noise. Escalating to an advisor is not one of the four conditions. Redefining criteria to make failure look like success is motivated reasoning, not data-driven decision-making.",
source: "Lesson 7: Build-Measure-Learn"
},
{
question: "A venture's Business Model Canvas shows Value Propositions as VALIDATED and Key Partnerships as HYPOTHETICAL. When stress-testing the canvas, which block should adversarial scenarios primarily target?",
options: ["Value Propositions because validated blocks need continuous ongoing defence against disruption", "Revenue Streams because financial blocks ultimately determine the overall viability of the business", "Key Partnerships because hypothetical blocks carry the most unvalidated existential risk", "Customer Segments because the customer is the foundational element of every other canvas block"],
correctOption: 2,
explanation: "The lesson states that the most useful stress-tests target HYPOTHETICAL and PARTIALLY VALIDATED blocks, not validated ones. If a scenario attacks something already validated, you have a mitigation plan. If it attacks an untested assumption, that is the risk that matters. Value Propositions are validated and therefore lower priority for stress-testing. Revenue Streams and Customer Segments should be tested if they are hypothetical, but the question specifies Key Partnerships as the hypothetical block.",
source: "Lesson 8: Business Model Canvas"
},
{
question: "A team completes a Business Model Canvas and discovers that 6 of 9 blocks have evidence marked as ASSUMED. What does the canvas health summary reveal about this venture?",
options: ["The venture has concentrated execution risk in multiple blocks requiring urgent systematic testing", "The venture is at normal early-stage risk because most startups begin with many assumed blocks", "The venture should pause all operations until at least 5 blocks are fully validated through pilots", "The venture needs to raise additional capital specifically to fund testing for all six assumed blocks"],
correctOption: 0,
explanation: "A canvas with 6 ASSUMED blocks means execution risk is concentrated across the majority of the business model. The health summary converts nine blocks into a prioritised risk register, hypothetical blocks are liabilities, validated blocks are assets. While early-stage ventures often have many assumed blocks, 6 of 9 signals urgent need for systematic testing. Pausing all operations is extreme, prioritise the most consequential assumed blocks. Capital needs depend on test design, not block count.",
source: "Lesson 8: Business Model Canvas"
},
{
question: "The Business Model Canvas lesson emphasises that the canvas is a living document. According to the lesson, what triggers a canvas version update?",
options: ["A significant learning event such as pilot results, customer conversations, or market changes", "A change in the competitive landscape identified through the /market command monthly scan", "A quarterly business review cycle that ensures the canvas stays current every three months", "A formal request from the Business Model Architect agent based on its automated monitoring"],
correctOption: 0,
explanation: "The lesson states the canvas should be versioned and updated after every significant learning event, pilot results, customer conversations, market changes. A canvas from Month 1 that has not been updated in Month 6 is a liability, not an asset. There is no fixed quarterly cycle, updates are event-driven. Competitive changes are one type of trigger but not the only one. The Business Model Architect agent proposes updates but the trigger is the learning event itself, not the agent's monitoring schedule.",
source: "Lesson 8: Business Model Canvas"
},
{
question: "A SaaS venture has an LTV:CAC ratio of 131:1 based on a 15 percent annual churn assumption that has never been measured. How should this ratio be presented to investors?",
options: ["As the headline metric on the pitch deck because triple-digit ratios always impress investors", "As a preliminary estimate that should be entirely replaced by the 40 percent churn worst case", "As evidence the business model is fully proven and the venture is ready for Series A funding", "As a strong signal with an explicit warning that the churn assumption is unvalidated at Month 12"],
correctOption: 3,
explanation: "The lesson is explicit: if churn is ASSUMED and not yet measured, every LTV calculation carries high uncertainty. The /financials skill flags this with a warning. A 131:1 ratio based on unmeasured churn is a hypothesis, not evidence. Presenting it as a headline without the churn caveat will lose credibility with experienced investors who will immediately probe churn. Replacing it entirely with 40% churn is pessimistic, present both scenarios. The ratio being high does not prove the model works until churn is measured at Month 12 or later.",
source: "Lesson 9: Unit Economics and Financial Modelling"
},
{
question: "A sensitivity analysis reveals that doubling churn from 15 percent to 30 percent reduces LTV from $36,000 to $18,000. What does the lesson identify as the single most dangerous assumption in any SaaS financial model?",
options: ["Customer acquisition cost because it determines the speed of customer base growth", "Churn rate because a small change produces an enormous multiplicative change in lifetime value", "Gross margin because it directly affects the contribution margin per individual customer", "Monthly burn rate because it determines how quickly the company runs out of operating cash"],
correctOption: 1,
explanation: "The lesson states explicitly: churn is the most dangerous assumption in any SaaS financial model because a small change in churn produces an enormous change in LTV. A 4x difference in churn (10% vs 40%) produces a 4x difference in LTV. CAC affects growth economics but does not have the same multiplicative effect on lifetime value. Gross margin and burn rate are important but they affect the model linearly, not exponentially like churn does.",
source: "Lesson 9: Unit Economics and Financial Modelling"
},
{
question: "An 18-month financial model shows the fundraising trigger at 6 months of remaining runway. If cash runs out at Month 12, when must the team actually start the fundraising process?",
options: ["Month 1, fundraising takes so long that starting immediately is the only safe option", "Month 9, starting 3 months before cash runs out provides adequate time for the process", "Month 12: the team should demonstrate full runway usage before approaching new investors", "Month 6 that is when the runway threshold of 6 months remaining is officially triggered"],
correctOption: 3,
explanation: "The fundraising trigger is set at 6 months of remaining runway. If cash runs out at Month 12, the trigger fires at Month 6 (12 minus 6). Starting at Month 1 is unnecessarily early and wastes fundraising effort before the team has sufficient traction. Month 9 provides only 3 months: the minimum for fundraising, which is cutting it dangerously close. Waiting until Month 12 means the company is already out of cash. The lesson emphasises that the trigger must be set proactively, not reactively.",
source: "Lesson 9: Unit Economics and Financial Modelling"
},
{
question: "A founder tells investors their TAM is $5 billion based on an analyst report and claims they need just 1 percent of the market. Why will experienced investors reject this approach?",
options: ["Top-down sizing with assumed share shows no customer knowledge, bottom-up is far more credible", "One percent market share is mathematically impossible for a startup company in its first year", "Analyst reports are fundamentally unreliable and should never be cited in investor presentations", "The $5 billion figure is simply too large for an early-stage company to present as credibly relevant"],
correctOption: 0,
explanation: "Bottom-up sizing, counting actual organisations, qualifying the reachable subset, and pricing the opportunity, shows deep customer and market knowledge. Top-down approaches with 'we just need 1% of the market' are explicitly listed as a banned phrase because the approach is not a strategy. It feels invented rather than researched. Large TAMs are not inherently wrong, but investors need a credible path. Analyst reports can be cited as one input, but the methodology must be bottom-up. One percent is not impossible: the problem is that it is arbitrary.",
source: "Lesson 10: Competitive Intelligence and Market Sizing"
},
{
question: "A venture's competitive analysis lists only competitor weaknesses and no genuine strengths for any competitor. What signal does this send to an experienced investor?",
options: ["The competitive landscape is genuinely weak and the venture faces no serious competitive threats", "The founder is following best practices by focusing exclusively on differentiation opportunities", "The founder has not understood their competitors well enough to accurately assess the real threat", "The analysis is appropriately framed for a pitch deck that should emphasise venture advantages"],
correctOption: 2,
explanation: "The lesson states: if you only describe competitors' weaknesses, investors will not believe you. Experienced investors know the competitors, describing only weaknesses signals shallow analysis, not strong positioning. A credible competitive profile includes a genuine strength per competitor and then explains specifically why the venture still wins. Claiming no serious competition is itself a red flag. Focusing only on differentiation opportunities without acknowledging competitor strengths appears dishonest to experienced evaluators.",
source: "Lesson 10: Competitive Intelligence and Market Sizing"
},
{
question: "The value capture guideline states that SaaS pricing should capture less than 10 percent of value delivered. A product saves $1,600 per month and charges $500 per month. What does this 31 percent capture ratio signal?",
options: ["The pricing is appropriate because B2B SaaS products should capture 25 to 35 percent of value", "The pricing is clearly too low because the product should capture at least half the value delivered", "The ratio is irrelevant because B2B SaaS pricing should be based solely on competitor benchmarks", "The pricing may be too high unless the full value calculation includes intangible benefits beyond labour"],
correctOption: 3,
explanation: "At 31%, the product is capturing too much of the direct labour savings alone. However, the lesson notes that AP automation provides additional intangible value (audit confidence, risk reduction) beyond labour savings. Including those intangible values in the calculation typically brings the ratio below 10%. The 25-35% range and 50% capture rate are not guidelines from the lesson. Competitor benchmarks inform pricing but the value capture ratio is a separate validation tool. The key insight is that the value calculation must be comprehensive.",
source: "Lesson 10: Competitive Intelligence and Market Sizing"
},
{
question: "A competitive landscape scan identifies six types of moat. A venture with 3 customers claims a data moat because each customer's invoice data improves the AI model. How should this claim be described?",
options: ["As a validated data moat because the mechanism of improvement is already clearly functioning", "As a network effect moat because more users make the overall product more valuable for everyone", "As a data moat being built, 3 customers is far too few for a credible defensive moat claim", "As a switching cost moat because customers cannot easily take their processed data elsewhere"],
correctOption: 2,
explanation: "The lesson is explicit: claim only moats you have evidence for today. Saying 'we have a data moat' with 3 customers is not honest. Saying 'we are building a data moat; we need approximately 1,000 invoice samples per customer category to reach 95%+ accuracy, and we will reach that at approximately 50 customers' is honest and specific. The mechanism exists but the moat is not yet defensible. Network effects require users benefiting from other users, which is not the case in B2B SaaS. Switching costs relate to lock-in from historical data, which is a separate moat type.",
source: "Lesson 10: Competitive Intelligence and Market Sizing"
},
{
question: "An ICP describes 'CFOs at mid-market companies who manage AP manually.' According to the GTM lesson, what critical element is missing from this definition?",
options: ["A technology stack requirement specifying which ERP the target company must be currently using", "A buying trigger that specifically identifies which prospects are ready to purchase right now", "A minimum company age requirement to filter out companies with insufficiently mature processes", "A geographic restriction limiting the target to a single country or clearly defined market region"],
correctOption: 1,
explanation: "An ICP without a buying trigger is a description, not a targeting strategy. The lesson emphasises that customers without triggers browse but do not buy. Two CFOs can match the same demographic profile exactly, but one who had a recent audit finding closes in three weeks while one without urgency never converts. Technology stack, geography, and company age are useful qualifiers but the buying trigger is the element that converts demographic description into targeting precision.",
source: "Lesson 11: Go-to-Market Strategy"
},
{
question: "A team plans to launch three customer acquisition channels simultaneously in their first month of go-to-market execution. Why is this approach problematic?",
options: ["Three channels exceed the budget that is typically available to pre-seed stage startup companies", "The team should fully validate product-market fit before investing in any active sales channels", "Starting with more than two channels means none receives enough attention to produce measurable results", "Multiple channels simultaneously create conflicting brand messages that confuse all potential customers"],
correctOption: 2,
explanation: "The rule is explicit: start with one channel, add the second only when the first is producing measurable results. Launching multiple channels simultaneously means none gets enough focus to optimise. The issue is attention and learning, not budget. Product-market fit validation happens concurrently with early sales. Brand consistency is a marketing concern, not the core argument: the lesson focuses on the practical reality that unfocused channel execution produces no results in any channel.",
source: "Lesson 11: Go-to-Market Strategy"
},
{
question: "The 90-day GTM calendar includes a Day 30 gate. If response rate on personalised LinkedIn outreach is 3 percent instead of the targeted 10 percent, what does the calendar recommend?",
options: ["Immediately activate Channel 2 to compensate for the clearly underperforming primary channel", "Revise the message angle and test new trigger framing before adding any additional second channel", "Abandon LinkedIn outreach entirely and switch to cold calling as the new primary sales approach", "Lower the response rate target to 5 percent to align stated expectations with actual performance"],
correctOption: 1,
explanation: "The Day 30 gate checks: is response rate at least 7% on personalised outreach? If no, the action is to revise the message angle and test new trigger framing, not add Channel 2 yet. Activating a second channel before the first works means spreading resources across two unproven approaches. Abandoning LinkedIn entirely is premature after one month. Lowering targets to match poor results is motivated reasoning that avoids diagnosing the real problem: ICP, message, or channel mismatch.",
source: "Lesson 11: Go-to-Market Strategy"
},
{
question: "The pricing strategy recommends paid trials over free trials for early-stage B2B SaaS ventures. What is the primary reason for this preference?",
options: ["Paid trials filter for customers who have a problem urgent enough to pay money to solve it", "Free trials violate SaaS accounting standards and create revenue recognition complications", "Paid trials generate revenue that meaningfully extends the startup's cash runway during pilot", "Paid trials reduce the customer support burden because paying customers need less onboarding"],
correctOption: 0,
explanation: "A paid trial (even at 50% of list price) filters for committed buyers who have a real and urgent problem. Free trials attract browsers, people who are interested but not committed. The lesson notes that customers who negotiate free trials before signing typically churn faster than customers who pay from day one. Revenue generation is a side benefit, not the primary reason. There is no accounting issue with free trials. Paying customers may actually require more support because they have higher expectations.",
source: "Lesson 11: Go-to-Market Strategy"
},
{
question: "A pitch deck's Slide 5 (Traction) presents 'strong customer interest' and 'positive feedback from industry experts.' According to the traction hierarchy, where does this evidence rank?",
options: ["At the top because expert validation provides strong third-party credibility to investors", "It cannot be ranked because the traction hierarchy applies only to quantitative data points", "Near the bottom because stated interest and expert opinion are not behavioural evidence at all", "In the middle because qualitative feedback complements quantitative metrics quite effectively"],
correctOption: 2,
explanation: "The traction hierarchy ranks evidence from most to least convincing: Revenue > Pilot results with metrics > LOIs with terms > Waitlist with conversion > Discovery interviews with insights. 'Strong customer interest' and 'positive feedback' are below even interview insights because they are vague and unquantified. Expert opinion is not in the hierarchy at all. The hierarchy applies to both qualitative and quantitative evidence, discovery interview quotes are qualitative but rank higher than vague interest claims because they are specific and sourced.",
source: "Lesson 12: Investor Pitch Deck"
},
{
question: "A founder's pitch deck includes the phrase 'conservative projections show 10x growth in 18 months.' According to pitch quality standards, what is the primary violation?",
options: ["Using 'conservative projections' is a banned phrase, investors know all projections are optimistic", "The 10x growth claim is mathematically impossible for a SaaS company in an 18-month timeframe", "The sentence lacks a specific source or methodology backing the projected growth trajectory shown", "Both the banned phrase and the unsourced claim are equally serious violations of the standards"],
correctOption: 0,
explanation: "The pitch quality standards explicitly ban 'conservative projections', investors know all projections are optimistic. The guidance is to say 'base case' or 'base assumption' and present three scenarios. While the 10x claim should also have a sourced methodology, the banned phrase is the primary and explicit violation called out in the lesson's quality standards. 10x growth is aggressive but not impossible. The sentence has multiple issues but the banned phrase is the direct, named violation from the lesson's banned list.",
source: "Lesson 12: Investor Pitch Deck"
},
{
question: "The 9-slide narrative places The Ask at Slide 8 and Vision at Slide 9. What is the specific reason for placing Vision last rather than ending with the Ask?",
options: ["Financial details are best absorbed near the end of a presentation after audience attention peaks", "The Ask follows the Team slide because investor trust in the team must precede any investment decision", "Vision closes the deck so investors leave with ambition rather than ending on a purely transactional note", "Placing the Ask last would create an awkward ending that makes the entire pitch feel like a sales call"],
correctOption: 2,
explanation: "The lesson states that Vision closes because it gives investors a reason to stay in the deal through the hard years. The Ask at Slide 8 needs conviction from the prior seven slides, investors must feel the journey from problem to financial conviction before evaluating terms. Then Vision at Slide 9 ends on ambition rather than transaction. The placement is about emotional engineering, not attention patterns. While the Team slide does precede the Ask, the reason for Vision closing is about the lasting impression, not just sequencing conventions.",
source: "Lesson 12: Investor Pitch Deck"
},
{
question: "An investor asks 'What if SAP launches a competing AP module at $200 per month?' and the founder responds 'We have no direct competition.' Why is this the worst possible response?",
options: ["The founder should have offered a lower price to match SAP's hypothetical competitive pricing", "Investors expect founders to acknowledge competitive threats and discuss the company's exit strategy", "The response is too brief and the founder should have provided a detailed competitive analysis deck", "The phrase signals no market exists while simultaneously demonstrating weak overall competitive analysis"],
correctOption: 3,
explanation: "The banned phrases list includes 'no direct competition' because it signals two things simultaneously: if there is no competition, there is likely no market, and the founder has not looked hard enough. The investor asked about a specific competitive threat (SAP) and received a denial rather than an honest assessment. The lesson emphasises that honest, direct answers build trust while spin destroys it. Price matching, exit strategy discussion, and lengthy competitive presentations are not the appropriate responses, honest acknowledgement of the threat followed by specific differentiation is.",
source: "Lesson 12: Investor Pitch Deck"
},
{
question: "An innovation sprint has a delivery goal but no learning goal whatsoever. According to the lesson, what type of sprint is this and what critical element is missing?",
options: ["It is a discovery sprint that should be converted to innovation format by adding user stories", "A product sprint missing the assumption testing that makes innovation sprints fundamentally distinct", "An incomplete innovation sprint that only needs a retrospective format added to be fully finished", "A standard Agile sprint missing velocity tracking metrics and burndown chart visualisations"],
correctOption: 1,
explanation: "A sprint with only a delivery goal is a product sprint regardless of whether the team is working on an innovation. The learning goal: the specific assumption being tested: is what distinguishes an innovation sprint from a product sprint. Without it, you are delivering features but not reducing uncertainty. Retrospectives exist in both sprint types. Discovery sprints are not a category discussed in the lesson. Standard Agile elements like velocity tracking are present in both sprint types.",
source: "Lesson 13: Innovation Sprints"
},
{
question: "A user story reads: 'As a user, I want better notifications so that I know things happened.' What specific quality problems does this story have according to the strong/weak comparison?",
options: ["The story is too short and needs additional context about the technical implementation approach", "The acceptance criteria are missing but the story structure is otherwise acceptable for a sprint", "The story uses passive voice which makes it difficult to assign clear ownership during sprint planning", "The role is generic, the action is imprecise, the outcome is unmeasurable, and there is no assumption linkage"],
correctOption: 3,
explanation: "The lesson provides an explicit weak/strong comparison. This story fails on every element: 'user' is not a specific role (should be 'CFO at Pilot 3'), 'better notifications' is not a precise action (should be 'receive invoice approval requests via WhatsApp'), 'know things happened' is unmeasurable (should be 'approve on the device I check most frequently'), and there is no assumption ID reference. Story length, acceptance criteria as a separate section, and voice are not the lesson's primary quality criteria.",
source: "Lesson 13: Innovation Sprints"
},
{
question: "The priority scoring formula for sprint backlog is Assumption Risk multiplied by Delivery Value. Items scoring 2 or below are deferred unless they meet which specific condition?",
options: ["They are requested by a paying pilot customer who will churn if the feature is not delivered", "They have been deferred for more than three consecutive sprints and must be addressed eventually", "They are estimated at under 2 hours and qualify as quick wins that fit into the sprint easily", "They test a TIER 1 assumption that was recently invalidated and requires immediate re-testing"],
correctOption: 2,
explanation: "The lesson states: items scoring 2 or below go to the backlog unless they are quick wins estimated under 2 hours. The priority formula exists to make prioritisation explicit, low-scoring items consume sprint capacity that should go to higher-scoring items. The exception for quick wins acknowledges that some low-impact items are so cheap to complete that deferring them costs more in tracking overhead than just doing them. Customer churn risk, consecutive deferrals, and recently invalidated assumptions are not the stated exception condition.",
source: "Lesson 13: Innovation Sprints"
},
{
question: "An innovation sprint's definition of done includes three dimensions. A team deploys code and passes QA but does not update innov.local.md with assumption status changes. Is the sprint done?",
options: ["Yes because deployed and working code satisfies the primary deliverable of any sprint period", "No because definition of done requires code deployed plus learning measured plus documentation updated", "Yes if the learning measurement showed no change to any assumption status requiring documentation", "No because the sprint retrospective has not yet been conducted to formally close the sprint period"],
correctOption: 1,
explanation: "The innovation sprint's definition of done has three explicit dimensions: Code (deployed and tested), Learning (measured for a specific period), and Documentation (innov.local.md updated with sprint learnings and assumption updates). Missing any dimension means the sprint is not done. Code deployment alone satisfies a product sprint but not an innovation sprint. Even if no assumption changed status, the documentation should record that finding. The retrospective is a separate component from the definition of done.",
source: "Lesson 13: Innovation Sprints"
},
{
question: "The innovation plugin includes 10 commands and 4 agents. What is the fundamental difference between how skills and agents operate?",
options: ["Skills handle Design Thinking stages while agents handle Lean Startup and Agile stages exclusively", "Skills produce single-task responses on demand while agents run on schedule and surface decisions proactively", "Skills require innov.local.md to function while agents can operate without any venture context loaded", "Skills produce text outputs while agents produce structured data files and dashboard visualisations"],
correctOption: 1,
explanation: "The lesson provides an explicit comparison table: skills are invoked on demand and produce single-task responses, while agents activate on schedule or trigger and provide continuous intelligence over time. Skills are tools; agents are team members with standing briefs. Both skills and agents can operate across all DLA stages. Both read innov.local.md, agents do so automatically with every invocation. Both produce text-based outputs in the Cowork context.",
source: "Lesson 14: Four Innovation Agents"
},
{
question: "The Idea Generator agent delivers a Monday Innovation Brief that includes an 'Uncomfortable Question' section. What is the specific purpose of this element?",
options: ["To surface the thing the team is avoiding so they can confront it before it becomes a crisis", "To provide a weekly knowledge quiz that tests the team's awareness of their own venture metrics", "To generate devil's advocate objections that mirror the Lesson 4 pressure test format exactly", "To remind the team weekly of their most critical untested assumption from the assumption stack"],
correctOption: 0,
explanation: "The Uncomfortable Question is a provocation the team should sit with ; it surfaces something the team is avoiding or has not asked themselves. In the AP example, it asks why Pilot 2 still only uses the system for 60% of invoices after 6 months and why the team has never asked directly. It is not a quiz or knowledge test. While related to pressure testing and assumption tracking, the Uncomfortable Question is specifically about surfacing avoidance behaviour, not generating objections or tracking assumptions.",
source: "Lesson 14: Four Innovation Agents"
},
{
question: "The Fundraising Readiness Agent uses a 16-item checklist to evaluate readiness. A team scores 10 out of 16. What is the agent's recommendation at this score?",
options: ["Begin active fundraising immediately because any score above 8 is considered sufficient to start", "Address the missing 6 items before any investor meeting since the minimum threshold is 12 out of 16", "Start fundraising while simultaneously completing remaining items to maintain deal momentum", "The score is acceptable for angel investors but insufficient for institutional venture capital firms"],
correctOption: 1,
explanation: "The Fundraising Readiness Agent recommends a minimum threshold of 12/16 before beginning active outreach. At 10/16, the team should address the gaps before investor meetings. The lesson shows the AP venture at 12/16 with the note that it can begin active outreach but should address the remaining items (team bios and Q&A prep) before the first meeting. There is no separate threshold for angels versus VCs in the checklist. Starting outreach while incomplete risks a poor first impression with investors you cannot re-pitch.",
source: "Lesson 14: Four Innovation Agents"
},
{
question: "The Customer Intelligence agent surfaces a pattern: 2 of 3 pilots mentioned approval fatigue for small invoices this week. What action does the agent recommend?",
options: ["Move assumption A-006 to VALIDATED status and begin building the auto-approve feature immediately", "Conduct 5 additional customer interviews to reach statistical significance before taking any action", "Move assumption A-006 to TESTING and design an auto-approve threshold feature in the next sprint", "Flag the signal as purely anecdotal and wait for a third customer mention before updating the map"],
correctOption: 2,
explanation: "The Customer Signal Digest shows that 2 of 3 customers mentioning approval fatigue supports VALIDATING assumption A-006. The recommended action is to move it to TESTING and design the auto-approve threshold feature in the next sprint. Moving directly to VALIDATED would skip the testing step, evidence from 2 conversations is ANECDOTAL, not yet VALIDATED through behavioural data. Waiting for 5 more interviews or a third mention wastes time when the signal is actionable. The agent recommends building a testable feature, not just updating a status.",
source: "Lesson 14: Four Innovation Agents"
},
{
question: "A student runs the 4-question validation test on their completed innov.local.md. The response to 'what assumption should I test this week' is the generic answer 'you should test whether customers will pay.' Which section needs more specificity?",
options: ["The venture section because the problem statement is too vague to identify specific assumptions", "The customer_profiles section because pain points are not quantified with interview frequency data", "The financial_model section because all values are marked ASSUMED with no measured inputs present", "The key_assumptions section because too few assumptions are listed or test methods are not written"],
correctOption: 3,
explanation: "The diagnostic table in the lesson maps generic outputs to their root cause sections. 'You should test whether customers will pay' maps to key_assumptions, too few assumptions listed or no test methods written. If the assumption stack had specific entries with IDs, risk levels, and test methods, the response would reference a specific assumption ID and its cheapest test. The venture section, customer profiles, and financial model can also produce generic outputs, but each maps to different generic response patterns listed in the diagnostic table.",
source: "Lesson 15: Capstone: Build Your Innovation OS"
},
{
question: "According to the common gaps analysis in the capstone, what is the most frequent problem with the key_assumptions section of student innov.local.md files?",
options: ["Students list too few assumptions with all marked HIGH risk and all left completely UNTESTED", "Students include too many assumptions making the configuration file unwieldy to maintain", "Students use incorrect assumption IDs that do not match their Lesson 5 exercise output identifiers", "Students confuse TIER 1 and TIER 3 classifications by inverting the risk scoring direction"],
correctOption: 0,
explanation: "The lesson identifies the weak pattern explicitly: 5 assumptions, all HIGH risk, all UNTESTED. The strong pattern is 15-20 assumptions across all three tiers with varied statuses including VALIDATED entries from prior exercises. Having too few assumptions means the student has not thought hard enough about the hidden bets in their venture. The issue is not too many assumptions, incorrect IDs, or inverted classifications; it is insufficient depth and lack of evidence progression from UNTESTED through to VALIDATED.",
source: "Lesson 15: Capstone: Build Your Innovation OS"
},
{
question: "The innov.local.md validation test uses four diagnostic questions. If the response to 'one thing in my business model I should worry about' is the generic 'your business model needs more revenue,' which section caused this?",
options: ["The venture section because the solution hypothesis is not specific enough to evaluate properly", "The key_assumptions section because too few assumptions exist for the model to surface specific risks", "The financial_model section because all values are marked ASSUMED with no measured inputs present", "The customer_profiles section because pain points lack quantified frequency and severity data"],
correctOption: 2,
explanation: "The diagnostic table in the capstone maps this specific generic response pattern to the financial_model section, all ASSUMED with no measured data. When every financial input is assumed, the system cannot identify which specific metric to worry about because none has been validated. If the financial model had a mix of measured and assumed values, the response would reference the specific assumed metric that carries the highest risk. The venture section, customer profiles, and assumptions produce different generic response patterns.",
source: "Lesson 15: Capstone: Build Your Innovation OS"
}
]}
questionsPerBatch={18}
/>
