

**THE AI AGENT FACTORY**

**Chapter 21**

**Banking-Specific AI**

IFRS 9 ECL · Basel III/IV · AML/KYC

*AI-Native Implementation with Cowork and Plugins*

Panaversity — The AI Agent Factory

*Part of The AI Agent Factory Book Series*

| *Banking is the industry where the cost of a wrong number is not a restatement — it is a systemic crisis. AI in banking is therefore not merely an efficiency story. It is a governance story. The question is not whether AI can run an ECL model faster than a spreadsheet. The question is whether it can produce an ECL model whose assumptions and limitations are transparent enough that a CFO can defend it to a regulator and a board can challenge it with confidence.* |
| :---- |

# **Why Banking Demands Its Own Chapter**

Three features distinguish banking AI from the general financial AI covered in earlier chapters.

**First, regulatory density.** A manufacturing CFO who deploys an AI tool that misclassifies a fixed asset faces an audit finding. A bank CFO whose AI tool miscalculates expected credit losses faces a regulatory breach, a restatement, a capital adequacy violation, and possibly an enforcement action. The regulatory consequence of error in banking is categorically different from any other industry.

**Second, model risk.** Banking is the industry that has thought longest and hardest about model risk. The Federal Reserve's SR 11-7, the EBA's guidelines on internal models, and the PRA's model risk management principles have created a professional discipline of model validation that is more rigorous than anything in comparable industries. AI in banking must be designed to be validated, not merely deployed.

**Third, data volume and real-time requirements.** A large retail bank processes tens of millions of transactions daily. An AML transaction monitoring system must screen every one against sanctions lists, behavioural models, and network analysis in near-real-time. These are not tasks that benefit from occasional AI assistance — they require AI infrastructure designed for production-grade, regulated, audited execution.

| 🔑 THE BANKING AI HIERARCHY: Level 1 — Calculation Automation (ECL computation, RWA calculation, sanctions screening). Level 2 — Analytical Augmentation (surfacing ECL assumption drivers, AML typology detection, stress test synthesis). Level 3 — Autonomous Compliance Execution (continuous TM, real-time capital alerts, automated IFRS 9 staging triggers). This chapter builds competence at Level 1 and Level 2\. Level 3 requires institutional infrastructure — but understanding what it requires shapes every Level 1 and Level 2 design decision. |
| :---- |

| 📊 CONCEPT BOX: The Global Banking Regulatory Map |
| :---- |
| IFRS 9 ECL — Standard setter: IASB. Adopted in 140+ countries (EU, UK, Australia, Canada, most of Asia and Africa). NOT USA (which uses CECL under FASB ASC 326). Enforced by national banking supervisors. |
| Basel III/IV Capital Adequacy — Standard setter: BCBS at BIS. Implemented globally through national regulation: EU CRR/CRD IV/V, UK PRA Rulebook, US Basel III Final Rule, APRA APS 110, OSFI CAR, MAS Notice 637\. |
| AML/KYC — Standard setter: Financial Action Task Force (FATF) — 40 Recommendations. National legislation: Bank Secrecy Act (USA), Proceeds of Crime Act (UK), AUSTRAC Act (Australia), AMLA (Pakistan). |
| AI agent instruction: Every banking task must specify jurisdiction before generating any regulatory output. Capital ratios under EU CRR differ from US Basel III. IFRS 9 differs from CECL. AML thresholds and SAR formats differ by country. Jurisdiction-first, always. |

| PART ONE: The Modern Banking Regulatory Landscape |
| :---: |

# **The Three Pillars of Banking Regulation**

Banking regulation in all major jurisdictions converges on three interconnected concerns:

**Solvency:** Does the bank have enough capital to absorb losses without becoming insolvent? This is the domain of Basel III/IV. Capital adequacy ratios — CET1, Tier 1, Total Capital — answer the question: if a fraction of the bank's assets fail, can the bank absorb the losses from its own equity before depositors or creditors are impaired?

**Accounting accuracy:** Are the bank's financial statements accurately reflecting the credit quality of its loan portfolio? This is the domain of IFRS 9\. The pre-IFRS 9 'incurred loss' model allowed banks to defer recognition of credit deterioration until losses were actually incurred. The 2008 crisis demonstrated catastrophically that this produced systematically overstated asset values.

**Financial crime prevention:** Is the bank being used as a vehicle for money laundering, terrorist financing, or sanctions evasion? This is the domain of AML/KYC. The penalties for AML failures are now among the largest single fines in corporate history: Deutsche Bank $630M (2017), Westpac AUD 1.3B (2020), Goldman Sachs $2.9B (2020), HSBC $1.9B (2012).

| PART TWO: IFRS 9 Expected Credit Loss |
| :---: |

# **Why IFRS 9 ECL Changed Everything**

The 2008 financial crisis produced a regulatory consensus that conventional bank accounting was systemically misleading. Under IAS 39, banks recognised credit losses only when there was objective evidence of impairment. This 'incurred loss' model meant a bank lending to a borrower whose credit quality was visibly deteriorating could carry the loan at full face value until the moment of actual default.

IFRS 9, effective January 1 2018, replaced incurred loss with **expected credit loss (ECL)**: a forward-looking, probability-weighted estimate of credit losses over a defined horizon, incorporating reasonable and supportable information about future economic conditions. Banks must now recognise credit deterioration continuously, not just at the point of default.

| 📊 CONCEPT BOX: The IFRS 9 Three-Stage Model |
| :---- |
| STAGE 1 — PERFORMING: No significant increase in credit risk since initial recognition. ECL \= 12-month ECL. Interest income recognised on the GROSS carrying amount (full face value). |
| STAGE 2 — UNDER-PERFORMING: Significant increase in credit risk (SICR) since initial recognition, but not yet credit-impaired. ECL \= Lifetime ECL (all losses over remaining contractual life). Interest income still on GROSS amount. |
| SICR indicators (Stage 2 triggers): Credit rating downgrade ≥2 notches; 30+ days past due; financial covenant breach; watchlist designation; qualitative deterioration indicators. |
| STAGE 3 — NON-PERFORMING / CREDIT-IMPAIRED: Credit impairment has occurred. ECL \= Lifetime ECL. Interest income recognised on the NET carrying amount (gross minus ECL provision) — 'unwinding of discount'. |
| THE STAGING CLIFF EFFECT: Moving from Stage 1 to Stage 2 typically increases ECL provision by 5–10× (from 12-month to lifetime ECL). The SICR assessment is the most consequential judgment call in IFRS 9 and the area most scrutinised by auditors and regulators. |

## **The ECL Model Architecture**

### **Component 1: Segmentation**

Retail loan portfolios are too large to model individually for PD/LGD. Banks segment them into homogeneous pools: product type (mortgage, personal loan, credit card, auto), credit quality band, geography, vintage (year of origination), and loan-to-value band for mortgages. Corporate portfolios are modelled at the individual obligor level or by rating grade.

### **Component 2: PD Estimation**

**Through-the-cycle (TTC) PD:** Average probability of default over a full economic cycle, estimated from long-run historical default rates by rating grade.

**Point-in-time (PIT) PD:** Current probability of default calibrated to current conditions. IFRS 9 requires PIT PD — the estimate must reflect current conditions plus forward-looking macroeconomic scenarios. The PIT-PD is derived from the TTC-PD by applying a credit cycle adjustment.

### **Component 3: LGD Estimation**

LGD depends on: collateral type and value; seniority (secured vs. unsecured); recovery process (workout costs, legal costs, time to resolution); and downturn LGD. IFRS 9 requires LGD calibrated to a 'downturn' scenario — collateral values under stressed conditions, not current market values.

For mortgages: LGD \= MAX(0, (Exposure − Stressed Collateral Value)) / Exposure. Properties sold in a forced sale typically achieve 70–80% of current market value.

### **Component 4: EAD and CCF**

For revolving facilities (credit cards, overdrafts, undrawn commitments): EAD \= Current drawn balance \+ (CCF × Undrawn commitment). Credit Conversion Factor (CCF) reflects that borrowers in financial difficulty typically draw down credit lines before defaulting.

### **Component 5: Macroeconomic Scenarios**

| Scenario | Weight | GDP Growth | Unemployment | House Price |
| :---- | :---- | :---- | :---- | :---- |
| Upside | 15% | \+3.5% | 3.8% | \+5% |
| Base | 40% | \+1.8% | 4.5% | \+2% |
| Adverse | 30% | −0.5% | 6.2% | −5% |
| Severe | 15% | −2.5% | 8.0% | −15% |

### **The ECL Formula**

| 12-Month ECL (Stage 1): |
| :---- |
|   ECL₁₂ \= PD₁₂ × LGD × EAD |
|   |
| Lifetime ECL (Stage 2 and 3): |
|   ECL\_lifetime \= Σt \[ PD\_marginal\_t × LGD\_t × EAD\_t × Discount\_factor\_t \] |
|   |
| Scenario-Weighted ECL: |
|   Base ECL \= Σs ( Weight\_s × ECL\_scenario\_s ) |

| 📊 CONCEPT BOX: Post-Model Adjustments (PMAs) |
| :---- |
| PMAs are expert judgments applied on top of the quantitative model to correct for known model limitations. |
| Types of PMA: Covid-19 PMA (pandemic broke historical PD/LGD relationships); Sector PMA (model underestimates risk in specific sectors); Model limitation PMA (data gaps in new market segments); Climate risk PMA (physical and transition risks not yet in historical data). |
| Governance: PMAs must be documented; approved by the IFRS 9 governance committee (CFO \+ CRO \+ Chief Accountant); reviewed at every subsequent ECL calculation; time-limited (not permanent unless model limitation cannot be remediated). |
| PMAs are the primary audit focus area for IFRS 9 — because they represent management override of quantitative models. Total PMA amounts are disclosed in IFRS 7 notes and tracked closely by investors. |

| PART THREE: Basel III/IV — Capital Adequacy Framework |
| :---: |

# **Why Capital Adequacy Is the Ultimate Constraint**

Capital ratios are legally mandated minimum thresholds. A breach is not a red flag; it is a regulatory event. The Basel Committee on Banking Supervision (BCBS) at the Bank for International Settlements (BIS) sets the global framework. The 2017 finalisation — often called 'Basel IV' — is the most comprehensive revision of bank capital regulation in history, being implemented globally between 2025 and 2030\.

| 📊 CONCEPT BOX: The Basel III Capital Ratio Framework |
| :---- |
| CET1 Ratio \= CET1 Capital / Risk-Weighted Assets ≥ 4.5% (minimum) |
|   CET1 \= Ordinary shares \+ retained earnings \+ OCI − Goodwill/intangibles − Regulatory deductions |
| Tier 1 Ratio \= Tier 1 Capital / RWA ≥ 6.0% |
|   Tier 1 \= CET1 \+ Additional Tier 1 (contingent convertibles / CoCos) |
| Total Capital Ratio \= Total Capital / RWA ≥ 8.0% |
|   Total Capital \= Tier 1 \+ Tier 2 (subordinated debt ≥5-year maturity) |
| Capital Buffers (above minimums): Capital Conservation Buffer 2.5%; Countercyclical Buffer 0–2.5%; G-SIB/D-SIB surcharge 1–3.5% |
| Effective minimum CET1 for a large bank: 4.5% \+ 2.5% CCB \+ 1.0% D-SIB \= 8.0% |
| Leverage Ratio \= Tier 1 / Total Exposure Measure ≥ 3.0% (≥3.25% in UK enhanced framework) |

## **Risk-Weighted Assets — The Denominator**

### **Credit Risk RWA — Standardised Approach**

| Asset Class | Risk Weight |
| :---- | :---- |
| Cash / Central bank reserves | 0% |
| Government bonds (AAA–AA, domestic currency) | 0% |
| Government bonds (A rated) | 20% |
| Banks (A+–A−, short-term) | 50% |
| Corporate (AAA–AA) | 20% |
| Corporate (A+–BBB−) | 75% |
| Retail SME | 75% |
| Residential mortgages LTV ≤50% | 20% |
| Residential mortgages LTV 50–80% | 35% |
| Residential mortgages LTV \>80% | 50% |
| Commercial real estate LTV ≤60% | 60% |
| Consumer finance | 75% |
| Stage 3 / past-due loans | 150% |

### **Basel IV Output Floor — The Most Consequential Change**

Under Basel IV, IRB-calculated credit RWA cannot fall below 72.5% of standardised approach RWA for the same portfolio. This caps the capital benefit that banks have derived from model optimisation. EBA estimates the EU-wide impact at 18–22% increase in total RWA for the average large bank. For banks with heavily optimised IRB models, the impact exceeds 30%.

**Implementation timeline:** EU (CRR3): January 2025 phase-in to January 2030 full implementation. UK (PRA): similar timeline. USA: still under rulemaking as of 2025\.

## **Liquidity Requirements**

| Liquidity Coverage Ratio (LCR): |
| :---- |
|   LCR \= HQLA / Net Cash Outflows (30-day stress) ≥ 100% |
|   HQLA \= High Quality Liquid Assets (central bank reserves, government bonds, qualifying covered bonds) |
|   |
| Net Stable Funding Ratio (NSFR): |
|   NSFR \= Available Stable Funding (ASF) / Required Stable Funding (RSF) ≥ 100% |
|   ASF \= long-term/stable funding × stability factors |
|   RSF \= assets × funding requirement factors |

| PART FOUR: AML/KYC — Financial Crime Compliance |
| :---: |

# **The AML Problem at Scale**

The Financial Action Task Force estimates between 2–5% of global GDP — USD 800 billion to USD 2 trillion annually — is laundered through the financial system. Traditional rules-based AML transaction monitoring systems generate false positive rates of 95–99%: for every genuine suspicious transaction, 99 innocent ones are flagged. At 20 minutes per alert, a bank generating 300,000 alerts per year consumes 100,000 analyst hours — 50+ FTE — on overwhelmingly benign transactions.

| 📊 CONCEPT BOX: The Three Lines of AML Defence |
| :---- |
| FIRST LINE — Customer-Facing Operations: Applies KYC controls at onboarding; monitors customer behaviour against their risk profile; escalates concerns to the second line. |
| Customer Due Diligence (CDD): Verify identity (ID documents); understand nature and purpose of relationship; assess risk rating (Low/Medium/High). |
| Enhanced Due Diligence (EDD): For high-risk customers (PEPs, correspondent banking, high-value complex transactions): beneficial ownership investigation, source of wealth, source of funds. |
| SECOND LINE — Financial Crime Compliance: Designs the AML framework; maintains transaction monitoring systems; reviews alerts; files SARs/STRs; manages AML training programme. |
| THIRD LINE — Internal Audit: Independent assurance over whether first and second line AML controls are operating effectively. AML audit is one of the highest-risk areas of bank internal audit. |

## **Transaction Monitoring — Rules to Machine Learning**

**Rules-based typologies (traditional):** Structuring (multiple transactions just below reporting threshold); round-tripping (funds sent to jurisdiction X and immediately returned); velocity (unusual spike in transaction frequency); geographic (transactions to/from high-risk FATF grey/black-listed jurisdictions).

**Machine learning typologies (modern):** Peer group analysis (customer's transactions deviate significantly from statistically similar peers); network analysis (customer connected through transactions to known high-risk entities); behavioural anomaly detection (autoencoder networks flag transactions with high reconstruction error as novel anomalies).

AI-driven transaction monitoring systems from Featurespace (now Visa), NICE Actimize, and Temenos report **50–70% false positive reduction** in production deployments while maintaining detection rates. This is the single largest operational efficiency opportunity in financial crime compliance.

## **SAR/STR Filing Standards**

When a transaction monitoring alert is reviewed and the analyst concludes there are 'reasonable grounds to suspect' money laundering, a SAR/STR must be filed with the national FIU: FinCEN (USA), NCA (UK), AUSTRAC (Australia), or national FIUs per 6th AML Directive (EU).

**The tipping-off prohibition:** After SAR filing, the bank cannot alert the customer that a SAR has been filed. Breach of the tipping-off prohibition is a criminal offence under UK POCA 2002 s333A and equivalent legislation in all major jurisdictions.

| PART FIVE: The Cowork Banking AI Plugin Architecture |
| :---: |

# **The Banking Plugin Stack**

The base finance plugin from Chapter 17 handles financial statement analysis, DCF modelling, and variance analysis. It does not contain IFRS 9 ECL staging logic, PD/LGD/EAD formulas, Basel III risk weight tables, or AML typology definitions. Without a banking-specific SKILL.md layer, an AI agent asked to assess ECL provisions will apply generic accounting principles rather than IFRS 9's specific staging and measurement requirements.

### **Installation**

| claude plugin install finance@knowledge-work-plugins |
| :---- |
| claude plugin install banking@knowledge-work-plugins |
|   |
| \# The banking plugin adds: |
| \#   /credit-analysis      — Borrower analysis, PD scoring, IFRS 9 ECL |
| \#   /capital-ratio        — Basel capital ratio computation |
| \#   /liquidity-report     — LCR/NSFR calculation |
| \#   /aml-alert            — TM alert review framework |
| \#   /stress-test          — Portfolio stress testing |

### **The Complete Banking SKILL.md Library**

| File | Domain | Governs |
| :---- | :---- | :---- |
| ifrs9-ecl.md | IFRS 9 | Full ECL methodology: PD/LGD/EAD, staging, scenarios |
| ifrs9-staging.md | IFRS 9 | SICR decision tree, staging transitions, interest income rules |
| ifrs9-scenarios.md | IFRS 9 | Macroeconomic scenario framework, PIT adjustment |
| ifrs9-disclosure.md | IFRS 7 | Full IFRS 7 disclosure templates |
| basel-capital.md | Basel III | CET1/T1/TC ratio calculation, MDA, output floor |
| basel-rwa-credit.md | Basel III | SA risk weights by asset class, CCF |
| basel-rwa-market.md | Basel III | FRTB SA and IMA, Expected Shortfall |
| liquidity-lcr.md | Basel III | LCR: HQLA categorisation, run-off rates |
| liquidity-nsfr.md | Basel III | NSFR: ASF and RSF factors |
| stress-testing.md | ICAAP | Stress test methodology, capital depletion path |
| aml-typologies.md | AML | 20+ typologies, alert disposition decision tree |
| aml-sar-drafting.md | AML | SAR format by jurisdiction, quality standards |
| aml-cdd-edd.md | KYC | CDD/EDD frameworks, PEP tiers, source of wealth |
| sanctions-screening.md | Sanctions | OFAC/HMT/EU screening, false positive resolution |
| kyc-risk-rating.md | KYC | Customer risk scoring methodology |

## **Worked Example: Monthly IFRS 9 ECL Workflow**

A Head of Credit Risk at a mid-size UK commercial bank runs the quarterly IFRS 9 provision calculation for a loan book of 45,000 facilities. The complete Cowork workflow:

| \# Step 1 — Stage migration assessment |
| :---- |
| /credit-analysis stage-migration Q3-loan-tape.xlsx |
| \# Agent reads loan tape, applies SICR criteria from ifrs9-staging.md |
| \# Output: Stage migration grid with counts/balances. Review: 20 min vs 3 days manual |
|   |
| \# Step 2 — Macroeconomic scenario update |
| /credit-analysis macro-scenarios Q3-scenarios.xlsx |
| \# Agent maps GDP/unemployment/house price forecasts to PD scalar adjustments |
|   |
| \# Step 3 — ECL calculation |
| /credit-analysis ecl-calculation loan-tape-staged.xlsx scenarios.xlsx |
| \# Agent applies PD × LGD × EAD, weights across scenarios |
|   |
| \# Step 4 — Post-model adjustment review |
| /credit-analysis pma-review existing-pma-register.xlsx |
| \# Agent reviews PMA register: flags PMAs to release, recommends new PMAs |
|   |
| \# Step 5 — Provision movement reconciliation |
| /reconciliation ecl-provision Q2-provision.xlsx Q3-provision.xlsx |
| \# Full provision movement table for auditor review |
|   |
| \# Step 6 — IFRS 7 disclosure drafting |
| /ifrs7-disclosures Q3-ecl-output.xlsx |
| \# Agent drafts complete IFRS 7 disclosures from ECL output |
|   |
| \# Total human review time: \~2 hours. Manual equivalent: 8–12 analyst days. |

| PART SIX: Extensive Cowork Banking AI Exercises |
| :---: |

The following exercises build from first principles (Exercise 1: staging a retail mortgage portfolio) through full production-grade workflows (Exercise 10: complete Board Risk Report). Each exercise is designed for the Cowork platform with the banking SKILL.md library active. Total practice time: approximately 22 hours.

| 🔑 SETUP: Install banking plugin stack, set global Cowork instruction: 'I am a banking risk professional. Before every output, identify the applicable standard and jurisdiction. For IFRS 9: always specify the stage, ECL horizon, and whether income is recognised on gross or net basis. For Basel: specify the approach (SA or IRB) and jurisdiction. Load the relevant banking SKILL.md before proceeding.' |
| :---- |

| ⚡ EXERCISE 1: IFRS 9 Stage Assessment — Retail Mortgage Portfolio |
| :---- |
| **Domain:** IFRS 9 ECL — Staging   |   **Time:** 35 minutes |
| You are Head of Impairment at a UK commercial bank. A retail mortgage portfolio has 8 representative facilities at quarter-end. You must stage each facility and calculate the IFRS 9 provision. |

| ID | Balance £ | DPD | Rating Now | Rating at Origin | LTV | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| A001 | 245,000 | 0 | A | A | 68% | Performing, no change |
| A002 | 380,000 | 0 | BBB | A | 71% | 2-notch rating downgrade |
| A003 | 190,000 | 35 | BB | BBB | 82% | 35 days past due |
| A004 | 520,000 | 0 | A | A | 55% | Recent job loss, notified bank |
| A005 | 155,000 | 95 | CC | BBB | 88% | 95 days past due |
| A006 | 290,000 | 0 | BBB | BBB | 75% | Property value fallen 15% |
| A007 | 410,000 | 0 | A | A | 61% | Performing, rate rise stress |
| A008 | 175,000 | 62 | B | BB | 79% | 62 DPD, hardship notified |

**Step 1 — Stage each facility.** Apply IFRS 9 staging rules from ifrs9-staging.md. For each: (1) Which stage? (2) What specific trigger(s)? (3) Does the 30-day rebuttable presumption apply? If a facility has multiple triggers at different stages, explain which takes precedence. Build the assessment table in /ifrs9/stage-assessment.xlsx.

**Step 2 — Apply ECL parameters.** Parameters: Stage 1 PD₁₂=0.8%; Stage 2 lifetime PD=12%; Stage 3 lifetime PD=55%. LGD=25% for LTV≤80%, 40% for LTV\>80% (downturn stressed). EAD=current balance. Calculate ECL for each facility and total provision.

**Step 3 — Sensitivity analysis.** Severe scenario: house prices fall 20%, increasing LTV for each facility. Recalculate facilities breaching LTV thresholds, update LGD, show provision impact. What is the Base vs. Severe ECL difference as % of portfolio balance?

**Step 4 — Provision movement.** Last quarter: total provision £68,500, all Stage 1\. Build Stage migration table: opening provision, migrations, parameter changes, macro overlay change, closing provision — the table your external auditor reviews first.

**Step 5 — IFRS 7 note draft.** Draft the IFRS 7 disclosure note: Stage distribution table; SICR criteria used; LGD methodology summary; macro scenarios (Base: \+2%, Severe: −20%); sensitivity analysis under 100% Severe scenario weight.

| 🔑 Key Learning: A002 (2-notch downgrade, current) \= Stage 2\. A003 (30 DPD rebuttable presumption) \= Stage 2\. A004 (job loss, qualitative SICR indicator) \= the hardest professional judgment in IFRS 9 — Stage 2 even though no payment has been missed. This is exactly where an AI agent surfacing the issue for human decision is most valuable. |
| :---- |

| ⚡ EXERCISE 2: Corporate ECL Model — PD/LGD/EAD Build |
| :---- |
| **Domain:** IFRS 9 ECL — Full Model   |   **Time:** 55 minutes |
| Credit Risk Modeller building the IFRS 9 ECL model for a GCC corporate loan book: 6 large exposures across Saudi Arabia, UAE, and Bahrain. |

| Borrower | Country | Rating | Drawn $M | Undrawn $M | Collateral | Maturity |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Al-Jazira Steel | KSA | BB+ | 85 | 25 | 40% plant & machinery | 4 years |
| Dubai Towers LLC | UAE | BBB | 165 | 0 | Property LTV 72% | 7 years |
| Gulf Energy Corp | Bahrain | A− | 210 | 50 | Cash \+ parent guarantee | 5 years |
| Riyadh Retail Group | KSA | BB | 45 | 30 | Stock \+ receivables | 3 years |
| Emirates Logistics | UAE | BBB− | 120 | 40 | Fleet, 60% market value | 6 years |
| Manama Finance Co. | Bahrain | BB− | 60 | 20 | Nil | 2 years |

**Steps 1–3:** Map internal ratings to PIT PD (TTC PDs: BB+=1.8%, BBB=0.9%, A−=0.4%, BB=2.8%, BBB−=1.3%, BB−=4.2%). Apply GCC macro adjustment (Base PD multiplier 1.15). Calculate downturn LGD for each collateral type. Calculate EAD applying 75% CCF to all undrawn committed facilities.

**Step 4 — Staging and covenant breach.** All facilities currently Stage 1\. Calculate 12-month ECL. Then: Al-Jazira Steel's Net Debt/EBITDA has risen from 3.2× to 5.1× against a covenant of 4.5× — a SICR trigger. Move Al-Jazira to Stage 2 and calculate lifetime ECL. What is the ECL uplift from Stage 1→2 migration?

**Step 5 — 3-Scenario macro analysis.** Upside (oil $95, GDP 3.5%, PD×0.85, weight 20%), Base (oil $75, GDP 2.2%, PD×1.15, weight 50%), Adverse (oil $50, GDP 0.5%, PD×1.65, weight 30%). Calculate weighted ECL. Prepare macro sensitivity table.

**Step 6 — Risk Committee briefing note.** Portfolio summary, Stage distribution, Al-Jazira covenant breach details and watch designation recommendation, Macro scenario ECL range (upside to adverse), Recommended PMA for GCC geopolitical risk.

| ⚡ EXERCISE 3: Basel III Capital Ratio Calculation — Standardised Approach |
| :---- |
| **Domain:** Basel III Capital Adequacy   |   **Time:** 45 minutes |
| Capital Management at a UK mid-size bank. Loan book at quarter-end. Capital base: CET1 £285M, AT1 £45M, Tier 2 £60M. Calculate all capital ratios and assess headroom. |

| Asset | Balance £M | Asset Class | Rating / LTV |
| :---- | :---- | :---- | :---- |
| UK Government Gilts | 850 | Central government (GBP) | N/A |
| Bank of England reserves | 420 | Central bank | N/A |
| Senior unsecured claims on Barclays | 180 | Bank | A+ |
| Senior unsecured corporate bonds | 240 | Corporate | BBB |
| SME corporate loans (qualifying) | 320 | Retail SME | N/A |
| Residential mortgages | 1,450 | Mortgage | LTV 50–80% |
| Residential mortgages (high LTV) | 185 | Mortgage | LTV \>80% |
| Commercial Real Estate | 380 | CRE | LTV 65% |
| Consumer loans | 210 | Consumer | N/A |
| Stage 3 NPLs | 45 | Past due | \>90 DPD |
| Undrawn revolving corporate lines | 190 | Off-balance-sheet | 40% CCF |

**Step 1:** Apply Basel III SA risk weights per jurisdiction UK PRA/UK CRR. Build: Asset class / Exposure (EAD) / Risk Weight % / RWA £M table.

**Step 2:** Calculate total Credit RWA. Add Operational Risk RWA (Business Indicator £480M, BIA approach, ILM=1.0) and Market Risk RWA (£35M given). Total RWA.

**Step 3:** Calculate CET1, Tier 1, Total Capital, and Leverage Ratios. Compare against PRA minimums: CET1 minimum 8.0% (including buffers), Leverage 3.25%.

**Step 4:** MDA trigger: calculate headroom. Capital Management Dashboard: ratios vs. minimums; RWA composition; sensitivity to mortgage LTV \>80% book doubling; capital consumption by asset class.

| ⚡ EXERCISE 4: LCR and NSFR — Liquidity Adequacy Assessment |
| :---- |
| **Domain:** Basel III Liquidity   |   **Time:** 40 minutes |
| Liquidity risk manager at a regional European bank. Calculate LCR and NSFR, run deposit stress scenario. |

**HQLA:** Central bank reserves £420M; Government bonds (Level 1\) £380M; Covered bonds (Level 2A) £95M; IG corporate bonds (Level 2B) £60M.

**30-day cash outflows:** Retail stable deposits £2,800M × 3%; Retail less-stable £480M × 10%; Wholesale non-financial \<30d £320M × 25%; Wholesale financial \<30d £190M × 100%; Undrawn committed corporate lines £150M × 10%; SPV liquidity facilities £45M × 100%.

**Steps 1–3:** Apply HQLA categorisation with haircuts (Level 2A 15%, Level 2B 25%); apply Level 2 cap (40% max). Calculate net cash outflows applying 75% inflow cap. Calculate LCR. Is it ≥100%?

**Step 4:** NSFR calculation using ASF and RSF factors (ASF: retail deposits 90–95%; wholesale \>1yr 50%; Tier 1 100%. RSF: Level 1 HQLA 0%; mortgages \>1yr 65%; NPLs 85%).

**Step 5:** Stress: retail less-stable run-off rises to 20%. Central bank ELA £200M available. Recalculate LCR. Does the bank need ELA? What are the implications of drawing ELA for Pillar 2 guidance?

| ⚡ EXERCISE 5: ICAAP Stress Test — Capital Under Macroeconomic Stress |
| :---- |
| **Domain:** ICAAP / Stress Testing   |   **Time:** 50 minutes |
| Preparing the bank's ICAAP submission. Starting CET1: 12.8%. BoE 2025 ACS severe scenario: GDP −4.2%, unemployment 8.5%, house prices −31%, commercial property −40%. |

**Step 1:** Apply BoE ACS stress: Stage 2 migration rate 8%→22%; Stage 3 migration rate 2%→6.5% of Stage 1, 12%→28% of Stage 2; LGD mortgages 25%→40%; LGD CRE 35%→58%. Calculate stressed ECL over 3-year horizon, year-by-year.

**Step 2:** NII impact of SONIA \+250bp (Year 1), −150bp (Year 2). Bank is asset-sensitive: Year 1 NII \+£28M, Year 2 NII −£15M, Year 3 stabilises. Build NII bridge.

**Step 3:** RWA inflation: Stage 3 NPLs triple (150% risk weight, credit RWA \+12%); market risk RWA \+40%; operational risk RWA \+5%. Recalculate stressed RWA each year.

**Step 4:** Capital depletion path: opening CET1 capital → \+Net Income (NII minus stressed credit losses minus opex) → −Dividends (suspended Year 1–2) → closing CET1 capital → ÷ stressed RWA \= CET1 ratio each year.

**Steps 5–6:** Distance to trigger analysis. ICAAP Capital Adequacy section: base case forecast, stress test depletion path, management actions (asset sales, dividend suspension, AT1 conversion), capital buffer adequacy conclusion.

| ⚡ EXERCISE 6: AML Alert Review and SAR Drafting |
| :---- |
| **Domain:** AML/KYC — Transaction Monitoring   |   **Time:** 45 minutes |
| AML analyst. Three transaction monitoring alerts generated. Review each and determine whether to file a SAR with the NCA. |

**Alert 1 — Cash structuring:** Mohammed Al-Rashid, sole trader, taxi business, Birmingham. Alert: 8 cash deposits over 14 days each between £8,800–£9,500 (none exceeding £10,000). Account profile: opened 3 years ago, typical monthly cash £15,000.

**Alert 2 — Unusual international wires:** Meridian Trading Ltd. Received 12 incoming SWIFT wires from UAE, Hong Kong, Cyprus totalling £847,000 over 30 days. Same-day outgoing wires to 4 UK companies totalling £812,000. Business description: 'Import/export of manufactured goods.' No invoices on file.

**Alert 3 — PEP transaction:** Amara Diallo, Nigerian national. PEP (sister is current Nigerian state minister). Alert: £320,000 wire received from Nigerian law firm, described as 'legal settlement.' Typical balance £25,000; monthly income £8,500.

**Steps 1–3:** Analyse each alert against AML typologies (aml-typologies SKILL.md). Apply UK 'reasonable grounds to suspect' standard (POCA 2002). Identify typologies, innocent explanations considered and why eliminated. Recommend: close / investigate further / SAR.

**Step 4:** Alert 2 escalated to MLRO and SAR decision made to file. Draft the SAR narrative to NCA standards: account details, suspicious activity description, typology identification, customer explanation and why it was insufficient, information gaps.

**Step 5:** Tipping-off risk. Draft guidance for the relationship manager on permissible vs. impermissible actions after the SAR has been filed. POCA 2002 s333A consequences.

| 🔑 Key Learning: A well-drafted SAR is the primary document between a bank and the NCA. Bad SAR narratives (too vague, too conclusory, missing key facts) are as harmful as no SAR at all. The AI agent produces a first draft in under 60 seconds that an analyst reviews and refines — reducing SAR drafting from 45 minutes to 10 minutes. The analyst's review is non-negotiable: the 'reasonable grounds to suspect' judgment must be made by a qualified professional. |
| :---- |

| ⚡ EXERCISE 7: KYC / Customer Risk Rating — Corporate Onboarding |
| :---- |
| **Domain:** KYC / CDD / EDD   |   **Time:** 35 minutes |
| KYC analyst onboarding Azura Power Holdings Ltd: UK-registered holding company owning power generation assets in Nigeria, Kenya, and Zambia. 100% owned by Helio Capital Partners (Cayman Islands PE fund). One UBO is a former Nigerian minister (left office 18 months ago). |

**Step 1 — Risk rating.** Score: customer type (infrastructure holding company); jurisdiction risk (Nigeria, Kenya, Zambia — FATF grey list status); PEP exposure (former minister — UK guidance minimum 12-month look-back, longer for senior officials); beneficial ownership complexity (Cayman structure); product type (USD correspondent banking). Calculate overall risk rating.

**Step 2 — EDD requirements.** Documents needed for former minister UBO; source of wealth documentation for PE fund structure; whether all 4 UBOs need individual verification; ongoing monitoring frequency.

**Step 3 — Beneficial ownership.** Cayman Islands structure does not publicly disclose register. Under UK AML Regulations (5MLD): what is the bank's obligation when documents are in non-cooperative jurisdictions? Can the bank rely on certified copies? If Helio Capital refuses UBO documentation, can the account open?

**Step 4 — KYC client profile document** for Azura Power Holdings: business description, ownership structure, risk rating justification, EDD measures applied, source of wealth conclusion, ongoing monitoring requirements, approval level required.

**Step 5 — Ongoing monitoring trigger.** Six months after opening, adverse media flags that the former minister UBO has been charged with corruption in Nigeria. Bank's obligations: immediate operational response; SAR consideration; account continuation vs. closure; ongoing transaction processing during the review.

| ⚡ EXERCISE 8: Sanctions Screening — OFAC, EU, and HMT |
| :---- |
| **Domain:** Sanctions Compliance   |   **Time:** 40 minutes |
| Compliance officer at a UK bank's trade finance desk. Three payments pending screening. |

**Payment 1:** Beneficiary: 'Ali Hassan Mohammad Al-Farsi,' UAE account. Payment for steel reinforcement rods, invoiced by Gulf Steel LLC (Dubai). Amount: USD 285,000. How do you handle partial name matches? What is the false-positive resolution process?

**Payment 2:** Originator: Zermatt Holdings AG (Switzerland). Beneficiary: Rostec Engineering Components Ltd (UK company, aerospace supply). Amount: EUR 1,200,000. Note: the name 'Rostec' — is this related to Rostec Corporation (Russian state defence, subject to EU and UK sanctions since 2022)? How does the bank assess whether a UK-incorporated company is an affiliate of a sanctioned entity?

**Payment 3:** Correspondent banking. Bosphorus Trade Finance (Istanbul) → Noor Al-Arab Import Export (Cairo). Amount: USD 45,000. SWIFT data shows Bosphorus connections to Iranian entities. As correspondent bank, what level of due diligence on the respondent? Iran is subject to comprehensive OFAC, EU, and UK sanctions — does this create grounds to block?

**Step 4:** Payment 2 investigation reveals Rostec Engineering Components Ltd is a UK subsidiary set up by individuals linked to sanctioned Rostec Corporation. Block payment. OFSI reporting obligation (UK HMT). Timeline for reporting. Consequences of having previously processed payments to this entity before beneficial ownership link was discovered.

**Step 5:** Draft the sanctions escalation memo to the Sanctions Officer and MLRO: case summary, analysis, beneficial ownership findings, recommended action, required regulatory notifications, timeline.

| ⚡ EXERCISE 9: IFRS 9 × Basel Interaction — How ECL Affects Capital |
| :---- |
| **Domain:** Cross-Domain: IFRS 9 \+ Basel III   |   **Time:** 50 minutes |
| The most important interaction in bank finance: how IFRS 9 ECL provisions affect Basel III capital ratios. Under Basel III, Stage 1/2 ECL vs. regulatory EL determines IRB shortfall/excess affecting T2 capital. |

**Step 1 — ECL to capital bridge.** Provision data: Stage 1 ECL £12.5M; Stage 2 ECL £38.2M; Stage 3 ECL £24.8M. Regulatory Expected Loss (IRB) \= £42.0M. Calculate IRB shortfall or excess. If shortfall: deduct 50% from CET1 and 50% from T2. If excess: add to T2 capped at 0.6% × credit RWA (£2.8B).

**Step 2 — Stage migration capital impact.** £150M of Stage 1 loans migrate to Stage 2\. 12-month ECL on these £1.2M; lifetime ECL £18.5M. Additional ECL charge: £17.3M. Impact on P\&L, on CET1 retained earnings, on RWA (unchanged — Stage 2 is still performing). Net CET1 ratio impact in basis points.

**Step 3 — Adverse scenario provision.** Total ECL increases from £75.5M to £145.8M (additional charge £70.3M pre-tax). Tax rate 25%. Additional Stage 3 migration (£35M NPLs at 150% risk weight \= £52.5M additional RWA). Combined impact on CET1 ratio. Is bank above combined buffer requirement (8.0%)? MDA implication?

**Step 4 — IFRS 9 transitional arrangements.** Day 1 ECL excess over IAS 39 was £68M. Now in Year 4 of 5-year transition (50% add-back). Transitional vs. fully loaded CET1 ratio. Why do investors always look at fully loaded? What happens in Years 5 and 6 when transition ends?

**Step 5:** Integrated capital management report for quarterly investor presentation: ECL by stage, Stage migration analysis, Capital ratios (transitional and fully loaded), IFRS 9-Basel interaction summary, sensitivity to adverse scenario.

| 🔑 Key Learning: When a bank announces a large IFRS 9 provision charge, market analysts ask: 'What is the CET1 impact?' The answer is NOT just provision ÷ RWA. It is provision × (1 − tax rate) ÷ RWA — more modest because tax provides partial offset. Understanding this interaction is the difference between an AI tool that alarms investors and one that provides accurate context. |
| :---- |

| ⚡ EXERCISE 10: CAPSTONE: Full Bank Board Risk Report — IFRS 9 \+ Basel \+ Liquidity \+ AML |
| :---- |
| **Domain:** Integrated Banking Risk   |   **Time:** 75 minutes |
| You are Chief Risk Officer of Northern Regional Bank. Prepare the quarterly Board Risk Report covering all three regulatory pillars. |

**Bank data:** Loan book £4.2B. ECL provisions £124M (Stage 1 £18M, Stage 2 £62M, Stage 3 £44M). CET1 11.2% transitional / 10.8% fully loaded. Leverage 4.6%. LCR 142%. NSFR 108%. AML: 847 TM alerts; 12 SARs filed; 2 'matters requiring attention' from external AML assessment.

**IFRS 9 macro overlays:** Base (50%): GDP \+1.2%, unemployment 4.8%. Adverse (35%): GDP −0.8%, unemployment 6.5%. Severe (15%): GDP −3.0%, unemployment 9.1%.

**Key risk flags:** CRE book £680M with 14% in Stage 2 (office vacancy rising); consumer book showing early DPD 1–30 stress; AML programme external assessment flagged 2 MRAs.

**Step 1:** Build full ECL provision movement table, stage distribution, weighted ECL vs. Base, CRE concentration analysis.

**Step 2:** Capital adequacy dashboard: ratios vs. minimums vs. targets; RWA composition; headroom to MDA; sensitivity to Adverse scenario.

**Step 3:** Liquidity position: LCR/NSFR waterfall charts; HQLA composition; stress assumptions; distance to 100% minimum.

**Step 4:** AML programme status dashboard: alert volume/disposition; SAR filing rate; false positive rate; MRA status; CDD refresh completion.

**Step 5 — Integrated stress.** Run Adverse macro \+ hypothetical AML enforcement action (£50M fine, based on 2 MRAs). IFRS 9 ECL under Adverse; capital impact (ECL charge \+ £50M opRisk fine); LCR impact (assume 2% retail and 5% wholesale deposit outflows in 30-day window). Is the bank solvent, above minimum capital, and above minimum LCR under combined stress?

**Step 6:** Build the Board Risk Report in PowerPoint (10 slides): Key Risk Metrics Summary; IFRS 9 ECL; Credit Risk; Capital Adequacy; Liquidity; Market Risk; Operational Risk; Financial Crime; Integrated Stress Test; Risk Appetite RAG status.

| 🔑 Key Learning: The integrated stress scenario is the professional insight that separates bank risk management from silo-based compliance. An AML fine is not just an operational risk event — it is also a liquidity event (deposit outflows from reputational damage) and a capital event (operational RWA increases). The CRO who presents only the capital impact of the fine, without modelling the liquidity impact, is giving the board an incomplete picture. |
| :---- |

| ⚡ EXERCISE 11: Banking SKILL.md Library Build — The Full Domain Agent |
| :---- |
| **Domain:** Agent Building   |   **Time:** 90 minutes |
| Build the complete banking SKILL.md library and deploy as an integrated, jurisdiction-aware banking domain agent. |

**Step 1:** Build ifrs9-ecl.md using Method A (expert interview): (a) Most common IFRS 9 ECL methodology errors in practice; (b) SICR indicators models often miss; (c) Macro overlay assumption that has caused most auditor disagreement. Convert to SKILL.md instructions. Ask Claude to review for gaps.

**Step 2:** Build ifrs9-staging.md: Encode SICR decision tree (Stage 3 first, then Stage 2 triggers, then Stage 1); rebuttable presumption rules; qualitative SICR triggers; stage cure conditions; gross vs. net interest income switch.

**Step 3:** Build basel-rwa-credit.md: Full SA risk weight table; CCF factors; LTV bands for mortgages; output floor check (72.5% of SA for IRB banks); MDA payout restriction table.

**Step 4:** Build aml-typologies.md: Top 20 AML typologies with detection logic; alert disposition decision tree (Level 1 quick close through Level 4 MLRO SAR decision); SAR quality checklist; tipping-off prohibition rules.

**Step 5:** Set up banking recurring scheduled tasks:

| /schedule ifrs9-daily-staging-monitor |
| :---- |
|   — Daily: read transactions, flag SICR triggers, produce morning watch-list additions |
|   |
| /schedule ifrs9-quarterly-ecl |
|   — Last day of each quarter: full ECL calculation, provision movement reconciliation, |
|     IFRS 7 disclosure draft |
|   |
| /schedule capital-ratio-daily |
|   — Daily: calculate CET1/T1/TC ratios, flag if approaching management buffer |
|   |
| /schedule lcr-daily |
|   — Daily: calculate LCR, flag if LCR falls below 115% management buffer |
|   |
| /schedule aml-alert-prioritisation |
|   — Daily: read new TM alerts, prioritise by risk score, assign to analyst queue |
|   |
| /schedule sanctions-batch-screen |
|   — Daily: screen new customers/counterparties against updated sanctions lists |

**Step 6 — Test the library:** Run 11 test queries (IFRS 9 staging, ECL calculation, RWA calculation, LCR, ICAAP, AML alert, SAR draft, sanctions screen, EDD, capital-ECL interaction, integrated stress) confirming the router loads the correct SKILL.md for each.

## **Exercise Summary**

| \# | Domain | Jurisdiction | Key SKILL.md Files | Time |
| :---- | :---- | :---- | :---- | :---- |
| 1 | IFRS 9 Staging — Retail | UK | ifrs9-staging.md | 35 min |
| 2 | ECL Model Build — GCC Corporate | GCC/UK | ifrs9-ecl.md \+ gcc overlay | 55 min |
| 3 | Basel III RWA — SA Approach | UK (PRA/CRR) | basel-rwa-credit.md \+ uk-pra.md | 45 min |
| 4 | LCR and NSFR | EU/UK | liquidity-lcr.md \+ liquidity-nsfr.md | 40 min |
| 5 | ICAAP Stress Test | UK (BoE ACS) | stress-testing.md \+ uk-pra.md | 50 min |
| 6 | AML Alert Review \+ SAR | UK (NCA/POCA) | aml-typologies.md \+ aml-sar-drafting.md | 45 min |
| 7 | KYC / EDD — Corporate | UK (5MLD) | aml-cdd-edd.md \+ kyc-risk-rating.md | 35 min |
| 8 | Sanctions Screening | UK/EU/OFAC | sanctions-screening.md | 40 min |
| 9 | IFRS 9 × Basel Interaction | UK | ifrs9-ecl.md \+ basel-capital.md | 50 min |
| 10 | Full Board Risk Report (Capstone) | UK | All banking SKILL.md files | 75 min |
| 11 | Banking SKILL.md Library Build | Global | All 15 banking SKILL.md files | 90 min |

**Total practice time: approximately 22 hours.**

| PART SEVEN: Bank Reconciliation Statements |
| :---: |

# **Bank Reconciliation in the AI-Native Bank**

Bank reconciliation is one of the oldest controls in financial accounting — and one of the most labour-intensive. A large commercial bank reconciles thousands of accounts daily: nostro accounts with correspondent banks, suspense accounts, settlement accounts, treasury accounts, and the general ledger control accounts that aggregate all of them. The total volume of reconciliation items across a major bank's operations can exceed one million items per month.

For banking practitioners, reconciliation failures carry consequences far beyond an accounting inconvenience. An unreconciled item in a nostro account may signal a failed payment, a duplicate, a fraud, or a systems error. An aged unreconciled item in a settlement account may indicate a trade that has not settled — a capital adequacy issue. A difference between the IFRS 9 provision in the risk system and the provision in the general ledger means the published financial statements do not agree with the regulatory capital calculation. In each case the reconciliation is not an administrative task: it is a financial reporting control and, ultimately, a safety-and-soundness control.

| *The reconciliation between the risk system and the general ledger is the single most important control in the bank's financial close process. If those two systems disagree at reporting date, the capital ratio reported to the regulator and the provision disclosed to investors are telling different stories.* |
| :---- |

| 📊 CONCEPT BOX: The Five Categories of Bank Reconciliation |
| :---- |
| 1\. NOSTRO RECONCILIATION — The bank's own records of its correspondent and foreign currency accounts (nostro accounts) reconciled against statements received from the correspondent bank. Every debit and credit must match. Unmatched items ('breaks') may be timing differences, failed payments, or fraud. |
| 2\. SUSPENSE ACCOUNT RECONCILIATION — Temporary holding accounts used when a transaction cannot be immediately posted to its final account. Suspense balances must be cleared within defined SLAs. Aged suspense items are a regulatory red flag and an audit finding. |
| 3\. INTER-COMPANY / INTER-BRANCH RECONCILIATION — Transactions between the bank's own entities, branches, and cost centres must net to zero across the group. Unreconciled inter-entity balances inflate both sides of the consolidated balance sheet. |
| 4\. SECURITIES AND TRADE SETTLEMENT RECONCILIATION — Positions in bonds, equities, and derivatives must reconcile between front-office trading systems, back-office settlement systems, custodian records, and the general ledger. Settlement fails are monitored by CCPs and reported to regulators. |
| 5\. REGULATORY RECONCILIATION — Capital ratios, LCR, NSFR, and large exposure reports must tie back to the financial statements and to source risk systems. A capital ratio in COREP that cannot be traced to the balance sheet is a regulatory reporting failure. |

## **Nostro Reconciliation — How Banks Settle With Each Other**

When Bank A in London sends a USD payment to Bank B in New York, the funds do not physically move. Both banks maintain accounts at a common US correspondent (typically JPMorgan Chase, Citibank, or Bank of New York Mellon with Federal Reserve access). Bank A's USD account at the correspondent is its nostro account — from the Italian 'nostro conto,' meaning 'our account.' Bank A maintains an internal mirror of what that account should contain; the correspondent bank holds the actual account and issues statements.

The reconciliation task is to match every item on the correspondent's statement against the corresponding entry in Bank A's internal mirror. Matched items are cleared. Items appearing on the statement with no mirror entry, or mirror entries with no statement item, are 'breaks' requiring investigation.

### **Nostro Break Classification**

| Break Type | Typical Cause | Required Action |
| :---- | :---- | :---- |
| Statement credit / no mirror | Inbound payment not yet booked; unexpected receipt | Identify beneficiary; post to correct account or suspense |
| Statement debit / no mirror | Correspondent fee not anticipated; debit not expected | Verify charge; post to bank charges or dispute with correspondent |
| Mirror item / no statement | Payment sent but not yet settled; payment rejected | Monitor for settlement; query correspondent if aged \> 1 day |
| Amount mismatch | Correspondent deducted charges; FX rounding; partial payment | Quantify difference; post adjustment; query if material |
| Duplicate entry | Systems processing error; double instruction | Reverse duplicate; investigate root cause; operational risk event |
| Value date difference | Different settlement convention; payment delayed | Post value date correction; investigate if systematic |

### **Nostro Ageing SLA**

* **0–2 days:** Normal settlement window — no escalation required, monitor for matching

* **3–5 days:** Notify account owner — formal investigation required; query to correspondent if no mirror explanation

* **6–15 days:** Escalate to Head of Correspondent Banking Operations; issue SWIFT query to correspondent bank

* **\> 15 days:** CFO / Finance Controller alert; P\&L provision assessment; potential regulatory notification if material

* **\> 30 days:** Write-off assessment; operational risk event logging; consider fraud escalation if pattern indicates

| 🔑 REGULATORY SIGNIFICANCE: The PRA, ECB, and FCA include nostro aged items as a key operational risk indicator. A pattern of large aged breaks signals weak payments operations controls and may trigger a Section 166 Skilled Persons Review (UK) or equivalent supervisory enquiry. Major banks monitor nostro break volumes and ageing as a KRI (Key Risk Indicator) reported to the Board Risk Committee. |
| :---- |

## **The GL-to-Risk-System Reconciliation — The Critical Control**

A commercial bank operates three layers of interconnected systems. The source systems (loan origination, trading, treasury) record transactions and own the data. The risk and analytics systems (IFRS 9 ECL model, Basel RWA engine, liquidity management system) read from source systems, apply regulatory models, and produce regulatory outputs — but do not post directly to accounting. The general ledger is the authoritative accounting record from which financial statements are produced.

These layers must agree at every reporting date. A discrepancy between the IFRS 9 provision in the risk system and the provision balance in the GL is not a rounding difference — it means the committee-approved ECL figure and the audited financial statement are at odds. This is a material financial reporting failure.

### **Common GL-to-Risk-System Breaks**

| Break | Root Cause | Statement Impact |
| :---- | :---- | :---- |
| ECL provision: risk system ≠ GL | Manual GL journal posted without updating risk system; timing cut-off | Loan net carrying amount overstated or understated |
| RWA: Basel engine ≠ COREP return | New facilities booked after RWA run; manual override unreconciled | Capital ratio misstated in regulatory submission |
| Interest income: source system ≠ GL accrual | Stage 3 gross/net presentation error; accrual timing mismatch | Interest income overstated; Stage 3 accounting error |
| Gross loan balance: source ≠ GL | Write-off in source not yet posted to GL; FX revaluation timing | Loan assets overstated; provision coverage ratio wrong |
| Fair value: front office ≠ GL | End-of-day pricing difference; model update not reflected | Trading P\&L and capital resources both misstated |

## **The IFRS 9 Provision Four-Way Reconciliation**

The IFRS 9 provision reconciliation is the most important accounting control in the bank's quarterly financial close. It requires four-way agreement across four distinct data populations:

* **Tier 1 — ECL model output:** The provision calculated by the PD × LGD × EAD model by stage and segment, as approved by the IFRS 9 Governance Committee. This is the source of truth.

* **Tier 2 — Risk system total:** The sum of all individual facility-level ECL amounts held in the credit risk management system. Must equal Tier 1 after upload.

* **Tier 3 — GL provision account:** The balance on the IFRS 9 provision / allowance account in the general ledger, reflecting all journal entries posted during the period. Must equal Tier 2\.

* **Tier 4 — Published disclosure:** The net loan balance and stage distribution table in the IFRS 7 notes to the financial statements, extracted from the GL. Must equal Tier 3\.

Any difference at any tier must be resolved before the accounts are signed off. Common causes: a write-off processed in the source system before the GL journal is posted (Tier 2 vs Tier 3 break); a PMA approved by the governance committee but the GL journal input contains a data entry error (Tier 2 vs Tier 3); the disclosure note drafted from an earlier version of the risk system extract (Tier 3 vs Tier 4).

### **The Provision Movement Tie-Out (P\&L Reconciliation)**

Beyond the balance sheet, the income statement charge must also reconcile:

| Opening ECL provision balance (GL)                    £M |
| :---- |
| \+ Impairment charge for the period (income statement) £M |
| \- Write-offs during the period                        (£M) |
| \+ Recoveries on previously written-off amounts        £M |
| \+/- Foreign exchange translation                      £M |
| \= Closing ECL provision balance (GL)                  £M |
|   |
| This MUST equal: Closing ECL from the risk model      £M |
|   |
| Any unexplained difference \= reconciling item         BLOCK CLOSE until resolved |

## **Suspense Account Control**

Suspense accounts are temporary holding accounts: a payment received where the beneficiary is unidentified; a transaction posted pending authorisation; an inter-system timing difference awaiting resolution. In a major bank, 50,000+ individual suspense items may be open at any time. Left unmanaged, suspense balances grow into a control failure that external auditors and regulators will identify as a material weakness.

### **The Control Framework**

* **Ownership:** Every suspense account must have a named owner responsible for clearing items. Unowned suspense accounts are an immediate control finding.

* **Ageing SLA:** All items must be cleared within defined periods (typically: payment suspense 1 day; trade suspense 5 days; inter-company 30 days maximum).

* **Month-end zero-balance requirement:** All suspense accounts should carry zero or near-zero balances at reporting dates. Material balances at month-end are an audit finding.

* **P\&L impact:** Items that cannot be matched and allocated within the maximum SLA must be written off to P\&L — an operational risk loss event that must be logged and reported.

## **How Cowork Automates Bank Reconciliation**

The Cowork banking agent transforms reconciliation from a batch manual process into a continuously monitored, AI-assisted workflow across three levels:

### **Level 1: Automated Matching**

The agent reads two data sources (internal records and external statement) and applies a matching hierarchy in sequence:

* **Exact match** — same amount, value date, and reference → auto-cleared instantly

* **Fuzzy match** — same amount and date, reference partially matches (truncation, formatting) → auto-cleared with exception note

* **Amount-and-date match** — same amount and date within 2-day tolerance, no reference → auto-cleared with timing notation

* **Partial sum pool** — multiple small items aggregate to one large item (common in retail settlement) → grouped for human confirmation

* **Unmatched residual** — no rule satisfied → queued with AI-generated investigation hypothesis

| \# Cowork: Daily nostro reconciliation |
| :---- |
| /reconciliation nostro-match \\ |
|   \--internal  nostro-mirror-USD-20250331.xlsx \\ |
|   \--external  citi-statement-USD-20250331.csv \\ |
|   \--tolerance-days 2 \\ |
|   \--output    nostro-recon-20250331.xlsx |
|   |
| \# Output sheets: |
| \# 1\. Matched (auto-cleared)    — no action needed |
| \# 2\. Fuzzy matched             — confirm and clear |
| \# 3\. Unmatched breaks          — investigate (with AI hypothesis per item) |
| \# 4\. Ageing dashboard          — all open items by age band |
| \# 5\. Reconciliation certificate — ready for sign-off |

### **Level 2: Exception Intelligence**

For each unmatched item the agent generates an investigation hypothesis, not a blank queue entry:

* **Mirror item / no statement (2 days old):** 'Payment USD 245,000 to XYZ Corp sent 29-Mar. No SWIFT confirmation received. Likely cause: correspondent processing delay (70%). Possible rejection (22%). Recommended action: check SWIFT gpi tracker; if no trace by 09:00 issue MT199 query to Citibank.'

* **Statement credit / no mirror:** 'USD 425,000 credited by Citibank ref INWARD/93421. No matching expected receipt in mirror. Likely cause: unidentified inbound (65%). Possible duplicate credit (25%). Recommended action: move to Payment Suspense; search for expected USD 425K inbound; contact correspondent for remitter details.'

* **Amount mismatch (USD 125 difference):** 'Mirror USD 500,000; statement USD 499,875. Reference matches. Likely cause: correspondent bank charge deducted (90%). Recommended action: post USD 125 debit to bank charges account; close break.'

This layer — trained on the bank's own historical break patterns encoded in the SKILL.md — eliminates the blank-page problem for reconciliation analysts. Resolution time per break typically falls 40–60%.

### **Level 3: Continuous Reconciliation**

| \# Scheduled Cowork reconciliation tasks |
| :---- |
|   |
| /schedule nostro-intraday |
|   frequency: every 2 hours during business day |
|   action:    match latest mirror updates vs SWIFT MT940 confirmations |
|   alert:     new break \> USD 100,000 → notify Operations desk immediately |
|   |
| /schedule gl-risk-daily |
|   frequency: daily at 07:00 |
|   action:    compare IFRS 9 provision (risk system) vs GL provision account |
|              compare RWA (Basel engine) vs COREP reporting system |
|   alert:     any difference \> GBP 500,000 → notify Finance Controller |
|   output:    daily reconciliation certificate for Controller sign-off |
|   |
| /schedule suspense-ageing |
|   frequency: daily at 08:00 |
|   action:    read all suspense balances; apply ageing SLA rules |
|   alerts:    \> 5 days  → email account owner |
|              \> 15 days → email Head of Operations |
|              \> 30 days → email CFO; flag as write-off candidate |
|   output:    suspense dashboard for morning operations meeting |

## **The bank-reconciliation SKILL.md**

Add this file to your banking skills library at: products/bank-reconciliation.md

| \--- |
| :---- |
| name: bank-reconciliation |
| version: 1.0 |
| description: \> |
|   Activate for: bank reconciliation, nostro reconciliation, suspense account, |
|   GL reconciliation, provision reconciliation, inter-company reconciliation, |
|   nostro break, unmatched item, reconciling item, MT940, MT950, aged items, |
|   reconciliation certificate, suspense clearing, four-way reconciliation. |
| author: Panaversity — The AI Agent Factory |
| \--- |
|   |
| \#\# MATCHING HIERARCHY — APPLY IN ORDER |
| Step 1: EXACT MATCH     — amount \+ value date \+ reference → auto-clear |
| Step 2: FUZZY MATCH     — amount \+ date \+ partial reference → auto-clear with note |
| Step 3: DATE TOLERANCE  — amount \+ date within ±2 days, no reference → auto-clear |
| Step 4: SUM POOL        — multiple items aggregate to one → group for confirmation |
| Step 5: UNMATCHED       — generate investigation hypothesis; queue for analyst |
|   |
| \#\# BREAK CLASSIFICATION |
| Mirror only (no statement) : timing difference OR payment failure |
| Statement only (no mirror) : unbooked receipt OR unexpected debit |
| Amount difference          : fee deduction OR FX rounding OR partial payment |
| Duplicate                  : systems error — reverse and investigate |
|   |
| \#\# AGEING SLA ENFORCEMENT |
| 0–2 days   : auto-match window — no escalation |
| 3–5 days   : notify account owner — investigation required |
| 6–15 days  : escalate to Head of Operations — formal counterparty query |
| \>15 days   : CFO alert — P\&L provision assessment |
| \>30 days   : write-off assessment — operational risk event log |
|   |
| \#\# IFRS 9 FOUR-WAY RECONCILIATION — MANDATORY CHECKS |
| Tier 1 \= Tier 2 : ECL model output \= Risk system facility sum |
| Tier 2 \= Tier 3 : Risk system total \= GL provision account balance |
| Tier 3 \= Tier 4 : GL provision \= Financial statement disclosure |
| P\&L tie-out     : Opening \+ Charge − Write-offs \+/- FX \= Closing |
| ANY DIFFERENCE ABOVE MATERIALITY THRESHOLD → BLOCK CLOSE |
|   |
| \#\# NEVER DO THESE |
| \- NEVER leave suspense items \> 30 days without documented escalation \+ write-off assessment |
| \- NEVER allow GL provision to differ from risk system at reporting date |
| \- NEVER post manual journals to provision accounts without IFRS 9 Committee approval |
| \- NEVER clear a nostro break by forcing a match without documented rationale |
| \- NEVER produce a reconciliation certificate without all break amounts identified |

## **Bank Reconciliation Exercises**

| ⚡ EXERCISE 12: Nostro Reconciliation — USD Correspondent Account |
| :---- |
| **Domain:** Bank Reconciliation — Nostro   |   **Time:** 35 minutes |
| You are Head of Nostro Reconciliation at a UK bank. Reconcile the bank's USD nostro account with Citibank New York for the week ending 31 March 2025\. Identify all breaks, classify them, and produce the reconciliation certificate. |

**Internal nostro mirror (bank's own records, USD):**

| Date | Reference | Description | Dr/Cr | Amount USD |
| :---- | :---- | :---- | :---- | :---- |
| 28-Mar | TXN-44521 | Payment to Morgan Stanley | Dr | 1,250,000 |
| 28-Mar | TXN-44522 | Receipt from Deutsche Bank | Cr | 875,000 |
| 29-Mar | TXN-44601 | Payment to Goldman Sachs | Dr | 2,100,000 |
| 29-Mar | TXN-44602 | Receipt from BNP Paribas | Cr | 3,200,000 |
| 31-Mar | TXN-44701 | Payment to HSBC NY | Dr | 500,000 |
| 31-Mar | TXN-44702 | Expected receipt from Barclays | Cr | 1,800,000 |
| 31-Mar | TXN-44703 | Payment to Wells Fargo | Dr | 750,000 |

**Citibank nostro statement (USD):**

| Value Date | Reference | Description | Dr/Cr | Amount USD |
| :---- | :---- | :---- | :---- | :---- |
| 28-Mar | TXN-44521 | Morgan Stanley | Dr | 1,250,000 |
| 28-Mar | TXN-44522 | Deutsche Bank | Cr | 875,000 |
| 29-Mar | TXN-44601 | Goldman Sachs | Dr | 2,100,000 |
| 29-Mar | TXN-44602 | BNP Paribas | Cr | 3,200,000 |
| 31-Mar | TXN-44701 | HSBC | Dr | 500,000 |
| 31-Mar | — | Citibank account maintenance fee | Dr | 1,250 |
| 31-Mar | TXN-44703 | Wells Fargo | Dr | 750,000 |
| 31-Mar | — | Unknown credit — ref INWARD/93421 | Cr | 425,000 |

**Step 1 — Run the matching exercise.** Prompt: 'Apply the bank-reconciliation SKILL.md matching hierarchy. Match each mirror entry against each statement entry. Show: (1) Matched items auto-cleared; (2) Unmatched mirror items; (3) Unmatched statement items. Use reference as primary key, amount as secondary.'

**Step 2 — Classify breaks.** For each unmatched item apply the break classification rules. TXN-44702 in mirror with no statement match — what type? What action? Citibank maintenance fee with no mirror — what type? Unknown credit INWARD/93421 — what type? What investigation steps?

**Step 3 — Ageing assessment.** Today is 2 April. Apply the SLA ageing rules. Which breaks require immediate escalation? Which are within the normal settlement window?

**Step 4 — Investigation hypotheses.** Prompt: 'For each unmatched item generate an investigation hypothesis: most likely cause, probability estimate, and recommended action. Format as an operations investigation memo.'

**Step 5 — Reconciliation certificate.** Draft the daily nostro reconciliation certificate: opening balance, matched total, unmatched breaks by type and amount, closing reconciled balance, sign-off authority level for each break given the amounts involved.

| 🔑 Key Learning: TXN-44702 (Barclays receipt in mirror, not on statement) is 2 days old on 2 April — within the settlement window, monitor only. INWARD/93421 (USD 425,000 on statement, nothing in mirror) is urgent: funds have arrived but cannot be identified. Must be moved to Payment Suspense within 24 hours. Allowing an unidentified credit to sit in the nostro mirror — rather than suspense — means it is not subject to the suspense ageing controls and can disappear from visibility. |
| :---- |

| ⚡ EXERCISE 13: IFRS 9 Provision Reconciliation — Quarter-End Four-Way Tie |
| :---- |
| **Domain:** Bank Reconciliation — IFRS 9 Provisions   |   **Time:** 40 minutes |
| You are Financial Controller. It is 31 March quarter-end. Perform the four-way IFRS 9 provision reconciliation and resolve all breaks before accounts can be signed off. |

**Data from four sources (£M):**

| Source | Stage 1 | Stage 2 | Stage 3 | Total ECL |
| :---- | :---- | :---- | :---- | :---- |
| ECL model output (Risk Committee approved) | 18.2 | 62.4 | 44.1 | 124.7 |
| Risk system facility-level sum | 18.2 | 62.4 | 43.6 | 124.2 |
| GL provision account balance | 18.2 | 61.9 | 43.6 | 123.7 |
| Financial statement disclosure note | 18.2 | 61.9 | 44.1 | 124.2 |

**Additional information:** (a) A £0.5M Stage 3 write-off was processed in the source system on 30 March — GL journal not yet posted. (b) A £0.5M Stage 2 PMA approved by the IFRS 9 Committee on 29 March was uploaded to the risk system, but the GL journal was prepared for £0 (data entry error). (c) The disclosure note was drafted from a risk system extract that predates the write-off processing.

**Step 1 — Map all differences.** Build a break analysis grid comparing every source pair for Stage 1, Stage 2, Stage 3, and Total. Identify the £ amount and which tier boundary each difference falls across.

**Step 2 — Trace each break to root cause.** Using the additional information: why does risk system Stage 3 differ from model output Stage 3? Why does GL Stage 2 differ from risk system Stage 2? Why does the disclosure note Stage 3 differ from the GL Stage 3?

**Step 3 — Resolution actions.** For each break specify: (a) the journal entry or system action required; (b) the responsible team; (c) whether the resolution impacts the P\&L (income statement) or is balance sheet only.

**Step 4 — Post-resolution four-way.** After all resolutions are applied, show the corrected four-way table with all tiers in agreement. What is the final reconciled provision total?

**Step 5 — Controller sign-off memo.** Draft the reconciliation sign-off memo from Financial Controller to CFO: breaks found, root causes, resolutions applied, confirmed four-way agreement, and sign-off request for the accounts to proceed to audit.

| 🔑 Key Learning: The write-off creates an asymmetric break — it removes both the gross loan and its provision from the balance sheet simultaneously. If processed in the source system but the GL journal is not yet posted, the GL provision is overstated (provision not yet released). This is the most common quarter-end GL-to-risk-system break, because write-off processing often happens in the final days before close when GL posting cut-offs are tightest. |
| :---- |

| ⚡ EXERCISE 14: Suspense Account Month-End Clearance |
| :---- |
| **Domain:** Bank Reconciliation — Suspense Accounts   |   **Time:** 30 minutes |
| Head of Reconciliation Operations. It is month-end. The suspense register shows 12 items totalling £2.87M across three accounts. Clear all items or escalate with full documentation before the month-end close. |

| \# | Account | Age (Days) | Amount £ | Description |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Payment Suspense | 0 | 125,000 | Inbound CHAPS — beneficiary not yet identified |
| 2 | Payment Suspense | 1 | 380,000 | Duplicate payment — reversal instruction sent |
| 3 | Payment Suspense | 4 | 52,000 | FX conversion rounding difference |
| 4 | Trade Suspense | 2 | 1,200,000 | Bond settlement — CREST matching pending |
| 5 | Trade Suspense | 7 | 450,000 | Equity position break — custodian query open |
| 6 | Trade Suspense | 12 | 95,000 | Derivatives MTM difference — model dispute |
| 7 | Trade Suspense | 18 | 210,000 | Legacy item — no owner identified |
| 8 | Inter-Co Suspense | 1 | 48,000 | Branch transfer — posting error |
| 9 | Inter-Co Suspense | 3 | 87,000 | Cost allocation dispute — Finance reviewing |
| 10 | Inter-Co Suspense | 8 | 115,000 | Acquisition-related — legal review ongoing |
| 11 | Inter-Co Suspense | 35 | 72,000 | Unknown origin — no documentation |
| 12 | Inter-Co Suspense | 3 | 33,000 | IT system migration difference |

**Step 1 — SLA classification.** Apply the ageing SLA framework from the bank-reconciliation SKILL.md. Classify each item: normal window / escalation due / senior escalation / critical / write-off candidate. For each escalation-level item identify the correct escalation recipient by name and role.

**Step 2 — Month-end clearance plan.** For each item specify the clearing action: items 1, 2, 3, 8, 12 — what are the specific journal entries or system actions to clear them today? Item 7 (no owner, 18 days) — draft the escalation memo to the CFO. Item 11 (35 days, unknown origin) — what is the write-off process, which account absorbs it, and what operational risk event must be logged?

**Step 3 — Suspense dashboard.** Build the month-end suspense management dashboard: total balance by account; balance by ageing bucket (0–5 / 6–15 / 16–30 / \>30 days); items by status (clearing today / escalated / write-off candidate); projected post-clearance balance.

**Step 4 — Month-end certification.** Draft the month-end suspense certification for CFO sign-off: items cleared, items remaining with explanation, P\&L impact of write-off (item 11), attestation that all items \>30 days have been escalated, and request for CFO approval on the write-off.

| Chapter Summary |
| :---: |

# **Five Principles for Banking AI Deployment**

| *Banking is the industry where the consequences of a wrong model output are not confined to the institution that built it. IFRS 9, Basel III, and AML/CFT regulation are the direct legislative response to 2008 — they exist because the world learned, at enormous cost, what happens when bank risk measurement is inadequate.* |
| :---- |

## **Principle 1: Model Governance Applies to AI Models**

The Federal Reserve's SR 11-7, EBA guidelines on internal models, and PRA supervisory statements on model risk management all apply to AI-driven models used in capital calculation, ECL estimation, and AML screening. Every AI model must be documented, validated, and periodically reviewed. The SKILL.md files built in this chapter are model documentation — they record the logic the agent applies and the limits of its judgment.

## **Principle 2: The SICR Assessment Is Irreducibly Human**

IFRS 9's most consequential decision — whether a loan has suffered a significant increase in credit risk — involves qualitative information that no model can fully capture: management's assessment of borrower prospects, industry headwinds not yet visible in data, geopolitical factors. The agent applies quantitative SICR triggers consistently. The credit officer applies judgment to the borderline cases. This division of labour is the correct one.

## **Principle 3: AML Is a Legal Obligation, Not a Data Exercise**

A SAR filed without professional judgment is a compliance risk — it may constitute a tip-off if filed on insufficient grounds, or fail to meet the 'reasonable grounds to suspect' standard if filed incorrectly. The AI agent accelerates the analysis and drafts the narrative. The MLRO makes the filing decision. This sequence is not optional.

## **Principle 4: The Basel IV Output Floor Will Reshape the Industry**

The phased implementation of the 72.5% output floor (2025–2030) will constrain the capital benefit that large IRB banks have derived from model optimisation. Banks with the most optimised IRB models will face the largest capital increases. The capital management teams and AI tools that can most accurately forecast the output floor impact on their specific portfolios will be the ones that help their institutions plan the most effective responses.

## **Principle 5: The Interaction Between Pillars Is Where the Insight Lives**

An IFRS 9 provision charge is simultaneously a P\&L event, a capital event, and potentially a liquidity event. An AML fine is simultaneously operational risk, capital, and liquidity. An AI system that models these interactions in real time — not in three separate quarterly reports — is the system that enables a CFO and CRO to manage their institution proactively rather than reactively. The integrated banking AI architecture is not a luxury; it is the correct design for the regulatory environment banks actually operate in.

| 🔑 The professional who masters banking AI is not the one who can build the most sophisticated ECL model. It is the one who understands what the model can and cannot tell them — and who builds the Cowork workflows that put that understanding into production, with the governance framework that regulators and auditors require to trust it. |
| :---- |

Continue to Chapter 22: Investment Management and Asset Management AI →

