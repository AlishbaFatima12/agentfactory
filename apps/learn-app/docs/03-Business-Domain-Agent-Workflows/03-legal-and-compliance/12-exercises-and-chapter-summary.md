---
sidebar_position: 12
title: "Exercises and Chapter Summary"
description: "Eight hands-on exercises building deployable legal operations artefacts, the four principles of legal AI deployment, and a quick reference for the Legal Plugin commands and resources"
keywords:
  [
    "legal AI exercises",
    "negotiation playbook exercise",
    "contract review sprint",
    "NDA triage exercise",
    "IP monitoring exercise",
    "legal ops agent exercise",
    "regulatory monitoring exercise",
    "DSAR exercise",
    "legal ops dashboard",
    "legal AI deployment principles",
    "legal plugin quick reference",
  ]
chapter: 22
lesson: 12
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Build and Validate a Negotiation Playbook Through Expert Interviews and Calibration"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can conduct the five-question expert interview, extract negotiation positions from historical contracts, draft a playbook using the template, test it against a known contract, and calibrate the GREEN/YELLOW/RED thresholds based on the gap between agent output and actual negotiation outcomes"

  - name: "Design and Deploy a Complete Legal Operations Agent System"
    proficiency_level: "C1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can configure the Contract Intake Agent SKILL.md with organisation-specific contract types, SLA thresholds, communication templates, and escalation triggers, connect it via MCP to document management and communication tools, test with historical contracts, calibrate routing accuracy, and build a tracking dashboard with defined KPIs"

  - name: "Articulate the Four Principles of Legal AI Deployment"
    proficiency_level: "C1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can state all four principles, explain the business rationale for each, and apply them as design constraints when evaluating any proposed legal AI workflow -- identifying which principle is being violated when a proposed deployment is architecturally unsound"

learning_objectives:
  - objective: "Complete hands-on exercises that produce deployable legal operations artefacts including a negotiation playbook, NDA triage system, IP monitoring workflow, regulatory monitoring configuration, DSAR response process, and legal ops dashboard"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces at least three of the eight exercise deliverables: a validated negotiation playbook, a tested NDA triage configuration, and a legal ops dashboard specification with KPIs and ROI analysis"

  - objective: "State and apply the four principles of legal AI deployment as design constraints for any legal operations workflow"
    proficiency_level: "C1"
    bloom_level: "Evaluate"
    assessment_method: "Student can recite the four principles and, given a hypothetical legal AI deployment scenario, identify which principles are being followed and which are being violated, with specific recommendations for correction"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Expert interview methodology for playbook construction"
    - "Calibration loop: testing agent output against known outcomes"
    - "Process-level agents vs. document-level tools as distinct automation strategies"
    - "The four principles of legal AI deployment as an architectural framework"
  assessment: "4 new concepts at B2-C1 level -- well within the cognitive limit. The exercises apply concepts taught throughout the chapter rather than introducing new theory. The four principles synthesise prior learning into a memorable framework."

differentiation:
  extension_for_advanced: "Complete all eight exercises end-to-end, producing a comprehensive Legal Operations Deployment Report that documents: the negotiation playbook, NDA triage configuration, IP monitoring workflow, regulatory monitoring setup, DSAR process, contract intake agent, and dashboard specification -- with measured time savings and ROI calculations based on your actual legal department data."
  remedial_for_struggling: "Focus on Exercise 1 (Build Your Negotiation Playbook) and Exercise 3 (NDA Triage System). These two exercises establish the foundational configuration that all other exercises build upon. If you can produce a validated playbook and a working NDA triage system, you have the core skills for Legal Plugin deployment."
---

# Exercises and Chapter Summary

The following exercises are designed to be completed in Cowork with the Legal Plugin installed. Each produces a deployable output -- not a demonstration but a real artefact you can use in your organisation immediately.

Install both plugin layers before starting (see Lesson 2 for full installation walkthrough):

**Cowork:** Sidebar → **Customize** → **Browse plugins** → install `knowledge-work-plugins/legal` (Layer 1), then **Personal** → **+** → **Add marketplace from GitHub** → `https://github.com/panaversity/agentfactory-business-plugins` → install **legal-ops** (Layer 2).

**Claude Code:**

```bash
claude plugin install legal@knowledge-work-plugins
/plugin marketplace add panaversity/agentfactory-business-plugins
/plugin install legal-ops@agentfactory-business
```

---

## Exercise 1: Build Your Negotiation Playbook

**Type:** SKILL.md Configuration
**Time:** 60-90 minutes
**Prerequisite:** Legal Plugin installed; access to your three most recently negotiated vendor agreements (executed copies with sensitive pricing redacted)
**What you need:** Cowork with Legal Plugin installed, the `legal.local.md.template` from the skills library, 30 minutes with your General Counsel or most senior commercial attorney, three executed vendor agreements (redact sensitive pricing before uploading)

**The negotiation playbook is the single most important configuration decision in your Legal Plugin deployment.** Without it, every review is generic. With it, every review reflects your organisation's actual risk tolerance and negotiation history.

**Step 1 -- Conduct the expert interview.** Before opening Cowork, conduct a 30-minute structured interview with your General Counsel or most senior commercial attorney. Use these questions exactly:

1. In a typical vendor agreement where we are the customer, what is our standard position on limitation of liability? What is the absolute minimum you would accept before walking away?
2. Which IP clauses are truly non-negotiable -- the ones where you would decline the deal rather than accept the counterparty's position?
3. In the last 12 months, which clause caused the most negotiation difficulty? What was the eventual outcome?
4. Which contract types do you personally review? Which do you delegate to junior attorneys? Which proceed without attorney review?
5. What is one thing that looks acceptable on paper but your instinct always flags as a problem in practice?

Record the answers verbatim. These are the raw material of your playbook.

**Step 2 -- Document extraction.** For each of your three most recently negotiated vendor agreements:

- What was the starting position on the three most-negotiated clauses?
- What was the final agreed position?
- Was the compromise one your organisation was comfortable with, or one you accepted under time pressure?

**Step 3 -- Draft your playbook.** Using the `legal.local.md` template in Part One, draft your playbook. Cover at minimum: limitation of liability, IP ownership, indemnification, data protection, termination, and governing law.

_For UAE-based organisations:_ Pay particular attention to the governing law section. Specify whether your standard is DIFC law, ADGM law, or mainland UAE law, and document when each is appropriate. Include the Arabic-language prevailing-version risk for mainland contracts. Reference UAE Civil Code Art. 390 (court power to reduce liquidated damages) in your limitation of liability notes.

**Step 4 -- Test and calibrate.** Open Cowork with the Legal Plugin and run:

```
/review-contract
[Upload: one of the three executed contracts from Step 2 —
 use an executed contract so there is no risk of accidental action]

Context: provide your position, urgency level, and any known
issues from the actual negotiation
```

Compare the agent's output against your knowledge of the actual negotiation:

- Did the agent flag the clauses that actually required negotiation?
- Were any significant issues missed?
- Were the GREEN/YELLOW/RED classifications consistent with your actual risk tolerance?

**Step 5 -- Refine and re-test.** Update your playbook based on the gaps. Re-run the review. Document what changed and why.

**Deliverable:** A validated `legal.local.md` negotiation playbook, ready to deploy as your organisation's Legal Plugin configuration.

**The key learning:** The playbook encodes professional judgment about risk tolerance -- calibrating it against real negotiation outcomes teaches you the difference between theoretical positions and practical ones.

---

## Exercise 2: Contract Review Sprint -- Three Contracts in One Hour

**Type:** Applied Practice
**Time:** 60 minutes (20 minutes per contract)
**Plugin commands:** `/review-contract`
**What you need:** Cowork with Legal Plugin and playbook configured (Exercise 1), three contracts to review (real or generated per instructions below), a timer

You are the Legal Operations Manager at a 150-person technology company. Three contracts arrived this morning, all requesting review by end of business.

---

**Contract A -- SaaS Vendor Agreement (you are the customer)**

If you do not have a real SaaS agreement, generate a training document:

```
/brief topic:"generate a realistic vendor-favourable SaaS MSA
        for training purposes"
      clauses:"limitation of liability (3 months' fees cap),
               IP ownership (vendor retains all IP in platform
               and customisations), data processing, termination
               for convenience (60 days notice for vendor;
               immediate for cause only for customer),
               governing law: vendor's state"
      note: "label this as a training document"
```

Then run `/review-contract` against it.

Context to provide: We are the customer. Cloud-based project management software. Annual value: GBP 48,000. Vendor evaluation in progress for 3 months. Business unit wants to sign by Friday.

Answer:

1. What is the overall risk rating?
2. How many RED items are identified? Are they genuine deal issues?
3. What is the single most important redline given the Friday deadline?
4. Recommend: approve / negotiate / escalate / decline -- and draft the one-paragraph rationale you would send to the business unit.

---

**Contract B -- Consulting Services Agreement (you are the customer)**

Context to provide: Engaging an external consultant for a 6-month product strategy project. Fixed fee: GBP 95,000. The consultant will have access to your product roadmap and customer data during the engagement.

Answer:

1. What IP ownership issues does the agent flag? Are they material given the nature of the work product?
2. The agent flags a RED on the data protection clause. What specifically is the issue and what is the recommended redline?
3. The limitation of liability cap is set at GBP 10,000 -- approximately 10% of the total fee. How does the agent classify this and what does it recommend?
4. Draft a negotiation strategy email to the consultant's representative, using the agent's redline suggestions for the top 3 YELLOW/RED items.

---

**Contract C -- Co-Marketing Partnership Agreement**

Context: Co-marketing and referral agreement with a complementary software company. We refer customers to them; they refer customers to us. No cash -- value exchange only. Term: 2 years.

Answer:

1. Partnerships create mutual obligations and shared risk. Which clauses does the agent flag as most important for this structure?
2. The contract contains a residuals clause: "Nothing herein shall restrict either party's use of information retained in the unaided memories of its personnel." Is this a RED item? Why? What position would you propose?
3. There is no limitation of liability clause at all. The agent flags this as a RED. Using the agent's guidance, draft the clause you would propose inserting.
4. Write a one-paragraph executive summary of the contract risk profile for your CFO -- using the agent's output as the raw material but written in plain English.

**Sprint debrief:** Which of the three reviews was most valuable? Which produced the most useful redlines? Which would have benefited most from additional playbook configuration?

**The key learning:** Speed does not mean superficiality -- the three-tier classification system forces consistent risk assessment even under time pressure, teaching you to prioritise the material issues over the comprehensive ones.

---

## Exercise 3: NDA Triage System -- Build, Test, Deploy

**Type:** Workflow Configuration
**Time:** 45 minutes
**Plugin commands:** `/triage-nda`
**What you need:** Cowork with Legal Plugin and playbook configured, your organisation's standard NDA template (or a sample mutual NDA), four test NDAs (instructions for creating them below)

Your organisation receives approximately 25 NDA requests per month. Currently all go to the same junior attorney, taking 30-45 minutes each -- approximately 12+ hours of attorney time per month. Your task: design and test a triage system that reduces attorney NDA time to 3-4 hours per month.

**Step 1 -- Configure your NDA triage playbook.** Add the NDA-specific section to `legal.local.md` using the template in Part Two. Define your Tier 1/2/3 criteria.

**Step 2 -- Build a four-NDA test set:**

- NDA A: Your own standard form, unmodified
- NDA B: Your standard form with the counterparty's jurisdiction as governing law
- NDA C: Your standard form + residuals clause + 5-year term (vs. your standard 3)
- NDA D: Unilateral NDA (disclosing only, counterparty is discloser) when you expected mutual; broad confidential information definition; no publicly-available-information carve-out; perpetual survival

For each: run `/triage-nda`, provide context, record the classification.

**Expected results:**

- NDA A: Tier 1 (Standard Approval)
- NDA B: Tier 2 (Counsel Review)
- NDA C: Tier 2 or Tier 3 depending on residuals clause configuration
- NDA D: Tier 3 (Full Review -- multiple RED items)

**Step 3 -- If results diverge from expected:** Update the playbook and re-run. Document why the initial configuration missed the expected result -- was it threshold misconfiguration, wrong logic, or document misclassification?

**Step 4 -- Draft three routing email templates:**

- Tier 1 to business unit: approved, here is the execution process
- Tier 2 to reviewing attorney: here is the NDA, here are the flagged deviations, here is the deadline
- Tier 3 to General Counsel: here are the RED items, here is the urgency, here is my recommendation

**Deliverable:** Tested NDA triage configuration + three routing templates + calculation showing reduction from 12+ attorney hours/month to approximately 3-4 hours.

**The key learning:** Triage is about matching attention to risk -- configuring the thresholds teaches you which deviations actually matter versus which ones merely look different from your standard.

---

## Exercise 4: IP Monitoring -- Competitor Patent Watch

**Type:** Applied Research
**Time:** 45 minutes
**Plugin commands:** `/brief` with web search MCP enabled
**What you need:** Cowork with Legal Plugin and web search MCP enabled, the names of 2 key competitors in your technology space, a description of your core technology in 2-3 sentences

You are in-house counsel for a company that has developed a proprietary AI-based document analysis system. Your legal team has asked you to establish a patent monitoring programme for two key competitors and to assess freedom-to-operate risk before launching your next product feature.

_For Pakistan-based AI companies:_ This exercise is particularly relevant given Pakistan's developing patent enforcement landscape. While patent protection is available under the Patents Ordinance 2000, enforcement mechanisms are still maturing. Consider filing in the US and EU for stronger enforcement while also filing at IPO Pakistan for domestic protection. The GCC Patent Office provides regional coverage across Gulf states -- essential if you are targeting the Gulf market.

**Step 1 -- Landscape analysis:**

```
/brief topic:"patent landscape analysis"
      technology:"AI document analysis, natural language processing,
                  contract review automation, clause extraction"
      key-competitors:"[Competitor 1], [Competitor 2]"
      scope:"patents filed or granted 2021-2026"
      jurisdictions:"US (USPTO), EU (EPO), UK (UKIPO)"
      output:"landscape summary with freedom-to-operate flags"
```

Analyse the output: Who are the most active filers? Are there patents with broad claim language that may cover your planned feature? What white spaces exist?

**Step 2 -- Set up weekly competitor monitoring:**

```
/brief topic:"patent monitoring brief"
      monitor-assignees:"[Competitor 1], [Competitor 2]"
      technology-keywords:"[list 5-8 relevant technical terms]"
      jurisdictions:"US, EU, UK"
      output:"weekly summary for IP attorney — new filings,
              claim summaries, relevance assessment"
```

Draft the monitoring brief template that would be sent weekly to your IP attorney.

**Step 3 -- FTO preliminary assessment brief:**

```
/brief topic:"freedom-to-operate preliminary research"
      our-technology:"[describe your planned feature in 2-3
                       technical sentences]"
      potentially-relevant:"[list patents from Step 1]"
      jurisdiction:"US"
      note:"This is preliminary research for attorney review,
            not a freedom-to-operate opinion."
```

Write the cover memo to your IP attorney that accurately characterises what the agent has produced and what you need them to confirm, refute, or act on.

**Governance reminder:** The output of Step 3 is research scaffolding for your IP attorney -- not an FTO opinion. The cover memo must make this crystal clear. An FTO opinion is a privileged legal opinion signed by a qualified IP attorney.

**Deliverable:** IP monitoring workflow + weekly competitor brief template + FTO research memo correctly scoped for attorney review.

**The key learning:** IP research is about reducing attorney cost, not replacing attorney judgment -- the cover memo teaches you to clearly delineate what the agent has done (research) from what the attorney must do (opinion).

---

## Exercise 5: Build the Legal Ops Agent -- Contract Intake

**Type:** Agent Configuration and Testing
**Time:** 90 minutes
**Plugin commands:** All five Legal Plugin commands
**What you need:** Cowork with Legal Plugin and playbook configured, access to your document management system (Google Drive, SharePoint, or equivalent), access to your communication tools (Gmail, Outlook, Slack), five historical contracts for testing (instructions below)

You are building a complete Contract Intake Agent that manages all incoming contracts from receipt through routing, tracking, and obligation monitoring.

**Step 1 -- Map your current process.** Before configuring anything, document precisely:

- How do contracts currently arrive?
- Who handles first review? How long does it take?
- Where are executed contracts stored? Are they searchable?
- How are renewal dates tracked?
- What falls through the cracks most often?

This is the process you are replacing. Document it so you can measure the improvement.

**Step 2 -- Configure the SKILL.md.** Using the Contract Intake Agent SKILL.md in Part Five, customise for your organisation:

- Add your specific contract types
- Define your SLA thresholds with named owners (not generic roles -- actual names)
- Write your three communication templates
- Add your escalation triggers

**Step 3 -- Connect via MCP.** Work with IT to connect:

- Google Drive or SharePoint (contract storage)
- Gmail or Outlook (legal intake email)
- Google Sheets or Notion (contract tracking log)

**Step 4 -- Test with five historical contracts:**

- One NDA (standard / should be Tier 1)
- One NDA (non-standard / should be Tier 2 or 3)
- One vendor agreement (straightforward)
- One vendor agreement (complex IP, data processing, unusual terms)
- One employment or contractor agreement

For each: record intake classification, routing decision, communication output, and whether the result was correct.

**Step 5 -- Calibrate.** For any incorrect routing, identify whether the error was in playbook threshold, SKILL.md routing logic, or document type classification. Fix and re-test.

**Step 6 -- Build the tracking dashboard.** Using the Google Sheets MCP, create a contract tracking dashboard showing:

- All active contracts by status
- Obligations due in 30/60/90 days
- Average cycle time by tier (baseline from Step 1 vs. agent-assisted)

**Deliverable:** A functioning Contract Intake Agent connected to your document management system, with tested SKILL.md, live tracking dashboard, and documented time savings.

**The key learning:** Process automation reveals process gaps -- building the intake agent forces you to define routing rules, SLA thresholds, and escalation triggers that your organisation may never have formalised before.

---

## Exercise 6: Regulatory Monitoring -- The Weekly Brief

**Type:** Workflow Configuration
**Time:** 45 minutes
**Plugin commands:** `/brief`
**What you need:** Cowork with Legal Plugin and web search MCP enabled, a list of your organisation's regulatory areas (data protection, employment, sector-specific), your primary jurisdictions

You are Compliance Officer at a 150-person technology company with UK and EU operations. Your board has asked for a monthly regulatory briefing covering: data protection, AI regulation, employment law, and company law. This currently takes you 4-6 hours per month.

**Step 1 -- Configure monitoring parameters:**

```
/brief type:"regulatory-monitoring-setup"
      organisation:"technology company, 150 employees,
                    UK and EU operations, SaaS product"
      primary-areas:
        - "Data Protection: UK GDPR, EU GDPR, ICO guidance"
        - "AI Regulation: EU AI Act implementation, UK AI framework"
        - "Employment: UK employment law, EU Working Time,
           remote working developments"
        - "Company Law: Companies House requirements, director duties"
      jurisdictions:"UK, EU (Germany, France, Netherlands primary)"
      output:"weekly monitoring brief + monthly board summary"
```

**Step 2 -- Run a live test brief.** Use the current week. Evaluate:

- Did it identify genuine regulatory developments?
- Are the impact assessments (Immediate / 6 months / Monitor) correctly calibrated?
- Is anything missing that you know should be covered?

Update your configuration based on gaps. Re-run.

**Step 3 -- Build the monthly board summary template.** The board summary is different from the weekly brief. It needs:

- 3-5 bullet executive summary (most important changes this month)
- RAG traffic-light status for each regulatory area
- Actions required (owner, action, deadline)
- Horizon items (significant changes in the next 3-6 months)

Draft this template in your SKILL.md. Test it by asking the agent to produce a sample monthly summary from four weeks of monitoring briefs.

**Deliverable:** Working regulatory monitoring configuration producing weekly briefs and a monthly board summary -- reducing your preparation time from 4-6 hours to 45-60 minutes of review and sign-off.

**The key learning:** Regulatory monitoring is about impact assessment, not information collection -- the agent collects; your judgment determines which changes actually affect your organisation and what to do about them.

---

## Exercise 7: DSAR Response -- The 30-Day Clock

**Type:** Process Simulation
**Time:** 45 minutes
**Plugin commands:** `/respond`, `/brief`
**What you need:** Cowork with Legal Plugin installed, a list of your organisation's data processing systems (CRM, billing, email, marketing, HR, support), familiarity with UK GDPR or EU GDPR requirements

At 09:17 this morning, the following email arrived at `privacy@yourcompany.com`:

> _"Dear Sir/Madam, I am writing to request all personal data that your company holds about me under Article 15 of the GDPR. My name is Sarah Johnson. I was a customer from March 2021 to June 2023. My email address at that time was sarah.johnson.42@gmail.com. Please confirm receipt and advise when I can expect a response. Regards, Sarah Johnson."_

You are the Privacy Officer. The 30-day GDPR clock started at 09:17. Work through the complete response workflow.

**Day 1 -- Acknowledge immediately:**

```
/respond type:"DSAR-acknowledgement"
         requester-name:"Sarah Johnson"
         requester-email:"sarah.johnson.42@gmail.com"
         request-date:"[today]"
         request-type:"Subject Access Request (Article 15 UK GDPR)"
         jurisdiction:"UK GDPR"
```

Review the draft: does it confirm receipt, state the response deadline, set out identity verification requirements, and avoid confirming or denying what data is held? Edit as necessary. This letter goes out today.

**Days 1-10 -- Data discovery:**

```
/respond type:"DSAR-data-discovery"
         requester:"Sarah Johnson, sarah.johnson.42@gmail.com"
         customer-period:"March 2021 to June 2023"
         systems:"CRM, billing, email, customer support,
                  marketing database, HR system"
```

The agent drafts the internal discovery requests to each system owner with a Day 10 response deadline.

**Day 12 -- Data received (simulate):**

The following has been identified:

- CRM: Full customer record, purchase history, support tickets, sales rep notes (including: "difficult customer -- always pushes for discounts")
- Billing: Invoice history, last 4 digits of payment card, billing address
- Email: 47 support emails
- Marketing: Campaign history, open/click tracking, preference settings
- HR system: No data found
- Legal case management: No data found

```
/respond type:"DSAR-response-preparation"
         data-found:[provide summary above]
         redaction-required:"third-party personal data in support
           tickets; internal staff personal data; commercially
           sensitive information unrelated to requester"
         jurisdiction:"UK GDPR"
```

The agent produces a redaction checklist and response letter structure.

**Day 15 -- Response draft:**

Have the agent draft the final response letter: categories of data held, how it is processed, legal basis for processing, retention periods, and information about Sarah's rights (including the right to complain to the ICO).

Route for attorney review before sending.

**Reflection questions:**

1. The sales rep's CRM note calls Sarah a "difficult customer." Is this personal data she is entitled to see under Article 15? What does the agent say? Is the agent correct? (Answer: yes, this is personal data -- it relates to an identified individual and constitutes an opinion about her behaviour.)

2. If Sarah had also requested erasure under Article 17, how would the workflow change? Which step requires immediate escalation to Privacy Counsel, and why? (Consider: the legal basis for original processing; whether retention is required for legal obligations; whether you can technically delete from all systems.)

3. Your response is ready on Day 28. That is within the 30-day window. But your IT team then discovers a legacy database containing Sarah's data that was not included in the discovery. What do you do? Draft the follow-up communication to Sarah.

**Deliverable:** Completed DSAR simulation demonstrating the full 30-day workflow, with a validated DSAR Agent SKILL.md and a documented process map replacing your current manual approach.

**The key learning:** DSAR management is a coordination challenge, not a legal complexity challenge -- the agent's value is in the systematic discovery and deadline tracking that prevents the most common failure mode: missing the 30-day window because someone forgot to check a system.

---

## Exercise 8: The Legal Ops Dashboard

**Type:** Integration and Measurement
**Time:** 60 minutes
**Plugin commands:** `/vendor-check`, `/brief`
**What you need:** Cowork with Legal Plugin installed, completed outputs from Exercises 1-7 (or simulated equivalents), access to Google Sheets or equivalent for dashboard creation

You have now built a negotiation playbook, contract review workflow, NDA triage system, IP monitoring brief, regulatory monitoring workflow, and DSAR agent. This exercise ties them together into the Legal Operations Dashboard your General Counsel needs to run the function strategically.

**Step 1 -- Define the KPIs:**

| Metric                                  | Data Source           | Target                                           |
| --------------------------------------- | --------------------- | ------------------------------------------------ |
| Contract review cycle time (by tier)    | Contract tracking log | Tier 1: ≤1 day; Tier 2: ≤2 days; Tier 3: ≤5 days |
| NDA Tier 1 auto-approval rate           | NDA triage log        | >60%                                             |
| Open RED items pending attorney review  | Contract queue        | Zero items >5 days old                           |
| Contracts with renewal dates in 60 days | Contract repository   | 100% visibility                                  |
| Overdue compliance obligations          | Compliance calendar   | Zero overdue                                     |
| Open DSARs vs. 30-day window            | DSAR log              | Zero overdue                                     |
| Regulatory alerts actioned              | Monitoring log        | 100% within 30 days                              |
| External legal spend vs. budget         | AP system             | Within 10% of budget                             |

**Step 2 -- Build the dashboard:**

```
/brief topic:"legal-ops-dashboard"
      data-sources:
        - "contract tracking log [link]"
        - "NDA triage log [link]"
        - "compliance calendar [link]"
        - "DSAR log [link]"
      output:"weekly dashboard for General Counsel"
      include:"RAG status per category; trend vs. prior week;
               items requiring GC personal attention; no-action
               items for information only"
```

**Step 3 -- Write the weekly GC briefing.** Using the dashboard, draft a 1-page briefing for your General Counsel. It should:

- Take 5 minutes to read
- Give an immediate picture of the legal pipeline state
- Clearly identify items requiring GC personal attention
- Identify emerging risks before they become urgent

**Step 4 -- Measure the transformation.** Return to the process map from Exercise 5 Step 1. Document:

| Function                               | Hours/month before | Hours/month after | Saving |
| -------------------------------------- | ------------------ | ----------------- | ------ |
| Contract review                        |                    |                   |        |
| NDA triage (attorney time)             |                    |                   |        |
| Regulatory monitoring                  |                    |                   |        |
| DSAR processing (per request x volume) |                    |                   |        |
| Compliance calendar management         |                    |                   |        |
| **Total**                              |                    |                   |        |

**Deliverable:** A Legal Ops Dashboard specification, a sample weekly GC briefing, and a documented ROI analysis showing the capacity transformation in your legal department.

**The key learning:** The dashboard is not a reporting tool -- it is a management instrument that transforms legal from a reactive function (responding to requests) into a proactive one (identifying risks and opportunities before they become urgent).

---

## Chapter Summary: Four Principles of Legal AI Deployment

**Principle 1: The agent reviews. The attorney decides.**
This is not a constraint to work around -- it is the architecture that makes legal AI safe, professionally responsible, and genuinely useful. The agent's value is in the 80% of legal work that is pattern recognition, research, document analysis, and first-draft preparation. The attorney's value is in the 20% requiring judgment, strategy, relationship management, and professional accountability. Keeping these distinct maximises the contribution of both.

**Principle 2: The playbook is the product.**
The Legal Plugin out of the box is a capable tool. The Legal Plugin configured with a mature, validated, institution-specific negotiation playbook is a competitive advantage. Every hour spent refining the playbook -- adding real negotiation outcomes, sharpening thresholds, encoding your organisation's actual risk tolerance -- makes every subsequent review more accurate and more valuable. The playbook is living documentation of your organisation's legal intelligence.

**Principle 3: Legal Ops Agents manage processes, not documents.**
The most transformative applications in this chapter are the process-level agents -- Contract Intake, Regulatory Monitoring, Compliance Calendar, DSAR Management. The document tools reduce time per task. The process agents eliminate the coordination overhead -- the chasing, tracking, escalating, and reporting -- that consumes legal operations capacity. Both matter. The process agents create the larger structural change.

**Principle 4: Differentiation lives in the institutional knowledge layer.**
As Anthropic has moved into legal tech and generic legal AI workflows have been commoditised, the durable advantage belongs to organisations and firms that have systematically encoded their domain expertise into their tooling. The organisation with a mature playbook reflecting real negotiation history, a searchable contract repository, and a SKILL.md library encoding jurisdiction-specific expertise is operating a fundamentally different legal function than one using out-of-the-box tools. Building that institutional layer is the work of this chapter -- and it does not become obsolete when the next model version ships.

**Getting started:** Install both plugin layers (see Lesson 2), work through Exercise 1 to build your playbook, and run your first `/review-contract` against an executed contract you already know well. The gap between the agent's output and your institutional knowledge is the roadmap for everything that follows.

---

## Quick Reference

### Legal Plugin Commands

| Command            | Primary Use                          | Output                                |
| ------------------ | ------------------------------------ | ------------------------------------- |
| `/review-contract` | Full contract review vs. playbook    | GREEN/YELLOW/RED analysis + redlines  |
| `/triage-nda`      | NDA pre-screening                    | Tier 1/2/3 routing recommendation     |
| `/vendor-check`    | Obligation and status check          | Obligation summary + renewal calendar |
| `/brief`           | Research, regulatory monitoring, IP  | Structured briefing or analysis       |
| `/respond`         | DSAR, legal holds, routine responses | Draft for attorney review             |

### Plugin Installation

```bash
# Layer 1 (Base): Anthropic's Legal Plugin
claude plugin install legal@knowledge-work-plugins

# Layer 2 (Extension): Agent Factory jurisdiction overlays
/plugin marketplace add panaversity/agentfactory-business-plugins
/plugin install legal-ops@agentfactory-business
```

### Key Resources

| Resource                    | URL                                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Layer 1 (Anthropic base)    | [knowledge-work-plugins/legal](https://github.com/anthropics/knowledge-work-plugins/tree/main/legal)                        |
| Layer 2 (Agent Factory ext) | [agentfactory-business-plugins/legal-ops](https://github.com/panaversity/agentfactory-business-plugins/tree/main/legal-ops) |
| Anthropic enters legal tech | [artificiallawyer.com](https://www.artificiallawyer.com/2026/02/02/anthropic-moves-into-legal-tech/)                        |
| Market impact analysis      | [abovethelaw.com](https://abovethelaw.com/2026/02/anthropic-enters-legal-tech-legal-tech-enters-freefall/)                  |
| Plugin deep-dive            | [MAA1 on Medium](https://maa1.medium.com/claudes-legal-productivity-plugin-what-it-means-for-legal-tech-a8e0d8e47b4e)       |

---

## Try With AI

Use these prompts in Claude or your preferred AI assistant to reflect on the chapter as a whole.

### Prompt 1: Apply the Four Principles as a Design Review

```
I have completed Chapter 22 on Legal AI deployment. Here is a
proposed legal AI workflow for a company:

"We want to build an AI system that automatically reviews incoming
contracts, approves standard ones without attorney review, sends
non-standard ones to a junior paralegal, and generates a weekly
report for the GC. The system will use a generic contract review
template rather than building a custom playbook, since that takes
too much time."

Evaluate this proposal against the Four Principles of Legal AI
Deployment:
1. The agent reviews, the attorney decides
2. The playbook is the product
3. Legal Ops Agents manage processes, not documents
4. Differentiation lives in the institutional knowledge layer

For each principle, identify whether the proposal follows or
violates it, and explain the specific risk created by each violation.
Then recommend the minimum changes needed to make this deployment
architecturally sound.
```

**What you are learning:** The four principles are not aspirational -- they are design constraints. Evaluating a real proposal against them builds the architectural judgment to distinguish sound legal AI deployments from ones that create professional liability, miss the value proposition, or fail to differentiate.

### Prompt 2: Design Your 90-Day Legal Ops Transformation Plan

```
Based on everything in Chapter 22, help me design a 90-day Legal
Ops transformation plan for my organisation:

[Describe: organisation size, legal team size, primary jurisdictions,
current pain points, available budget for tooling]

Structure the plan as:
- Days 1-30: Foundation (playbook, plugin configuration, first
  workflow)
- Days 31-60: Expansion (additional workflows, agent configuration,
  MCP integrations)
- Days 61-90: Measurement (dashboard, ROI analysis, board
  presentation)

For each phase, specify:
1. Which exercises from Chapter 22 to complete
2. What deliverables to produce
3. What success metrics to track
4. What risks to watch for

Include a realistic time commitment estimate per week for the
Legal Ops lead and for the legal team.
```

**What you are learning:** Transformation planning requires sequencing the exercises into a coherent deployment programme. The 90-day structure forces you to prioritise -- you cannot do everything at once, so you must decide which capability delivers the most value first and build from there.

### Prompt 3: The Institutional Knowledge Audit

```
Chapter 22 argues that "differentiation lives in the institutional
knowledge layer." Help me audit my organisation's legal institutional
knowledge:

1. Where does our negotiation history live? (Email inboxes? A shared
   drive? Someone's memory?)
2. How many people would need to leave before we lost critical
   negotiation positions?
3. Can a new attorney joining our team find our standard positions
   on the top 10 clause types within their first day?
4. When was the last time we systematically reviewed whether our
   standard positions still reflect market practice?
5. If we had to produce a complete negotiation playbook today, how
   long would it take and who would need to be involved?

Based on my answers, assess how vulnerable our legal operations
are to knowledge loss and recommend the three highest-priority
knowledge capture actions we should take before configuring the
Legal Plugin.
```

**What you are learning:** The playbook exercise (Exercise 1) assumes you can extract institutional knowledge. This audit reveals whether that knowledge actually exists in extractable form -- and if it does not, that is the most important finding, because it means your organisation is operating on tacit knowledge that is at risk every time someone leaves.

---

This concludes Chapter 22: Legal Operations. The workflows, agents, and institutional knowledge assets you have built in this chapter form the foundation for deploying legal AI that is professionally responsible, jurisdiction-aware, and genuinely transformative for your legal function. The governing principle holds throughout: the agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.
