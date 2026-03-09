---
slug: /Business-Domain-Agent-Workflows/islamic-finance-domain-agents/shariah-screening
sidebar_position: 14
title: "Shariah Portfolio Screening — Global Standards"
description: "Apply four competing Shariah equity screening methodologies — SC Malaysia, Tadawul, AAOIFI Standard 21, and MSCI Islamic — to a global portfolio, calculate purification obligations from quarterly dividends, analyze screening divergence where the same company passes one methodology but fails another, and build a quarterly Cowork screening workflow"
keywords:
  [
    "Shariah screening",
    "halal stocks",
    "Shariah-compliant portfolio",
    "SC Malaysia SRI",
    "Tadawul Shariah",
    "AAOIFI Standard 21",
    "MSCI Islamic Index",
    "purification",
    "non-permissible income",
    "debt ratio screen",
    "sector exclusions",
    "SSB quarterly report",
    "Saturna Capital",
    "Amana Income Fund",
  ]
chapter: 20
lesson: 14
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Apply Four Shariah Screening Methodologies to a Global Portfolio"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can apply the SC Malaysia, Tadawul, AAOIFI SS21, and MSCI Islamic screening frameworks to a portfolio of equities, identifying which companies pass or fail each methodology and documenting the sector exclusions and financial ratio thresholds that differ across frameworks"

  - name: "Calculate Purification Obligation from Portfolio Dividends"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can calculate the purification amount for a portfolio's quarterly dividends based on each holding's non-permissible income ratio, generate the journal entries, and draft the purification disclosure for the fund's annual report"

  - name: "Analyze Screening Divergence Across Methodologies"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can identify cases where the same company passes one Shariah screening methodology but fails another, explain the technical reason for the divergence (denominator difference, sector classification difference, NPI definition difference), and recommend a resolution approach for the fund's SSB"

learning_objectives:
  - objective: "Apply the four major Shariah screening methodologies (SC Malaysia, Tadawul, AAOIFI SS21, MSCI Islamic) to a portfolio of equities, identifying pass/fail status under each framework"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a screening workbook showing each holding's status under all four methodologies, with the correct financial ratio thresholds and sector exclusions applied"

  - objective: "Calculate the quarterly purification obligation for a Shariah-compliant fund, generate the journal entries, and draft the purification section of the SSB quarterly report"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes Exercise 11 Step 2, producing the correct purification amount from dividend data and non-permissible income ratios"

  - objective: "Analyze screening divergence cases where methodologies produce conflicting pass/fail results for the same company and recommend a resolution approach"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student identifies at least three divergence scenarios, explains the technical reason for each, and proposes a documented resolution policy for the fund's SSB"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Sector exclusion screens (hard exclusions vs soft exclusions with NPI test)"
    - "Financial ratio screens — debt, cash, and accounts receivable thresholds"
    - "Non-permissible income (NPI) threshold and the 5% rule"
    - "Purification obligation calculation from quarterly dividends"
    - "Screening divergence — same company, different pass/fail across methodologies"
    - "Quarterly SSB compliance reporting structure"
  assessment: "6 concepts at B1-B2 level. The screening framework builds directly on the Shariah compliance concepts from earlier lessons. Students apply four competing methodologies to the same portfolio — the multi-methodology comparison is the core learning, not any single methodology in isolation."

differentiation:
  extension_for_advanced: "Research the emerging ESG-Shariah convergence. SC Malaysia's SRI (Sustainable and Responsible Investment) Sukuk Framework overlaps significantly with conventional ESG screening — both exclude weapons, both screen for environmental impact. Draft a comparison of SC Malaysia's Shariah screen with MSCI's ESG screen, identifying which ESG-excluded companies would also be Shariah-excluded and which would not. This is a live practice development in Islamic capital markets."
  remedial_for_struggling: "Focus on the sector exclusion screen (Step 1 of the methodology) and the NPI 5% threshold. These two screens alone determine the Shariah status of most companies. The financial ratio screens (debt, cash) are refinements that matter for borderline cases. If you can explain why a conventional bank is excluded (hard exclusion — interest-based business) and why a hotel chain might be excluded (NPI test — alcohol revenue exceeds 5%), you have the core concept."
---

# Shariah Portfolio Screening — Global Standards

In Lesson 13, you compared zakat calculation across jurisdictions — one Islamic obligation, multiple formulas. Shariah portfolio screening presents an analogous challenge: one ethical framework, multiple screening methodologies, and the same company can be Shariah-compliant under one methodology and non-compliant under another.

Four major screening frameworks govern global Islamic equity investing. The Securities Commission Malaysia maintains the SC Shariah-compliant securities list. The Saudi Exchange (Tadawul) publishes its own Shariah-compliant list. AAOIFI Shariah Standard 21 provides the scholarly reference standard. The MSCI Islamic Index applies its own independent methodology. All four agree on the core prohibitions — conventional banking, alcohol, gambling, pork, weapons of mass destruction. Where they diverge is in the financial ratio thresholds, the denominator used (total assets versus market capitalisation), and the treatment of borderline sectors.

For a global Islamic fund manager holding equities across Malaysian, Saudi, UAE, UK, and US markets, the question is not whether to screen but **which methodology governs** — and what happens when they disagree.

---

## The Four Screening Methodologies

### Step 1: Sector Screens (All Methodologies)

All four methodologies exclude companies with **material involvement** in prohibited sectors:

**Hard exclusions (zero tolerance):**

- Conventional banking (interest-based)
- Conventional insurance
- Alcohol production or distribution
- Tobacco production or distribution
- Pork products (including gelatin, pork-based food processing)
- Gambling (casinos, bookmakers, lottery, online gambling)
- Adult entertainment
- Weapons of mass destruction

**Soft exclusions (subject to the NPI income screen):**

- Defence and military equipment (below WMD level)
- Hotels and hospitality (may have alcohol revenue)
- Entertainment (mixed content)
- Non-halal food companies with majority permissible products

A company with **any** hard-exclusion involvement is automatically non-compliant under all methodologies. A company with soft-exclusion involvement proceeds to the NPI screen.

### Step 2: Financial Ratio Screens

This is where the methodologies diverge:

| Ratio                                  | SC Malaysia         | Tadawul             | AAOIFI SS21         | MSCI Islamic           |
| -------------------------------------- | ------------------- | ------------------- | ------------------- | ---------------------- |
| **Debt screen**                        | 33% of total assets | 30% of market cap   | 30% of market cap   | 33.33% of total assets |
| **NPI screen**                         | 5% of total revenue | 5% of total revenue | 5% of total revenue | 5% of total revenue    |
| **Cash + interest-bearing securities** | 33% of total assets | 30% of market cap   | 30% of market cap   | 33.33% of total assets |

The **denominator difference** is the most common source of screening divergence. SC Malaysia and MSCI use **total assets** (a balance sheet figure, relatively stable). Tadawul and AAOIFI SS21 use **market capitalisation** (a market figure, volatile). A company with stable debt but a falling share price can breach the Tadawul or AAOIFI debt threshold while remaining compliant under SC Malaysia — not because its debt changed, but because its market cap dropped.

### Step 3: Non-Permissible Income (NPI) — The 5% Rule

All four methodologies apply a **5% threshold** for non-permissible income:

```
NPI % = Total Non-Permissible Revenue / Total Revenue × 100

If NPI % > 5% → EXCLUDE
If NPI % ≤ 5% → PASS (but requires PURIFICATION)
If NPI % = 0% → FULLY CLEAN
```

NPI includes: interest income, revenue from conventional insurance, alcohol sales, tobacco sales, pork-related revenue, gambling revenue, adult content revenue.

A company that passes the 5% threshold is Shariah-compliant but **not fully clean** — any dividends received from it carry a purification obligation.

### Step 4: Purification

For holdings that pass the NPI screen but have some non-permissible income:

```
Purification Amount = Dividend Received × NPI % of that company
Total Portfolio Purification = Σ (Dividend from each holding × NPI % of that holding)
```

The purification amount must be **donated to charity**. It cannot be retained by the fund or offset against income.

**Journal entry in the fund's books:**

```
Dr: Purification Expense              [Amount]
Cr: Charity Payable — Purification    [Amount]

On payment:
Dr: Charity Payable — Purification    [Amount]
Cr: Cash                              [Amount]
```

---

## Screening Divergence: The Professional Challenge

The most professionally important concept in Shariah screening is that different methodologies produce **different results for the same company**. Three common divergence scenarios:

**Scenario 1 — Denominator divergence:** A company has stable debt at 32% of total assets but the same debt is 35% of its (declining) market capitalisation. **SC Malaysia: PASS. MSCI: FAIL.** The debt has not changed — only the denominator.

**Scenario 2 — Sector classification divergence:** A Malaysian palm oil plantation company is included in SC Malaysia's Shariah-compliant list (palm oil is halal). MSCI excludes the same company due to environmental screening criteria that overlap with its Islamic methodology. **SC Malaysia: PASS. MSCI: FAIL.** The exclusion reason is not Shariah-based but methodology-based.

**Scenario 3 — NPI definition divergence:** A UK technology company has 6.2% of revenue from a subsidiary that provides services to conventional financial institutions. SC Malaysia classifies this as non-permissible and excludes the company. MSCI uses a narrower NPI definition that counts only direct interest income, not services to interest-based institutions. **SC Malaysia: FAIL. MSCI: PASS.**

**Resolution approach:** The fund's SSB must have a documented policy specifying which methodology governs and how conflicts are resolved. The conservative approach: exclude if **any** methodology excludes. The selective approach: apply the methodology specified in the fund's SSB-approved investment policy. For borderline cases, refer to the SSB for a specific ruling.

---

:::info Exercise Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
**Exercise data:** Download [`islamic-finance-exercise-data.zip`](https://github.com/panaversity/agentfactory-business-plugins/releases/latest) and find `exercises/ex10-shariah-screening-amana.md`
:::

## Exercise 11: Saturna Capital Amana Income Fund — Global Screening

**What you will build:** A global screening workbook applying four methodologies, a purification calculation, a screening divergence analysis, and a quarterly SSB report.

**Requirements:** Cowork or your preferred AI assistant, spreadsheet capability. 45 minutes.

### Step 1 — Build the Global Screening Workbook

```
Build a Shariah equity screening workbook applying the most
conservative of four frameworks: SC Malaysia, Tadawul, AAOIFI
Standard 21, and MSCI Islamic.

For a portfolio of 10 representative companies:
- 3 Malaysian companies (include one palm oil plantation)
- 2 Saudi companies (include one with 4.8% NPI)
- 2 UAE companies
- 2 UK companies (include one financial services company)
- 1 US technology company

For each company, apply:
(1) Sector screen (hard exclusion or soft exclusion + NPI test)
(2) Debt screen under all four denominators
(3) Cash + interest-bearing securities screen
(4) NPI screen at 5% threshold

Mark each company as PASS or FAIL under each methodology.
Identify any companies where methodologies disagree.
Save to /outputs/global-shariah-screen.xlsx.
```

Review the output. Confirm the sector exclusions are correctly applied — the financial services company should be a hard exclusion under all four methodologies.

### Step 2 — Purification Calculation

```
The fund received total quarterly dividends of USD 4.2M from
compliant holdings. The weighted average NPI ratio across the
portfolio is 1.8%.

(1) Calculate the purification amount for the quarter
(2) Generate the journal entry in the fund's books
(3) Draft the purification disclosure for the fund's quarterly
report to unitholders
(4) Which charities are eligible recipients under AAOIFI guidance?
```

Check: Purification = $4.2M × 1.8% = $75,600. This amount must be donated to charity and disclosed to unitholders.

### Step 3 — Screening Divergence Analysis

```
Identify three companies in the screening workbook where at least
one methodology produces a different result from the others. For each:

(1) Which methodology passes and which fails?
(2) What is the technical reason for the divergence?
(3) Is the divergence a genuine Shariah disagreement or a
methodological artefact (e.g., denominator difference)?
(4) Recommend: should the fund include or exclude this company?
Justify your recommendation for the SSB.
```

This step is the core professional skill. The AI agent can identify the divergence. The professional judgment — whether to include or exclude — must come from the CA/CPA and the SSB.

### Step 4 — Quarterly SSB Report

```
Draft the quarterly Shariah Supervisory Board compliance report
for the Amana Income Fund. Required sections:

(1) Portfolio compliance status — % compliant, % borderline,
% non-compliant under the fund's primary methodology
(2) Changes from prior quarter — newly non-compliant stocks
requiring divestment within 30 days
(3) Purification calculation and recommended distribution
(4) Stocks under SSB review (the three divergence cases)
(5) Recommended actions before next quarter

Format for a three-member global SSB: one scholar from the US,
one from Malaysia, one from Saudi Arabia.
```

### Step 5 — Quarterly Cowork Screening Task

```
Write a /schedule task for quarterly Shariah screening automation:

On the first Monday following each calendar quarter-end:
(1) Fetch updated SC Malaysia Shariah list from /inputs/
(2) Fetch MSCI Islamic Index quarterly update from /inputs/
(3) Compare to current portfolio holdings
(4) Identify all screening status changes
(5) Flag newly non-compliant holdings for immediate divestment alert
(6) Calculate purification from quarterly dividend data
(7) Produce SSB quarterly report at /outputs/
(8) Send priority alert for material compliance breaches

Include exception conditions: if any holding representing more
than 3% of fund NAV becomes non-compliant, escalate immediately
rather than waiting for the quarterly report.
```

**Check your work:** The Cowork task in Step 5 should have robust exception handling. A Shariah compliance breach is not a routine administrative event — it requires immediate attention because continued holding of a non-compliant stock after the compliance breach is known constitutes a Shariah violation. The 30-day divestment window that most SSBs allow is a concession, not a comfort zone.

---

## Try With AI

### Prompt 1: ESG-Shariah Convergence Analysis

```
Compare the SC Malaysia Shariah screening methodology with the
MSCI ESG screening methodology. Both exclude certain sectors
and both apply financial ratio tests.

(1) Which sectors are excluded by BOTH Shariah and ESG screens?
(2) Which sectors are excluded by Shariah but NOT by ESG?
(3) Which sectors are excluded by ESG but NOT by Shariah?
(4) For a fund that wishes to be both Shariah-compliant AND
ESG-compliant, what is the combined exclusion list?
(5) Is the overlap large enough to market a single
"Shariah + ESG" product, or are the screens too different?
```

**What you are learning:** The convergence between Islamic ethical investing and conventional ESG investing is one of the fastest-growing areas in global capital markets. Both frameworks share a values-based approach to investment screening, but the specific values differ. Understanding where they overlap enables the practitioner to advise on products that serve both Muslim investors seeking Shariah compliance and non-Muslim investors seeking ESG alignment.

### Prompt 2: Market Cap Volatility and Screening Stability

```
A technology company has total debt of $5B. Its total assets are
$18B (debt ratio 27.8% — below all thresholds). Its market cap
was $20B last quarter (debt/market cap = 25% — below threshold)
but has dropped to $13B this quarter (debt/market cap = 38.5% —
above the 33% threshold).

(1) Under SC Malaysia (total assets denominator): compliant or not?
(2) Under MSCI Islamic (market cap denominator): compliant or not?
(3) The company's debt has not changed. Should a methodology that
uses market cap as denominator force divestment because the share
price dropped? What is the Shariah argument for and against?
(4) How does DJIM's use of a 24-month trailing average market cap
address this volatility problem?
```

**What you are learning:** The denominator choice is not a technicality — it determines how stable a company's Shariah status is over market cycles. A fund that uses market-cap-based screening will experience more turnover (and more transaction costs) during market downturns, as companies breach thresholds not because their debt increased but because their share price fell. The trailing average approach smooths this volatility but introduces a lag.

### Prompt 3: Build a Personal Shariah Screening Skill

Build a personal Shariah screening skill in Cowork using **Create with Claude**. Tell Cowork your scenario:

> "I hold 15 stocks across US, UK, and Malaysian markets. Help me build a skill that screens my portfolio for Shariah compliance using the appropriate methodology for each market, flags failures, and calculates my purification obligation. The skill should default to SC Malaysia methodology for Malaysian stocks, MSCI Islamic for US and UK stocks, and let me switch methodologies if needed."

Review Claude's draft — does it include routing logic to select the correct methodology by market? Does it specify the financial ratio thresholds and NPI screen? Refine and save.

**Test the skill** by running a screening command on a sample portfolio: pick 3-4 well-known companies (e.g., Apple, Petronas, HSBC) and ask the skill to screen them. Check whether it correctly applies the hard exclusion for HSBC (conventional banking) and runs the financial ratio screens for the others.

**After testing**, compare your skill's approach against the `shariah-screening-global` skill installed by the plugin. Does your skill handle methodology switching the same way the plugin's router handles jurisdiction switching? What routing logic did Claude include that you did not specify in your prompt?

**What you are learning:** Building a screening skill from your own requirements tests whether you understand the routing pattern from Lesson 3. The router logic (identify methodology, load screening rules, apply, flag) mirrors the chapter's router-to-product-to-overlay architecture. If Claude produced a skill without routing logic, your prompt was missing the methodology-switching instruction — the same gap that makes generic agents fail across jurisdictions.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 15: AAOIFI vs IFRS — Full Financial Statements →](./15-aaoifi-vs-ifrs-capstone.md)
