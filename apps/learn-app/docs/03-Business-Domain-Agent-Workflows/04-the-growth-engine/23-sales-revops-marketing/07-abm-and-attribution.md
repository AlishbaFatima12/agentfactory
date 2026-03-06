---
sidebar_position: 7
title: "ABM and Attribution Modeling"
description: "How Account-Based Marketing coordinates prospect research, ICP scoring, outreach sequences, and campaign planning into a single orchestrated motion for high-value targets, and how attribution models assign credit across multi-channel campaigns"
keywords:
  [
    "account-based marketing",
    "ABM",
    "attribution modeling",
    "first-touch attribution",
    "last-touch attribution",
    "multi-touch attribution",
    "data-driven attribution",
    "B2B marketing",
    "B2C marketing",
    "marketing automation",
    "customer acquisition cost",
    "CAC",
    "ROI",
    "HubSpot",
    "Marketo",
    "sales and marketing alignment",
  ]
chapter: 23
lesson: 7
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Design an ABM Campaign Using Coordinated Plugin Commands"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can map a named target account through the full ABM workflow -- /research for account intelligence, /persona for buying committee mapping, /sequence for multi-contact orchestration, /campaign for ABM-specific brief -- and explain how each command's output feeds the next"

  - name: "Compare Attribution Models and Interpret Credit Assignment"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can describe first-touch, last-touch, linear, and data-driven attribution models, apply each to the same multi-channel conversion path, and explain why different models produce different credit assignments and budget recommendations"

  - name: "Adapt B2B and B2C Sales Motions Using the Plugin Framework"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can articulate the structural differences between B2B and B2C buying processes -- decision-making unit size, sales cycle length, ICP structure, outreach channels -- and explain how the same plugin architecture serves both by reconfiguring ICP definitions, scoring weights, and outreach templates"

learning_objectives:
  - objective: "Design an ABM campaign that coordinates /research, /persona, /sequence, and /campaign commands into a single orchestrated workflow for a named high-value target account"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces an ABM brief for a specified target account showing how each plugin command contributes intelligence at the appropriate stage of the workflow"

  - objective: "Analyse a multi-channel conversion path using four attribution models and explain how each model's credit assignment leads to different budget allocation decisions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given the same conversion path, student correctly calculates credit under first-touch, last-touch, linear, and data-driven models and explains which model best fits a specified business context"

  - objective: "Explain the structural differences between B2B and B2C buying processes and describe how to reconfigure the plugin framework for each"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can list at least four structural differences and identify which plugin configuration elements change between B2B and B2C deployments"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Account-Based Marketing as an orchestration strategy"
    - "The ABM workflow: research, map, sequence, measure"
    - "Attribution models: first-touch, last-touch, linear, data-driven"
    - "Credit assignment and budget reallocation"
    - "B2B vs B2C structural differences"
    - "Customer Acquisition Cost (CAC) and ROI calculation"
    - "Marketing automation platforms alongside the plugin layer"
  assessment: "7 concepts at B1 level -- within the 7-10 cognitive limit for this tier. The ABM workflow is presented as a sequential narrative reducing cognitive overhead. Attribution models build on each other progressively."

differentiation:
  extension_for_advanced: "Take a real target account from your own pipeline. Run /research against it, build a buying committee map with /persona, and design a multi-contact outreach sequence using /sequence. Compare the output against what your team would have produced manually. Document the intelligence gaps the plugin filled."
  remedial_for_struggling: "Focus on the ABM workflow diagram and the attribution comparison table. If you can explain why ABM coordinates multiple commands at the same account and why different attribution models assign different credit to the same touchpoints, you have the conceptual foundation for this lesson."
---

# ABM and Attribution Modeling

In the previous lessons, you used `/research` to investigate individual prospects, `/score` to qualify them, and `/outreach` to write personalised messages. Each of these workflows treated the prospect as the unit of work. For most mid-market sales, that is the right approach.

Enterprise B2B is different. When you are pursuing a $250,000 annual contract with a company that has a buying committee of six people across three departments, the individual prospect is not the unit of work. The **account** is. This is Account-Based Marketing.

## What Is Account-Based Marketing?

:::info Concept: Account-Based Marketing (ABM)
**Definition**: A strategic approach where marketing and sales coordinate to treat a specific target company as a market of one. Instead of casting a wide net and filtering leads, ABM identifies high-value accounts first, then orchestrates multi-contact, multi-channel campaigns tailored specifically to each account's situation, pain points, and buying committee.

**Why it matters**: In enterprise B2B sales, the average buying committee includes 6 to 10 decision-makers (Gartner, 2023). No single contact controls the purchase. ABM coordinates engagement across the entire committee -- the economic buyer, the technical evaluator, the internal champion, and the end users -- rather than treating each as an isolated lead.
:::

ABM is not new. Enterprise sales teams have always pursued named accounts. What is new is the ability to execute ABM at scale. Before AI, a genuine ABM campaign required a dedicated team spending weeks per account: researching the company, mapping the buying committee, writing personalised content for each stakeholder, coordinating outreach timing, and tracking engagement across contacts. Most organisations could sustain this for 5 to 10 target accounts at a time.

The plugin framework changes the economics. The same `/research`, `/persona`, `/score`, `/sequence`, and `/campaign` commands you have already learned become an orchestrated ABM workflow when pointed at a single account instead of a pipeline of leads.

## The ABM Workflow: Four Coordinated Commands

Here is how the plugin commands coordinate for an ABM campaign targeting a single high-value account.

### Worked Example: ABM Campaign for TechVista Solutions, Karachi

**The target**: TechVista Solutions, a Pakistani fintech company with 180 employees, headquartered in Karachi, operating a payments platform used by 40+ banks across Pakistan and the UAE. You sell API security monitoring software. TechVista is expanding into the GCC market and has just raised a $12M Series B from a Dubai-based VC fund. Your deal size if they buy: $180,000/year.

**Step 1 -- Account Intelligence with `/research`**

```
/research
> User: TechVista Solutions, Karachi. Fintech — payments platform.
        They just raised $12M Series B. Expanding into UAE.
        We sell API security monitoring. I need the full account picture.
```

The agent returns the account research brief: company model, technology stack (visible from their developer job postings on Rozee.pk and LinkedIn), recent news (the Series B, SECP regulatory compliance requirements, SBP's 2025 Digital Payment Security Framework), competitive landscape, and the specific pain signals that make API security relevant right now.

Key intelligence surfaces: TechVista posted three backend engineer roles in the last 30 days mentioning "API gateway" and "PCI-DSS compliance." Their CTO published an article on LinkedIn Pakistan about "the hidden cost of API sprawl in fintech." The State Bank of Pakistan's 2025 Payment Systems Security regulations require real-time API monitoring for all licensed payment institutions -- a regulatory tailwind for your product.

**Step 2 -- Buying Committee Mapping with `/persona`**

```
/persona
> User: TechVista Solutions. Build the buying committee for an API
        security monitoring platform purchase at $180K/year. This is
        a Pakistani fintech — map the decision-making structure.
```

The agent maps the buying committee:

| Role                       | Person             | Motivation                                                    | Fear                                                          | Outreach Channel                                                |
| -------------------------- | ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| **Economic buyer**         | CEO / co-founder   | Market expansion; investor confidence; regulatory compliance  | Security incident during GCC expansion; SBP audit failure     | Warm introduction via investor network; formal meeting          |
| **Technical evaluator**    | CTO                | Solve API sprawl; pass PCI-DSS audit; ship faster             | Tool that slows deployment pipeline; integration overhead     | LinkedIn DM referencing his API sprawl article; technical demo  |
| **Internal champion**      | VP Engineering     | Reduce incident response time; protect team from firefighting | New tool his team rejects; implementation disrupting delivery | Peer referral; technical proof of concept                       |
| **Compliance stakeholder** | Head of Compliance | SBP regulatory requirements; PCI-DSS certification            | Audit finding; regulatory penalty                             | Email with regulatory mapping document                          |
| **Finance gatekeeper**     | CFO                | Budget discipline; ROI justification                          | Approving a tool that does not demonstrably reduce risk cost  | ROI one-pager; comparison to cost of a single security incident |

Notice something important: the channels are not identical to a Western B2B playbook. In Pakistan's business culture, warm introductions through mutual connections -- via the investor network, industry associations like P@SHA (Pakistan Software Houses Association), or shared board members -- carry significantly more weight than cold LinkedIn outreach. The agent adapts the channel recommendation to the regional context.

**Step 3 -- Multi-Contact Outreach with `/sequence`**

```
/sequence
> User: Build coordinated outreach sequences for the TechVista buying
        committee. 5 contacts. Mix channels: LinkedIn, email, WhatsApp
        Business, and warm introduction. Stagger timing so the CEO
        hears about us from two directions before we make direct contact.
        Pakistani business context -- relationship-first approach.
```

The agent builds a coordinated timeline:

- **Week 1**: VP Engineering receives a peer referral from a mutual contact at a Lahore-based fintech you already serve. Simultaneously, the CTO sees your team's comment engaging thoughtfully with his API sprawl article on LinkedIn.
- **Week 2**: VP Engineering gets a WhatsApp Business message from your Pakistan country manager: brief, personal, referencing the introduction. CTO receives a LinkedIn DM referencing his article and offering a 20-minute technical walkthrough -- no pitch, just shared problem-solving.
- **Week 3**: Head of Compliance receives an email with a mapping document showing exactly how your platform addresses the SBP 2025 Digital Payment Security requirements -- specific section references, not generic compliance language. CFO receives an ROI one-pager.
- **Week 4**: CEO hears your company name from two internal sources (CTO and VP Engineering, both now engaged) before your managing director sends a formal meeting request via mutual investor connection.

This is orchestration. No single touchpoint would close the deal. The coordinated campaign ensures that by the time you request the CEO's time, the internal groundwork is already laid.

**Step 4 -- Campaign Measurement with `/campaign` and `/analyze`**

```
/campaign
> User: Build an ABM campaign brief for TechVista Solutions.
        Goal: first meeting with CEO within 6 weeks.
        Budget: $8,000 (including content, events, outreach).
        Strategy: relationship-first, multi-stakeholder, Pakistan/GCC context.
```

The campaign brief includes success metrics specific to ABM:

| ABM Metric                           | Target    | Why It Matters                                      |
| ------------------------------------ | --------- | --------------------------------------------------- |
| Buying committee contacts engaged    | 4 of 5    | Committee coverage predicts deal velocity           |
| Meetings booked with decision-makers | 2+        | At least CEO + one technical stakeholder            |
| Content consumed per contact         | 2+ pieces | Indicates genuine evaluation, not polite engagement |
| Time from first touch to CEO meeting | < 6 weeks | Benchmark for future ABM campaigns                  |
| Pipeline value created               | $180,000  | Single deal justifies the entire ABM investment     |

:::info Concept: Customer Acquisition Cost (CAC)
**Definition**: The total cost of acquiring one new customer, calculated as total sales and marketing spend divided by the number of new customers acquired in a given period.

**Formula**: CAC = (Total Sales Cost + Total Marketing Cost) / Number of New Customers

**Example**: If you spend $8,000 on the TechVista ABM campaign and close the $180,000/year deal, your CAC for that account is $8,000 -- a 22.5:1 ratio of first-year contract value to acquisition cost. In enterprise B2B, a healthy CAC ratio is typically 3:1 or better, making this an efficient acquisition.

**Why it matters**: CAC determines whether your sales and marketing engine is building value or destroying it. If your CAC exceeds the lifetime value of the customer, you are paying more to acquire customers than they are worth.
:::

## Attribution Modeling: Who Gets the Credit?

ABM campaigns -- and all multi-channel campaigns -- create a measurement problem. A prospect interacts with your company across multiple channels before buying. Which channel deserves the credit?

:::info Concept: Attribution Model
**Definition**: A framework for assigning credit for a conversion (sale, meeting, signup) to the marketing touchpoints that preceded it. Different attribution models assign credit differently, leading to different conclusions about which channels are working.

**Why it matters**: Attribution determines budget allocation. If you credit the wrong channel, you invest more in what is not working and cut what is.
:::

### The Four Models

Consider this conversion path for a real deal:

**Conversion path for Gulf Logistics FZE, Dubai:**

1. **LinkedIn ad** (Week 1) -- CTO clicks on a sponsored article about API monitoring in GCC fintech
2. **Whitepaper download** (Week 2) -- CTO downloads your "API Security for Gulf Financial Institutions" report
3. **Webinar attendance** (Week 4) -- CTO and Head of IT attend your webinar on SBP/CBUAE compliance
4. **Email nurture** (Week 5) -- CTO opens and clicks 3 of 5 nurture emails
5. **Sales call** (Week 6) -- Discovery call with your Dubai-based rep
6. **Proposal and close** (Week 8) -- $120,000/year deal signed

**Deal value: $120,000/year. Total marketing spend on this path: $4,200.**

Now apply each attribution model:

:::info Concept: First-Touch Attribution
**Definition**: 100% of the credit goes to the first marketing touchpoint that introduced the prospect to your company.

**In this example**: The LinkedIn ad receives all $120,000 in attributed revenue.

**Strength**: Clearly measures what is filling the top of your funnel.

**Weakness**: Ignores everything that happened between first awareness and the purchase decision. The webinar, the nurture emails, and the sales call contributed nothing according to this model -- which is clearly wrong.
:::

:::info Concept: Last-Touch Attribution
**Definition**: 100% of the credit goes to the final marketing touchpoint before the conversion.

**In this example**: The sales call (or the email nurture, depending on where you draw the "last marketing touch" line) receives all $120,000 in attributed revenue.

**Strength**: Measures what directly triggers the purchase decision.

**Weakness**: Ignores the entire demand generation and nurture process. The LinkedIn ad that brought the CTO into your world gets zero credit.
:::

:::info Concept: Multi-Touch Attribution (Linear)
**Definition**: Credit is distributed equally across all touchpoints in the conversion path.

**In this example**: Each of the 5 marketing touchpoints receives 20% of the credit ($24,000 each).

| Touchpoint          | Credit (Linear) |
| ------------------- | --------------- |
| LinkedIn ad         | $24,000 (20%)   |
| Whitepaper download | $24,000 (20%)   |
| Webinar             | $24,000 (20%)   |
| Email nurture       | $24,000 (20%)   |
| Sales call          | $24,000 (20%)   |

**Strength**: Acknowledges that the entire journey matters.

**Weakness**: Treats all touchpoints as equally important. Was the webinar really as important as the LinkedIn ad that created initial awareness? Was the third nurture email as important as the first? Linear attribution assumes yes, which oversimplifies.
:::

:::info Concept: Data-Driven Attribution
**Definition**: Credit is assigned based on statistical analysis of conversion paths across many deals. The model learns which touchpoints most frequently appear in paths that convert (and are absent from paths that do not), and assigns credit proportionally.

**In this example (hypothetical model trained on 200 past conversions)**:

| Touchpoint          | Credit (Data-Driven) |
| ------------------- | -------------------- |
| LinkedIn ad         | $18,000 (15%)        |
| Whitepaper download | $30,000 (25%)        |
| Webinar             | $42,000 (35%)        |
| Email nurture       | $14,400 (12%)        |
| Sales call          | $15,600 (13%)        |

The model discovered that webinar attendance is the strongest predictor of conversion across your entire pipeline -- prospects who attend a webinar are 3.2x more likely to close. The whitepaper download is the second-strongest signal. LinkedIn ads are necessary for awareness but are less predictive of conversion on their own.

**Strength**: Based on your actual data, not assumptions. Reflects what actually drives conversions in your specific business.

**Weakness**: Requires significant data volume (typically 200+ conversion paths) to produce reliable models. Early-stage companies rarely have enough data for this. Also requires analytics infrastructure capable of tracking the full customer journey across channels.
:::

### Which Model Should You Use?

| Business Context                       | Recommended Model                       | Rationale                                                                                                           |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Early-stage startup, < 50 deals closed | First-touch + last-touch (side by side) | Not enough data for multi-touch; use both single-touch models to see "what fills the funnel" vs "what closes deals" |
| Growth-stage, 50-200 deals             | Linear multi-touch                      | Acknowledges the full journey; simple enough to action                                                              |
| Scaled operation, 200+ deals           | Data-driven                             | Enough data to let the model learn what actually matters                                                            |
| ABM (any stage)                        | Account-level multi-touch               | Track engagement across the buying committee, not individual contacts                                               |

:::info Concept: ROI (Return on Investment)
**Definition**: The financial return generated by a marketing or sales investment, expressed as a percentage or ratio.

**Formula**: ROI = (Revenue Generated - Cost of Investment) / Cost of Investment

**Example**: The Gulf Logistics campaign cost $4,200 and generated $120,000 in first-year revenue. ROI = ($120,000 - $4,200) / $4,200 = 27.6x. For every dollar spent, you generated $27.60 in revenue.

**Why it matters**: ROI is the ultimate measure of marketing effectiveness. But ROI without attribution is misleading -- you need to know which activities generated the return, not just that the return exists.
:::

## B2B vs B2C: How the Same Framework Adapts

The plugin framework serves both B2B and B2C motions, but the configuration changes substantially.

:::info Concept: B2B vs B2C
**B2B (Business-to-Business)**: Selling to organisations. Multiple decision-makers. Longer sales cycles (weeks to months). Higher deal values. Relationship-driven. Fewer, larger deals.

**B2C (Business-to-Consumer)**: Selling to individuals. Single decision-maker (or household). Shorter cycles (minutes to days). Lower per-transaction value. Volume-driven. Many, smaller transactions.

**Why the distinction matters for the plugin**: The same commands work for both, but the ICP structure, scoring model, outreach channels, and campaign strategy differ fundamentally.
:::

| Dimension                  | B2B Configuration                                                         | B2C Configuration                                                  |
| -------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **ICP structure**          | Firmographic (company size, revenue, industry) + technographic + persona  | Demographic (age, income, location) + psychographic + behavioural  |
| **Scoring model**          | Fit (40%) + Timing (40%) + Engagement (20%) — timing signals are critical | Engagement (50%) + Fit (30%) + Recency (20%) — behaviour dominates |
| **Outreach channels**      | LinkedIn, email, phone, events, WhatsApp Business                         | Email, SMS, push notifications, social media ads, in-app           |
| **Content strategy**       | Thought leadership, case studies, ROI calculators, webinars               | Product reviews, user stories, promotions, lifestyle content       |
| **Sales cycle**            | Weeks to months; multi-stakeholder                                        | Minutes to days; individual or household                           |
| **Deal value**             | $10K-$1M+ per deal                                                        | $10-$500 per transaction                                           |
| **ABM applicability**      | Core strategy for enterprise deals                                        | Rarely applicable; use segment-based targeting instead             |
| **Attribution complexity** | High — many touchpoints across long cycles                                | Moderate — fewer touchpoints, shorter paths                        |

### Configuring for B2C: A Karachi E-Commerce Example

Consider Pakstyle, a Pakistani fashion e-commerce brand selling directly to consumers. Their plugin configuration would differ from TechVista's B2B setup:

```
## ICP Definition — B2C Fashion E-Commerce

### Demographic Criteria
Age:              18–35 (primary); 35–50 (secondary)
Gender:           Female (70%); Male (30%)
Location:         Pakistan Tier 1 cities (Karachi, Lahore, Islamabad);
                  UAE/GCC diaspora
Income:           Middle class and above (PKR 80,000+ monthly household)
Digital behaviour: Active Instagram and TikTok users;
                  mobile-first shopping (85% of Pakistani e-commerce)

### Behavioural Signals (replace timing signals for B2C)
Cart abandonment:    Customer added items but did not purchase
Browse without buy:  3+ sessions, no conversion
Price sensitivity:   Only purchases during sales events
Seasonal buyer:      Active during Eid, wedding season, summer collection
```

The `/outreach` command generates SMS and WhatsApp messages instead of LinkedIn DMs. The `/sequence` command builds email + push notification + retargeting ad sequences instead of LinkedIn + email cadences. The `/campaign` command optimises for volume conversions instead of named-account engagement.

## Marketing Automation: Where the Plugin Sits

:::info Concept: Marketing Automation
**Definition**: Software platforms that automate repetitive marketing tasks -- email sequences, lead scoring, campaign tracking, audience segmentation, and reporting. Major platforms include HubSpot (broad, strong for SMBs), Marketo (enterprise B2B), Klaviyo (e-commerce and B2C), and Zoho Marketing Automation (popular across South Asia and GCC).

**Why it matters**: The plugin layer does not replace your marketing automation platform. It sits alongside it. Your marketing automation platform handles the execution -- sending emails, tracking opens, managing lists, triggering workflows. The plugin handles the intelligence -- researching prospects, writing personalised content, planning campaigns, and analysing performance.
:::

The integration pattern:

| Layer                                | What It Does                                                                  | Examples                                                    |
| ------------------------------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Marketing automation platform**    | Execution: sends emails, tracks engagement, manages lists, triggers workflows | HubSpot, Marketo, Klaviyo, Zoho                             |
| **CRM**                              | Record system: stores contacts, accounts, deals, activities                   | Salesforce, HubSpot CRM, Pipedrive, Zoho CRM                |
| **Plugin layer (Sales + Marketing)** | Intelligence: researches, scores, writes, plans, analyses                     | `/research`, `/score`, `/outreach`, `/campaign`, `/analyze` |
| **MCP connectors**                   | Integration: connects the plugin to your CRM and marketing platform           | Salesforce MCP, HubSpot MCP, Google Sheets MCP              |

The plugin makes your existing tools smarter. It does not replace them.

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Design an ABM Campaign

```
I want to practise Account-Based Marketing planning.

Target account: NexaPay, a fintech startup in Dubai (UAE) with
120 employees. They process payments for SMEs across the GCC.
They recently received CBUAE (Central Bank of UAE) approval
for a new payment licence. They are hiring 15 engineers.

My company sells compliance monitoring software for fintechs.
Deal size would be approximately $95,000/year.

Design an ABM campaign:
1. Map the likely buying committee (at least 4 roles)
2. For each committee member, recommend:
   - The outreach channel best suited to GCC business culture
   - The specific hook or angle
   - The content asset they would find most valuable
3. Build a 4-week orchestrated timeline showing how touchpoints
   are coordinated so the CEO hears about us internally before
   we approach directly
4. Define 5 ABM-specific success metrics with targets
```

**What you are learning:** ABM is an orchestration problem, not a messaging problem. The challenge is not writing one good email -- it is coordinating multiple contacts, channels, and timelines so that engagement compounds across the buying committee. This prompt forces you to think in terms of account-level choreography.

### Prompt 2: Attribution Model Comparison

```
A B2B SaaS company in Lahore sells HR software to mid-size
Pakistani companies. Here is the conversion path for a recent
deal worth PKR 3,600,000/year (approximately $12,800 USD):

1. Google search ad (cost: PKR 15,000) — HR Director clicked
2. Blog article (organic, no direct cost) — read "5 Signs Your
   HR Department Needs Automation"
3. WhatsApp message from sales rep (via industry WhatsApp group
   referral) — started conversation
4. Product demo (cost: PKR 25,000 in rep time + demo prep)
5. Reference call with existing customer in Islamabad
6. Contract signed

Total marketing + sales cost for this path: PKR 85,000

Apply four attribution models (first-touch, last-touch, linear,
data-driven) to this conversion path. For each model:
- Show the exact credit assignment in PKR
- Explain what budget decision each model would lead to
- Identify which model is most misleading for this specific path
  and why

Then recommend: which model should this company use given they
close approximately 8 deals per month?
```

**What you are learning:** Attribution is not academic -- it directly determines where your marketing budget goes next quarter. The same conversion path tells four completely different stories depending on which model you use. Learning to read each model critically prevents you from over-investing in the wrong channel.

### Prompt 3: B2B vs B2C Plugin Configuration

```
I run two businesses:

Business A: A B2B cybersecurity consultancy in Riyadh, Saudi
Arabia, selling to enterprise clients (deal size: SAR 500,000+).
My buyers are CISOs and IT Directors at Saudi banks and
government agencies.

Business B: A B2C mobile app selling premium fitness coaching
subscriptions in Pakistan (price: PKR 2,500/month). My users
are urban professionals aged 22-40 in Karachi, Lahore, and
Islamabad.

For each business, configure:
1. The ICP definition (firmographic/demographic criteria)
2. The lead scoring model (weights for each dimension)
3. The primary outreach channels (considering regional culture)
4. The campaign strategy (ABM vs. volume vs. hybrid)
5. The attribution model (which one and why)
6. The key differences in how /outreach, /sequence, and
   /campaign commands would be configured

Highlight where GCC business culture (Business A) and Pakistani
consumer behaviour (Business B) change the standard playbook.
```

**What you are learning:** The plugin framework is the same for B2B and B2C, but the configuration is fundamentally different. Understanding these structural differences prevents you from applying a B2C playbook to a B2B sale (or vice versa) -- a mistake that wastes budget and alienates prospects. Regional context further modifies both configurations in ways that Western-centric marketing guides typically ignore.

---

Continue to [Lesson 8: Outreach Compliance and Regional Context ->](./08-outreach-compliance-and-regional-context.md)
