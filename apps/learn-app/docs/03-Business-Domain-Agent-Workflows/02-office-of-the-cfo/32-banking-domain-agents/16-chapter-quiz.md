---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents/chapter-quiz
sidebar_position: 16
title: "Chapter 32: Banking-Specific AI Quiz"
---

# Chapter 32: Banking-Specific AI Quiz

Test your understanding of the three regulatory pillars (IFRS 9, Basel III/IV, AML/KYC), pillar-aware routing, ECL calculation, capital adequacy, financial crime compliance, cross-pillar integration, and bank reconciliation.

<Quiz
title="Chapter 32: Banking-Specific AI Assessment"
questions={[
{
question: "A bank holds a $50 million corporate loan. The IFRS 9 model calculates a $2 million ECL provision. The Basel III model calculates a $4 million capital charge. A junior analyst asks why two different regulatory frameworks produce two different numbers for the same loan. What is the correct explanation?",
options: [
"Basel III replaced IFRS 9 after the 2008 crisis so only the capital charge is relevant for modern regulatory compliance",
"The IFRS 9 number is wrong because it should always equal the Basel III capital charge for consistency across regulatory filings",
"IFRS 9 measures expected losses to determine provisioning while Basel III measures capital needed to absorb unexpected losses — they answer different questions about the same asset",
"The difference exists because IFRS 9 uses historical data while Basel III uses forward-looking estimates of future losses"
],
correctOption: 2,
explanation: "Lesson 1 establishes that the three pillars ask different questions about the same asset. IFRS 9 asks 'how much will you lose?' (expected loss provisioning). Basel III asks 'can you survive the loss?' (capital adequacy). These are complementary frameworks, not competing ones. IFRS 9 provisions reduce reported profit while Basel capital charges constrain lending capacity. The numbers should differ because they measure different risk dimensions. IFRS 9 was not replaced by Basel III — they coexist. Both frameworks use forward-looking estimates, not just historical data.",
source: "Lesson 1: The Three Regulatory Pillars of Modern Banking"
},
{
question: "A fraud is discovered in a corporate loan on a bank's balance sheet. The AML team files a SAR. What cross-pillar cascade does Chapter 32 identify as the consequence?",
options: [
"The fraud evidence triggers SICR, migrating the loan from Stage 1 to Stage 3 with a provision increase of potentially 5-10x, which reduces retained earnings and therefore CET1 capital",
"The fraud triggers only an AML investigation — IFRS 9 and Basel are unaffected until the investigation concludes with a formal finding",
"The SAR filing automatically freezes the loan and removes it from the balance sheet, eliminating both the IFRS 9 provision and the Basel capital charge",
"The Basel pillar reacts first by increasing the risk weight, which then triggers the IFRS 9 pillar to recalculate the provision based on the new capital charge"
],
correctOption: 0,
explanation: "Lesson 1 describes the cross-pillar cascade: AML activates first (SAR filing), then IFRS 9 reacts (fraud is SICR evidence, loan migrates to Stage 3, provision jumps from 12-month to lifetime ECL — potentially 5-10x increase), then Basel absorbs the impact (increased provision reduces retained earnings, reducing CET1 capital, and the risk weight may increase). SAR filing does not freeze or remove the loan. The investigation conclusion is not required for IFRS 9 to react — the fraud evidence itself constitutes SICR. IFRS 9 reacts before Basel, not the other way around.",
source: "Lesson 1: The Three Regulatory Pillars of Modern Banking"
},
{
question: "The banking plugin contains 17 skills organised by pillar. A user asks: 'What is the CET1 capital impact of our Q4 IFRS 9 provision increase of $200 million?' The router detects signals from two pillars. Which skills does it chain and in what order?",
options: [
"It loads all 17 skills simultaneously to ensure complete cross-pillar coverage for any regulatory question",
"It loads basel-capital first to check the current ratio, then ifrs9-ecl to verify the provision amount matches the capital model",
"It loads only basel-capital because the provision amount is already given and no IFRS 9 calculation is needed",
"It loads ifrs9-ecl first to understand the provision components, then basel-capital to recalculate the CET1 ratio with reduced retained earnings"
],
correctOption: 3,
explanation: "Lesson 2 traces this exact cross-pillar query. The router detects 'IFRS 9 provision' (IFRS 9 signal) and 'CET1 capital' (Basel signal). It chains two skills in dependency order: ifrs9-ecl first (to understand the $200M provision and its components), then basel-capital (to recalculate CET1 with reduced retained earnings — $200M × (1 - tax rate) reduction). Loading Basel first would not work because it needs the provision details. Loading only Basel misses the provision decomposition. Loading all 17 skills wastes context and adds no value.",
source: "Lesson 2: The Banking Plugin Architecture"
},
{
question: "A bank uses the banking plugin's four domain commands: /bank-ecl, /bank-capital, /bank-recon, and /bank-aml. A colleague asks whether these commands are required or whether the router handles the same queries. What is the correct relationship?",
options: [
"The commands are the only way to access the skills — the router cannot detect banking queries without them",
"The commands are convenience shortcuts that bypass the router and guarantee the correct skill chain loads — the router handles the same queries automatically from natural language",
"The commands replace the router entirely — once installed, the router is disabled and all queries must use command syntax",
"The commands are legacy features scheduled for removal in the next plugin version"
],
correctOption: 1,
explanation: "Lesson 2 explains that the four commands are convenience shortcuts. The router handles the same queries automatically by detecting pillar signals in natural language (e.g., 'ECL,' 'CET1,' 'SAR'). The commands simply guarantee the correct skill chain loads without requiring the router to parse the query. The router is not disabled by commands — both coexist. The commands are not legacy — they are actively taught in the chapter. The router can detect banking queries independently of commands.",
source: "Lesson 2: The Banking Plugin Architecture"
},
{
question: "A corporate borrower's internal rating drops from A to BB — a 4-notch downgrade — but no payments have been missed and the borrower is current on all obligations. Under IFRS 9, what stage should this loan be classified as and why?",
options: [
"Stage 1 because no payment has been missed and the borrower is current on all obligations",
"Stage 3 because any downgrade exceeding 3 notches automatically triggers default classification under IFRS 9",
"Stage 2 because a 4-notch downgrade exceeds the 2-notch SICR threshold, indicating a significant increase in credit risk since origination",
"The loan cannot be staged until the next quarterly assessment cycle when the rating downgrade is formally reviewed by the credit committee"
],
correctOption: 2,
explanation: "Lesson 3 establishes that a rating downgrade of 2+ notches since origination is a quantitative SICR trigger moving the loan to Stage 2. The 4-notch downgrade (A to BB) clearly exceeds this threshold. Stage 2 does not require missed payments — SICR can be triggered by rating changes, covenant breaches, or qualitative indicators. Stage 3 requires actual default (90+ DPD, unlikely to pay, restructuring with loss) — a rating downgrade alone does not trigger Stage 3. Staging is continuous, not limited to quarterly cycles.",
source: "Lesson 3: IFRS 9 ECL — Staging and the ECL Formula"
},
{
question: "A $10 million loan in Stage 1 has a 12-month ECL of $42,000 (PD 1.2%, LGD 35%). The borrower experiences SICR and the loan migrates to Stage 2. The lifetime ECL is calculated at $397,889. A board member asks why the provision increased nearly tenfold when the borrower has not actually defaulted. What is the explanation?",
options: [
"The measurement window expanded from 12 months to the full remaining loan term — the staging cliff effect means lifetime ECL captures losses over all remaining years, not just the next twelve months",
"The ECL model is miscalibrated and producing artificially inflated Stage 2 provisions that overstate actual credit risk",
"The PD and LGD parameters automatically double when a loan moves to Stage 2, mechanically increasing the ECL calculation",
"Stage 2 provisions include a regulatory penalty surcharge that is added on top of the expected loss to discourage banks from allowing credit deterioration"
],
correctOption: 0,
explanation: "Lesson 3 explains the staging cliff effect: when a loan migrates from Stage 1 to Stage 2, the measurement window expands from 12 months to the full remaining term. For a 5-year loan, this means provisioning for losses over all 5 remaining years instead of just the next 12 months. The 5-10x increase is a measurement window change, not a fundamental change in credit quality. PD and LGD do not automatically double at Stage 2. There is no regulatory penalty surcharge. The model is working correctly — the cliff effect is a core design feature of IFRS 9.",
source: "Lesson 3: IFRS 9 ECL — Staging and the ECL Formula"
},
{
question: "IFRS 9 includes a rebuttable presumption that SICR has occurred when a financial asset is more than 30 days past due. Under what circumstance can a bank override this presumption and keep the loan in Stage 1?",
options: [
"When the bank's credit committee votes to maintain the Stage 1 classification based on a majority decision",
"When the bank has evidence that the past-due status does not indicate a significant increase in credit risk — such as an administrative payment delay by a financially healthy borrower",
"When the loan balance is below a materiality threshold set by the bank's accounting policy",
"When the borrower provides a written guarantee that payment will be made within the next 30 days"
],
correctOption: 1,
explanation: "Lesson 3 explains the 30-day rebuttable presumption: the default position is that 30+ DPD triggers Stage 2, but the bank can override this if it has evidence the past-due status does not indicate genuine credit deterioration — for example, an administrative delay (payment system outage, holiday processing) by a borrower who is otherwise financially healthy. A credit committee vote without supporting evidence is insufficient. There is no materiality threshold exemption. A borrower's payment promise does not constitute evidence that credit risk has not increased.",
source: "Lesson 3: IFRS 9 ECL — Staging and the ECL Formula"
},
{
question: "A bank calculates PD for a BBB-rated corporate borrower. The through-the-cycle (TTC) PD is 1.5%. The economy is entering a recession and the credit cycle adjustment (CCA) is 1.4. The analyst submits the TTC PD of 1.5% directly into the IFRS 9 ECL model. What error has been made?",
options: [
"The analyst should have used a lower PD because recessions reduce corporate default rates through government support programmes",
"The error is using a CCA of 1.4 when the correct recession adjustment should be between 2.0 and 3.0 for all economic downturns",
"The TTC PD is the correct input because IFRS 9 requires long-run average estimates that smooth out economic cycle volatility",
"IFRS 9 requires point-in-time PD, not through-the-cycle PD — the correct input is PIT PD = TTC PD × CCA = 1.5% × 1.4 = 2.1%, reflecting current recessionary conditions"
],
correctOption: 3,
explanation: "Lesson 4 identifies TTC-vs-PIT confusion as one of the most common ECL calculation errors. IFRS 9 requires forward-looking, point-in-time PD estimates that reflect current and forecast conditions. TTC PD averages across full cycles and understates risk during recessions. The correct conversion is PIT PD = TTC PD × CCA = 1.5% × 1.4 = 2.1%. Recessions increase default rates, not decrease them. CCA of 1.4 indicates a mild recession — severe recessions may reach 1.3-2.5, but the range depends on the specific economic conditions.",
source: "Lesson 4: PD, LGD, and EAD — Building the ECL Components"
},
{
question: "A bank estimates LGD for a residential mortgage portfolio. The current market value of the properties provides 75% collateral coverage. The risk team uses this value directly in the ECL calculation. What principle does Chapter 32 identify as violated?",
options: [
"Current market values are correct for LGD estimation because IFRS 9 requires point-in-time calibration of all model inputs",
"LGD should be set to zero for fully collateralised loans because the collateral eliminates all credit risk regardless of market conditions",
"IFRS 9 requires downturn LGD — collateral values must be stressed to forced-sale conditions, typically 70-80% of current market value, because defaults cluster during economic downturns when property values are depressed",
"The bank should use the original purchase price of the properties rather than current market value to avoid mark-to-market volatility"
],
correctOption: 2,
explanation: "Lesson 4 establishes that IFRS 9 requires downturn LGD. Defaults cluster during economic downturns when collateral values are simultaneously depressed. Properties sold in a forced sale typically achieve 70-80% of current market value. Using current values overstates recovery and understates ECL. While IFRS 9 uses PIT for PD, LGD must reflect stressed (downturn) conditions. LGD is never zero even for fully collateralised loans because forced-sale costs, legal fees, and time-to-recovery create losses. Original purchase price is irrelevant to current recovery estimation.",
source: "Lesson 4: PD, LGD, and EAD — Building the ECL Components"
},
{
question: "A revolving credit facility has $5 million drawn and $15 million undrawn. The credit conversion factor (CCF) is 60%. An analyst calculates EAD as $5 million — the current drawn balance. What has been missed?",
options: [
"The analyst missed the undrawn component — EAD equals drawn balance plus CCF times undrawn commitment: $5M + (0.60 × $15M) = $14M, because borrowers in difficulty typically draw down credit lines before defaulting",
"The analyst should have used the total committed facility of $20 million as EAD because the full amount is contractually available",
"CCF applies only to Basel III capital calculations and should not be used in IFRS 9 ECL models",
"The $15 million undrawn amount should be excluded because the bank can cancel the commitment before the borrower draws it down"
],
correctOption: 0,
explanation: "Lesson 4 identifies EAD as the most commonly underestimated ECL component. EAD = drawn + (CCF × undrawn) = $5M + (0.60 × $15M) = $14M. The CCF reflects empirical evidence that borrowers in financial difficulty draw down available credit before defaulting. Using only the drawn balance ($5M) understates the true exposure at default by nearly 3x. Using the full $20M ignores that not all undrawn commitments are drawn. CCF applies to both IFRS 9 and Basel calculations. Cancellation rights may exist but do not eliminate the drawdown risk for committed facilities.",
source: "Lesson 4: PD, LGD, and EAD — Building the ECL Components"
},
{
question: "A bank runs three macroeconomic scenarios for IFRS 9 ECL: Base (40% weight, ECL $45M), Adverse (30% weight, ECL $78M), and Upside (30% weight, ECL $28M). The CFO proposes using only the Base scenario ECL of $45M since it is the most likely outcome. What principle does this violate?",
options: [
"The CFO is correct because the base case represents the most probable outcome and probability weighting adds unnecessary complexity to the ECL calculation",
"IFRS 9 requires probability-weighted ECL across multiple scenarios — the weighted ECL is $47.7M, which exceeds the base case because adverse scenarios have disproportionately large ECL amounts due to ECL non-linearity",
"The CFO should use only the adverse scenario because regulators require conservative provisioning that always uses the worst-case estimate",
"The probability weights must be equal across all scenarios to avoid management bias in the ECL calculation"
],
correctOption: 1,
explanation: "Lesson 5 establishes the non-linearity principle: expected credit loss is NOT the credit loss under the expected scenario. Probability-weighted ECL = (0.40 × $45M) + (0.30 × $78M) + (0.30 × $28M) = $18M + $23.4M + $8.4M = $49.8M. The weighted ECL exceeds the base case because ECL responds non-linearly to economic conditions — adverse scenarios produce disproportionately larger losses. Using only the base case understates provisions. Using only the adverse case overstates them. Weights need not be equal — they should reflect genuine probability assessments.",
source: "Lesson 5: Macroeconomic Scenarios and Post-Model Adjustments"
},
{
question: "A bank's IFRS 9 Governance Committee approves a post-model adjustment (PMA) of $8 million for climate risk exposure in the commercial real estate portfolio. The committee documents the rationale and quantifies the impact. Six months later, the PMA remains unchanged. What governance requirement has been overlooked?",
options: [
"PMAs do not require ongoing review once approved by the governance committee because the initial approval constitutes permanent authorisation",
"PMAs exceeding $5 million require external auditor pre-approval before the bank can apply them to the provision calculation",
"The PMA should have been incorporated directly into the quantitative model parameters rather than maintained as a separate adjustment",
"PMAs must be time-limited with an expiry date or review trigger and reassessed quarterly — a PMA that persists without reassessment becomes an unmonitored management override of the quantitative model"
],
correctOption: 3,
explanation: "Lesson 5 establishes five PMA governance requirements: documented rationale, committee approval, quantified impact with methodology, time-limited expiry date or review trigger, and quarterly reassessment. PMAs are the primary audit focus area because they represent management override of quantitative models. A PMA that persists without reassessment becomes an unmonitored override — exactly what governance is designed to prevent. While incorporating PMAs into the model is desirable long-term, some PMAs address temporary conditions. External auditor pre-approval is not required — PMAs are internal management decisions subject to audit review.",
source: "Lesson 5: Macroeconomic Scenarios and Post-Model Adjustments"
},
{
question: "A bank reports CET1 capital of £400M and Risk-Weighted Assets of £3.2B. The minimum CET1 requirement including capital conservation buffer and D-SIB surcharge is 8.0%. A dividend proposal would reduce CET1 to £380M. The Treasurer asks whether the dividend can proceed. What analysis is required?",
options: [
"The current CET1 ratio is £400M / £3.2B = 12.5% and post-dividend is 11.9% — both exceed 8.0%, but the MDA framework must be checked because distributions are restricted when CET1 falls into the buffer zone above the hard minimum",
"The dividend can proceed because £380M / £3.2B = 11.9% which exceeds the 8.0% combined buffer requirement with comfortable headroom",
"Dividends are prohibited whenever CET1 falls below 15% because regulators require banks to maintain excess capital for stress absorption",
"The dividend proposal requires regulatory pre-approval regardless of the capital ratio because all bank distributions must be cleared by the prudential supervisor"
],
correctOption: 0,
explanation: "Lesson 6 explains that the MDA (Maximum Distributable Amount) framework restricts dividends and bonuses when CET1 falls into the buffer zone between the hard minimum (4.5%) and the combined buffer requirement. At 11.9% CET1, the bank is above the 8.0% combined requirement, but MDA must still be checked — the bank must confirm sufficient headroom above the buffer zone to pay the full proposed dividend. There is no 15% threshold. Regulatory pre-approval for dividends applies only in certain supervisory frameworks, not universally. The analysis of buffer headroom is the critical step.",
source: "Lesson 6: Basel III/IV Capital Adequacy"
},
{
question: "A bank calculates credit risk RWA using the Internal Ratings-Based (IRB) approach, producing RWA of £1.8 billion. The same portfolio under the Standardised Approach would produce RWA of £3.0 billion. Under Basel IV, what additional calculation must the bank perform?",
options: [
"The bank must average the IRB and SA results to produce a blended RWA figure for regulatory reporting purposes",
"The bank can use whichever approach produces the lower RWA to minimise its capital requirements",
"The bank must apply the output floor: IRB RWA cannot fall below 72.5% of SA RWA — the floor is £3.0B × 72.5% = £2.175B, which exceeds the IRB result of £1.8B, so the bank must use £2.175B",
"The output floor only applies to banks that have been using IRB for fewer than five years as a transitional safeguard"
],
correctOption: 2,
explanation: "Lesson 7 explains the Basel IV output floor: IRB-calculated RWA cannot fall below 72.5% of Standardised Approach RWA for the same portfolio. Floor = £3.0B × 0.725 = £2.175B. Since IRB RWA (£1.8B) is below the floor (£2.175B), the bank must use £2.175B — an effective increase of £375M in RWA. Banks cannot choose the lower approach. The output floor is not transitional — it is a permanent feature phased in from 2025 to 2030. EBA estimates 18-22% average RWA increase for large EU/UK banks.",
source: "Lesson 7: Risk-Weighted Assets — SA and IRB Approaches"
},
{
question: "Under the Basel III Standardised Approach, a bank holds £200M in residential mortgages with LTV between 50% and 80%. What risk weight applies and what is the resulting credit risk RWA?",
options: [
"Risk weight 20% producing RWA of £40M because residential mortgages are considered low-risk secured lending",
"Risk weight 35% producing RWA of £70M because the LTV 50-80% band carries a moderate risk weight under the standardised approach",
"Risk weight 75% producing RWA of £150M because all retail lending receives the same standardised risk weight regardless of collateral",
"Risk weight 100% producing RWA of £200M because unrated exposures receive the default corporate risk weight"
],
correctOption: 1,
explanation: "Lesson 7 provides the SA risk weight table: residential mortgages with LTV ≤50% receive 20%, LTV 50-80% receive 35%, and LTV >80% receive 50%. For £200M at 35%: RWA = £200M × 0.35 = £70M. The 20% weight applies only to LTV ≤50%. The 75% weight applies to retail SME and consumer credit, not residential mortgages. The 100% weight applies to unrated corporates, not secured mortgage lending.",
source: "Lesson 7: Risk-Weighted Assets — SA and IRB Approaches"
},
{
question: "A bank classifies its HQLA for the LCR calculation: £500M central bank reserves, £380M government bonds (0% risk weight), £95M covered bonds (Level 2A), and £60M investment-grade corporate bonds (Level 2B). What haircut and cap rules must the bank apply?",
options: [
"All HQLA categories receive the same 0% haircut because they are all classified as high-quality liquid assets by definition",
"The bank can choose which haircut schedule to apply based on its internal liquidity risk assessment methodology",
"Haircuts apply only during stress periods and are suspended during normal market conditions to avoid unnecessarily reducing reported HQLA",
"Level 1 assets receive 0% haircut with no cap; Level 2A receives 15% haircut and is capped at 40% of total HQLA; Level 2B receives 25-50% haircut and is capped at 15% of total HQLA"
],
correctOption: 3,
explanation: "Lesson 8 details the HQLA classification: Level 1 (cash, central bank reserves, qualifying sovereigns) receives 0% haircut with no cap. Level 2A (sovereign bonds at 20% RW, covered bonds, investment-grade corporates) receives 15% haircut capped at 40% of total HQLA. Level 2B (lower-rated corporates, equities, RMBS) receives 25-50% haircut capped at 15%. Haircuts are permanent, not suspended during normal conditions. Banks cannot choose their own haircut schedules — they are prescribed by regulation.",
source: "Lesson 8: Leverage Ratio, LCR, and NSFR"
},
{
question: "The UK PRA sets a leverage ratio minimum of 3.25% for banks with retail deposits above a certain threshold. A bank concentrates heavily in government bonds with 0% risk weight and reports a strong CET1 ratio of 14%. The leverage ratio is 2.8%. What does this reveal?",
options: [
"The leverage ratio is irrelevant because the strong CET1 ratio demonstrates adequate capitalisation regardless of asset composition",
"The 2.8% leverage ratio is acceptable because the 3.25% minimum only applies during stress testing periods, not for ongoing regulatory compliance",
"The leverage ratio — a non-risk-weighted measure — catches concentration in low-risk-weight assets that the CET1 ratio misses, revealing that the bank may have excessive balance sheet leverage despite appearing well-capitalised on a risk-weighted basis",
"Government bonds should be excluded from the leverage ratio denominator because they carry no credit risk"
],
correctOption: 2,
explanation: "Lesson 8 explains that the leverage ratio is a non-risk-weighted backstop. Government bonds at 0% RW contribute zero to credit risk RWA but still increase the total exposure measure in the leverage ratio. A bank loaded with low-RW assets can report a high CET1 ratio while being excessively leveraged. The leverage ratio catches this concentration. It is not irrelevant — it is a binding constraint. The 3.25% minimum is ongoing, not limited to stress testing. UK PRA excludes central bank reserves (not government bonds) from the total exposure measure.",
source: "Lesson 8: Leverage Ratio, LCR, and NSFR"
},
{
question: "A bank's compliance team discovers that a customer is a Politically Exposed Person (PEP) — the spouse of a current government minister. The relationship manager argues that PEP status does not indicate criminality and standard CDD should be sufficient. What does Chapter 32 say?",
options: [
"The relationship manager is correct that PEP status does not indicate criminality, but Enhanced Due Diligence is mandatory regardless — PEP status triggers EDD because of the elevated corruption and bribery risk associated with proximity to political power",
"PEP status automatically prohibits the bank from maintaining the customer relationship under all major AML frameworks",
"EDD is only required for current government officials themselves, not for family members or associates",
"PEP status triggers enhanced monitoring but not EDD because the customer is a family member rather than the official"
],
correctOption: 0,
explanation: "Lesson 9 clarifies that PEP status does not indicate criminality — it is a risk indicator triggering enhanced scrutiny. The relationship manager is half right (PEP ≠ criminal) but wrong about the response (EDD is mandatory, not optional). PEP classification extends to family members (spouse, children, parents, siblings) and close associates. PEP status does not prohibit the relationship — it requires EDD including source of wealth investigation. EDD applies to family members and associates, not just the official themselves.",
source: "Lesson 9: AML/KYC — The Three Lines of Defence"
},
{
question: "A bank's KYC process identifies that a corporate customer's beneficial ownership chain passes through a Cayman Islands holding company. The analyst cannot verify the ultimate beneficial owner because Cayman Islands does not maintain a public register. The relationship manager wants to proceed with onboarding. What should happen?",
options: [
"The bank should proceed because many legitimate multinational structures use Cayman Islands holding companies for tax-efficient operations",
"Under AML regulations, the bank must identify the natural person who ultimately owns or controls the entity at a 25%+ threshold — if the ownership chain cannot be traced, the bank must determine whether it can satisfy its beneficial ownership obligations before proceeding",
"The bank should reject the customer automatically because any entity with a Cayman Islands component is presumed to be high-risk regardless of other factors",
"Beneficial ownership verification is only required for customers classified as high-risk and Cayman Islands structures do not automatically trigger high-risk classification"
],
correctOption: 1,
explanation: "Lesson 9 establishes that banks must trace the full ownership chain to the ultimate beneficial owner (natural person at 25%+ ownership or control). Non-cooperative jurisdictions make this harder but do not eliminate the obligation. The bank cannot simply proceed without satisfying its BO obligations — it must assess whether alternative verification methods exist (e.g., certified copies, legal opinions). Automatic rejection is not required. Complex offshore structures are one of the mandatory EDD triggers, so they do trigger enhanced review regardless of other factors.",
source: "Lesson 9: AML/KYC — The Three Lines of Defence"
},
{
question: "A transaction monitoring system generates an alert: a sole trader running a taxi business in Birmingham has made eight cash deposits over 14 days, each between £8,800 and £9,500, none exceeding £10,000. The analyst's initial assessment is 'normal cash business.' What AML typology should the analyst consider?",
options: [
"Round-tripping — the funds are being sent out of the country and returned through intermediary accounts to disguise their origin",
"The pattern is consistent with a legitimate cash-intensive business and the alert should be closed as a false positive without further investigation",
"Velocity — the transaction frequency is unusual for a taxi business and indicates potential identity theft or account compromise",
"Structuring — multiple deposits deliberately kept below the reporting threshold to avoid triggering automatic reporting, which is suspicious regardless of the business type"
],
correctOption: 3,
explanation: "Lesson 10 identifies structuring (also called 'smurfing') as the typology: multiple cash deposits deliberately kept below a reporting threshold (£10,000 in this case). Eight deposits averaging £9,150 in 14 days against a typical monthly cash pattern of £15,000 shows both the threshold-avoidance pattern and an unusual spike in volume. Round-tripping involves international movements and return of funds. Velocity is about unusual frequency but misses the threshold-avoidance pattern. While taxi businesses are cash-intensive, the just-below-threshold pattern and volume spike warrant investigation, not automatic closure.",
source: "Lesson 10: Transaction Monitoring, ML, and SAR Filing"
},
{
question: "An AML analyst reviews an alert and concludes there are reasonable grounds to suspect money laundering. A SAR is filed with the NCA. The relationship manager asks the compliance team whether the customer should be informed about the investigation so they can 'clear things up.' What is the correct response?",
options: [
"Informing the customer that a SAR has been filed is a criminal offence under the tipping-off prohibition — POCA 2002 s333A carries penalties of up to two years imprisonment on indictment",
"The customer should be informed because transparency builds trust and may help resolve the investigation more quickly with the customer's cooperation",
"The customer can be informed only after the NCA has completed its investigation and issued formal findings about the suspicious activity",
"The compliance team should inform the customer's legal representative rather than the customer directly to maintain proper legal protocols"
],
correctOption: 0,
explanation: "Lesson 10 establishes the tipping-off prohibition: under POCA 2002 s333A, it is a criminal offence to inform any person that a SAR has been filed, an investigation is under consideration, or information has been disclosed to law enforcement. Penalties include up to 3 months on summary conviction or 2 years on indictment. This applies regardless of intent — even well-meaning disclosure to the customer, their lawyers, or other bank staff outside the compliance function. The prohibition exists because alerting the subject may enable them to destroy evidence, move funds, or flee.",
source: "Lesson 10: Transaction Monitoring, ML, and SAR Filing"
},
{
question: "A bank's MLRO receives a SAR recommendation from an analyst. The MLRO reviews the case and decides not to file, concluding the evidence is insufficient. Six months later, the account is linked to a major fraud. The MLRO asks whether personal liability applies. What does Chapter 32 say about the MLRO's position?",
options: [
"The MLRO has no personal liability because the analyst made the initial assessment and the MLRO merely reviewed the recommendation",
"Personal liability only applies if the MLRO acted with deliberate intent to facilitate the fraud, not for a genuine professional judgment error",
"The MLRO has personal criminal liability for the SAR filing decision — the decision to file or not file rests with the MLRO personally, and this liability cannot be delegated or shared",
"The bank's legal department bears liability for SAR decisions because they provide the legal framework within which the MLRO operates"
],
correctOption: 2,
explanation: "Lesson 10 establishes that the MLRO has personal criminal liability for the SAR filing decision. This is one of the heaviest personal liabilities in financial services — the decision to file or not file cannot be delegated. If the MLRO decides not to file and the activity later proves criminal, the MLRO's documented rationale for the decision becomes critical evidence. The analyst's assessment feeds the MLRO's decision but does not shift liability. Honest professional judgment may mitigate but does not eliminate liability exposure. The legal department advises but does not bear the MLRO's statutory responsibility.",
source: "Lesson 10: Transaction Monitoring, ML, and SAR Filing"
},
{
question: "A bank discovers fraud in a £30 million corporate loan. The IFRS 9 Stage 1 ECL was £60,000. After fraud discovery, the loan moves to Stage 3 with LGD of 85%. What is the approximate new ECL and the CET1 capital impact (assuming 25% tax rate)?",
options: [
"New ECL cannot be calculated until the fraud investigation concludes because Stage 3 requires a court-determined loss amount rather than model estimates",
"New ECL is approximately £3M because LGD of 85% means the bank recovers 85% of the exposure, limiting the loss to 15% of £30M",
"The CET1 impact equals the full provision increase of £25.4M because tax offsets are not permitted for fraud-related losses under Basel rules",
"New ECL is approximately £25.5M (PD 100% × LGD 85% × EAD £30M) and CET1 falls by approximately £19.1M after the 25% tax offset on the £25.4M provision increase"
],
correctOption: 3,
explanation: "Lesson 11 traces this calculation: Stage 3 ECL = PD (100%, default occurred) × LGD (85%) × EAD (£30M) = £25.5M. Provision increase = £25.5M - £0.06M = £25.44M. CET1 impact = provision increase × (1 - tax rate) = £25.44M × 0.75 = £19.08M reduction in CET1. LGD of 85% means 85% is lost, not recovered. Tax offsets apply to provision charges regardless of the cause. IFRS 9 does not require court determination — model-based estimates using available evidence (including fraud discovery) are appropriate for Stage 3.",
source: "Lesson 11: Cross-Pillar Integration"
},
{
question: "A bank's IFRS 9 ECL is £75.5M and its regulatory expected loss (under Basel IRB) is £42.0M. The excess is £33.5M. Total credit RWA is £2.8B. How much of the excess can the bank add to Tier 2 capital?",
options: [
"The full £33.5M excess can be added to Tier 2 capital because IFRS 9 provisioning exceeds regulatory requirements and the surplus represents genuine loss-absorbing capacity",
"The excess that can be added to Tier 2 is capped at 0.6% of credit RWA — £2.8B × 0.6% = £16.8M, so only £16.8M is added despite the £33.5M excess",
"None of the excess can be added because IFRS 9 provisions and Basel expected losses are independent calculations that cannot be cross-referenced",
"The excess must be deducted from CET1 rather than added to Tier 2 because IFRS 9 provisions exceeding regulatory EL indicate model conservatism that inflates reported capital"
],
correctOption: 1,
explanation: "Lesson 11 explains the IRB shortfall/excess mechanism: when IFRS 9 ECL exceeds regulatory EL, the excess can be added to Tier 2 capital but is capped at 0.6% of credit RWA. Cap = £2.8B × 0.006 = £16.8M. Despite a £33.5M excess, only £16.8M can be added. If the relationship were reversed (regulatory EL exceeds IFRS 9 ECL), the shortfall would be deducted 50% from CET1 and 50% from Tier 2. The cross-reference between IFRS 9 and Basel is explicit and mandatory. Excess provisions are not deducted — only shortfalls are.",
source: "Lesson 11: Cross-Pillar Integration"
},
{
question: "A bank uses separate AI agents for IFRS 9, Basel, and AML — each operating independently without cross-pillar integration. The IFRS 9 agent reports a $50M provision increase. The Basel agent reports a stable CET1 ratio of 12.5%. What critical error does this architecture produce?",
options: [
"The Basel agent is reporting a stale CET1 ratio because the $50M provision increase has not been reflected in retained earnings — the actual CET1 ratio is lower, and the siloed architecture masks this deterioration",
"The architecture is correct because regulatory frameworks are designed to operate independently and cross-referencing would create double-counting",
"The error is in the IFRS 9 agent which should have consulted the Basel agent before calculating the provision to ensure consistency",
"Independent agents produce more accurate results because cross-pillar integration introduces complexity that increases calculation errors"
],
correctOption: 0,
explanation: "Lesson 11 identifies this as the core limitation of pillar-isolated agents. The $50M provision increase reduces retained earnings (a CET1 component). If the Basel agent does not receive this information, it reports a stale ratio that overstates the bank's capital position. The integrated architecture traces the cascade: provision up → retained earnings down → CET1 down → ratio falls. Independent operation does not improve accuracy — it creates blind spots. IFRS 9 does not consult Basel before calculating provisions, but the outputs must flow from one system to the other.",
source: "Lesson 11: Cross-Pillar Integration"
},
{
question: "A nostro reconciliation produces three unmatched items: (1) a payment in the bank's mirror with no corresponding statement entry, 2 days old; (2) a credit on the correspondent's statement with no mirror entry; (3) a $125 amount difference on a matched transaction. Which requires the most urgent investigation?",
options: [
"Item 1 requires the most urgent investigation because a missing statement entry may indicate a payment failure or rejection by the correspondent bank",
"Item 3 requires the most urgent investigation because amount discrepancies indicate potential fraud or unauthorised deductions by the correspondent bank",
"Item 2 requires the most urgent investigation because an unidentified credit must be moved to payment suspense within 24 hours — if left in the nostro it escapes suspense ageing controls and may disappear from visibility",
"All three items have equal urgency because any unmatched nostro item represents a control failure that must be resolved before the daily reconciliation certificate can be signed"
],
correctOption: 2,
explanation: "Lesson 14 explains that unidentified credits (statement-only items) are the most urgent because they represent funds that have arrived but cannot be allocated. If left in the nostro mirror rather than moved to payment suspense, they escape the suspense ageing controls and accountability framework. Item 1 (mirror-only, 2 days old) is within the normal settlement window and may simply be a timing difference. Item 3 ($125 difference) is likely a correspondent fee and can be posted to bank charges. While all items need resolution, the unidentified credit has the most immediate operational risk.",
source: "Lesson 14: Bank Reconciliation"
},
{
question: "A Financial Controller performs the four-way IFRS 9 provision reconciliation at quarter-end. The ECL model output shows £124.7M. The risk system shows £124.2M. The GL shows £123.7M. The disclosure note shows £124.2M. A £0.5M write-off was processed in the risk system but the GL journal has not been posted. What is the root cause of the Tier 2 vs Tier 3 break?",
options: [
"The risk system is wrong because it should automatically adjust for write-offs without requiring a separate GL journal entry",
"The break is immaterial at £0.5M and can be accepted without resolution as part of normal quarter-end rounding tolerances",
"The disclosure note is incorrect because it was extracted from the risk system rather than the GL, and all disclosures must source from the general ledger",
"The GL journal for the write-off has not been posted — the risk system reflects the write-off (reducing Stage 3 ECL by £0.5M) but the GL still shows the pre-write-off balance, creating a £0.5M break between Tier 2 and Tier 3"
],
correctOption: 3,
explanation: "Lesson 14 traces four-way provision reconciliation breaks. The write-off reduces the provision in the risk system (Tier 2) but the corresponding GL journal has not been posted (Tier 3 still shows the higher amount). Resolution: post the write-off journal to the GL. The risk system correctly processed the write-off — it is not wrong. The disclosure note issue is a separate Tier 3 vs Tier 4 break. The £0.5M break must be resolved before sign-off — any unexplained difference blocks the close regardless of perceived materiality.",
source: "Lesson 14: Bank Reconciliation"
},
{
question: "A bank's suspense register shows an item aged 35 days with no identified owner and no documentation. The Operations team has been unable to determine the item's origin. What does Chapter 32's ageing SLA framework require?",
options: [
"The item should be returned to the correspondent bank because unresolvable items are the correspondent's responsibility to identify and clear",
"The item triggers the over-30-day protocol: write-off assessment, operational risk event logging, CFO notification, and formal decision to either resolve or write off to profit and loss",
"The item can remain in suspense indefinitely as long as it is reported on the monthly suspense dashboard for management visibility",
"The item should be reclassified from suspense to a holding account to remove it from the ageing report and prevent audit findings"
],
correctOption: 1,
explanation: "Lesson 14 defines the ageing SLA: items over 30 days require write-off assessment, operational risk event logging, and CFO notification. A 35-day item with no owner and no documentation must go through the formal decision process — either the break is resolved or the amount is written off to P&L as an operational loss. Items cannot remain in suspense indefinitely. Reclassifying to another account to avoid the ageing report is a control circumvention, not a legitimate resolution. Correspondent banks are not responsible for items the bank cannot trace internally.",
source: "Lesson 14: Bank Reconciliation"
},
{
question: "Chapter 32 identifies five principles of banking AI deployment. Principle 2 states that 'the SICR assessment is irreducibly human.' A CTO proposes fully automating the SICR assessment using machine learning models trained on historical default data. What does the chapter say about this approach?",
options: [
"Full automation is the correct goal because ML models trained on sufficient historical data can outperform human judgment on SICR classification",
"SICR assessment should be entirely manual because any automation introduces model risk that banking regulators will not accept",
"SICR involves qualitative information that no model can fully capture — management assessment of borrower prospects, industry headwinds not yet visible in data, and geopolitical factors — so the agent applies quantitative triggers while the credit officer applies judgment to borderline cases",
"The chapter recommends a phased approach where ML handles 80% of SICR decisions autonomously and humans review only the remaining 20% flagged as uncertain"
],
correctOption: 2,
explanation: "Lesson 15 Principle 2 states that SICR assessment is irreducibly human. Quantitative SICR triggers (rating downgrades, 30+ DPD, PD increases) can be automated. But qualitative SICR indicators — management's assessment of borrower prospects, industry headwinds, geopolitical factors — require professional judgment that models cannot capture from historical data. The correct division: the agent applies quantitative triggers consistently, the credit officer applies judgment to borderline cases. Full automation misses qualitative signals. Full manual processing misses consistent quantitative application. The 80/20 split is not what the chapter recommends.",
source: "Lesson 15: Full Banking Agent — Capstone"
},
{
question: "Principle 3 of banking AI deployment states that 'AML is a legal obligation, not a data exercise.' An analyst proposes that since AI can detect suspicious patterns more accurately than humans, SAR filing should be automated to ensure no suspicious transactions are missed. What does the chapter identify as the flaw?",
options: [
"A SAR filed without professional judgment may constitute a tip-off if filed on insufficient grounds or fail to meet the reasonable-grounds-to-suspect standard if filed incorrectly — the MLRO must make the filing decision and this responsibility cannot be automated",
"AI-generated SARs are more accurate than human-drafted ones so automation would improve the quality of filings submitted to the NCA",
"SAR filing should be automated because the MLRO is a bottleneck that delays submissions past the regulatory deadline",
"The chapter supports full automation of SAR filing but only for Tier 1 alerts that have been pre-screened by rules-based systems"
],
correctOption: 0,
explanation: "Lesson 15 Principle 3: AML is a legal obligation. The AI agent accelerates analysis and drafts the SAR narrative, but the MLRO makes the filing decision. A SAR filed without judgment may constitute a tip-off (if the grounds are insufficient) or fail the reasonable-grounds-to-suspect standard (if the filing is incorrect). The filing decision carries personal criminal liability for the MLRO. Automation of the decision — as opposed to the analysis — would remove the professional judgment that the legal framework requires. The MLRO is not a bottleneck — they are a legally required decision-maker.",
source: "Lesson 15: Full Banking Agent — Capstone"
},
{
question: "A bank is implementing the Basel IV output floor. In Year 1 (2025), the transitional floor is 50%. By 2030, it reaches 72.5%. The bank's IRB RWA is £1.5B and SA RWA is £3.0B. What is the binding RWA in Year 1 and at full implementation?",
options: [
"Year 1: £1.875B (average of IRB £1.5B and 50% floor £1.5B); Full: £2.175B (72.5% of SA RWA)",
"Year 1: £1.5B (50% × £3.0B = £1.5B, equal to IRB); Full: £1.5B (IRB does not change with the output floor implementation)",
"Year 1: £3.0B (the bank must use full SA RWA during the transition period); Full: £2.175B (72.5% of SA RWA)",
"Year 1: £1.5B (IRB is below the 50% floor of £1.5B so they are equal); Full: £2.175B (72.5% × £3.0B exceeds IRB, floor binds)"
],
correctOption: 3,
explanation: "Lesson 7 explains the output floor phase-in. Year 1 (2025): floor = 50% × £3.0B = £1.5B. IRB RWA is also £1.5B, so they are equal — the floor does not yet bind. Full implementation (2030): floor = 72.5% × £3.0B = £2.175B. IRB RWA of £1.5B is below the floor, so the bank must use £2.175B — an increase of £675M. The bank does not use full SA RWA during transition. Averaging is not the methodology. The floor binds increasingly as the percentage rises from 50% to 72.5%.",
source: "Lesson 7: Risk-Weighted Assets — SA and IRB Approaches"
},
{
question: "A bank's LCR calculation shows total HQLA of £900M and total net cash outflows of £850M over a 30-day stress period. The LCR is 105.9%. A deposit stress scenario increases retail less-stable deposit run-off from 10% to 20%. The less-stable deposit base is £480M. How does this affect the LCR?",
options: [
"The LCR is unaffected because retail deposits are considered stable funding sources that do not contribute to the 30-day stress outflow calculation",
"The additional outflow is £480M × 10% = £48M, increasing net outflows to £898M and reducing LCR to £900M / £898M = 100.2% — still above the 100% minimum but with minimal headroom",
"The additional outflow is £480M × 20% = £96M, doubling the original outflow and reducing LCR below 50%, triggering immediate regulatory intervention",
"The bank can offset the deposit stress by reclassifying Level 2B assets as Level 1 to increase the HQLA numerator"
],
correctOption: 1,
explanation: "Lesson 8 covers LCR stress scenarios. The run-off rate increase from 10% to 20% adds £480M × (20% - 10%) = £48M to net outflows. New net outflows = £850M + £48M = £898M. New LCR = £900M / £898M = 100.2%. The bank is still above the 100% minimum but with only 0.2% headroom — a critical vulnerability. Retail deposits do contribute to outflows at prescribed run-off rates. The additional outflow is the incremental £48M (the difference), not the full £96M. HQLA cannot be reclassified between levels — the classification criteria are prescribed by regulation.",
source: "Lesson 8: Leverage Ratio, LCR, and NSFR"
},
{
question: "The three lines of defence model assigns specific responsibilities to each line. A compliance officer in the second line starts conducting CDD interviews with customers directly instead of reviewing the first line's CDD work. What governance problem does this create?",
options: [
"No problem exists because the second line can perform first-line duties when the first line lacks capacity or expertise",
"The problem is only procedural and can be resolved by documenting the compliance officer's dual role in the governance framework",
"The second line performing first-line duties undermines the independence required for effective oversight — the second line designs the framework and reviews the first line's work but should not execute CDD itself because it cannot objectively review its own work",
"The compliance officer should move to the first line permanently because CDD expertise belongs in customer-facing operations"
],
correctOption: 2,
explanation: "Lesson 9 defines strict line separation: 1st line executes (performs CDD, monitors customers). 2nd line oversees (designs framework, reviews 1st line work, files SARs). 3rd line audits (independently tests both lines). When 2nd line performs 1st line duties, it loses the independence required to review that work objectively — it would be reviewing its own CDD, creating a self-review conflict. Documentation does not resolve the structural conflict. Moving to the first line would deplete the second line's compliance function.",
source: "Lesson 9: AML/KYC — The Three Lines of Defence"
},
{
question: "A bank's NSFR is calculated at 108%. The CFO asks whether replacing £200M of 2-year term deposits with £200M of 3-month wholesale funding would be acceptable since both provide cash to fund lending. How does this substitution affect the NSFR?",
options: [
"The substitution reduces Available Stable Funding because 2-year term deposits receive a high ASF factor (100%) while 3-month wholesale funding receives 0% ASF — the NSFR would fall significantly, potentially below the 100% minimum",
"The NSFR is unaffected because both funding sources provide the same nominal amount of cash for lending purposes",
"The NSFR would improve because short-term wholesale funding is more flexible and can be rolled over more frequently",
"The substitution only affects the LCR because NSFR measures funding stability over one year and both funding sources mature within that period"
],
correctOption: 0,
explanation: "Lesson 8 explains NSFR ASF factors: term funding >1 year receives 100% ASF. Wholesale funding <6 months receives 0% ASF. Replacing £200M at 100% ASF with £200M at 0% ASF removes £200M from Available Stable Funding, causing a significant NSFR decline. The NSFR is designed to prevent exactly this maturity transformation — funding long-term assets with short-term wholesale funding, which was a primary cause of bank failures in 2008. Same nominal cash does not mean same funding stability. Rollover risk is the problem, not a benefit.",
source: "Lesson 8: Leverage Ratio, LCR, and NSFR"
},
{
question: "A bank's AI transaction monitoring system reduces false positives from 97% to 45% while maintaining the same detection rate. A senior manager proposes eliminating the human review step for alerts the ML model classifies as 'low confidence.' What risk does Chapter 32 identify?",
options: [
"Eliminating human review is acceptable for low-confidence alerts because the ML model's accuracy demonstrates it can reliably distinguish genuine from false alerts",
"The ML model identifies patterns but the reasonable-grounds-to-suspect judgment required for SAR filing is a legal standard that must be applied by a qualified professional — automated dismissal may miss genuine suspicious activity that the model underweights",
"Human review should be eliminated for all alerts because ML has proven more accurate than human analysts at every stage of the investigation process",
"The risk is purely reputational because regulators accept fully automated AML monitoring systems from banks that can demonstrate model validation"
],
correctOption: 1,
explanation: "Lesson 10 explains that ML-based TM systems improve false positive rates (from 95-99% to 40-60%) but the reasonable-grounds-to-suspect judgment remains a legal requirement applied by qualified professionals. Automated dismissal of low-confidence alerts risks missing genuine suspicious activity — ML models are trained on historical patterns and may underweight novel typologies. The SAR filing decision requires human judgment. Regulators do not accept fully automated systems without human review. ML outperforms on pattern detection but not on the legal judgment of suspicion.",
source: "Lesson 10: Transaction Monitoring, ML, and SAR Filing"
},
{
question: "The IFRS 9 transitional arrangements allow banks to phase in the Day 1 impact on CET1 over five years. A bank's Day 1 IFRS 9 impact was £68M. In Year 4, what add-back amount is permitted and what happens in Year 6?",
options: [
"The add-back does not reduce over time — the full £68M is permanently added back to CET1 to offset the transition from IAS 39 to IFRS 9",
"Year 4 add-back is £68M × 25% = £17M; Year 6 introduces a permanent floor of 10% add-back to prevent excessive capital volatility",
"Year 4 add-back is the full £68M because the transition allows banks to defer the entire impact until Year 5",
"Year 4 add-back is £68M × 50% = £34M added to CET1; in Year 6 the transition ends and no add-back remains — the fully loaded impact applies permanently"
],
correctOption: 3,
explanation: "Lesson 11 details the transitional phase: Year 1 (95% add-back), Year 2 (85%), Year 3 (70%), Year 4 (50%), Year 5 (25%). In Year 4, add-back = £68M × 50% = £34M added to CET1. After Year 5, no add-back remains — the fully loaded IFRS 9 impact applies permanently. There is no permanent floor. The add-back diminishes each year by design, forcing banks to build capital incrementally. Investors focus on the fully loaded ratio precisely because the transitional ratio flatters capital positions.",
source: "Lesson 11: Cross-Pillar Integration"
},
{
question: "A bank's provision movement reconciliation shows: Opening provision £110M, impairment charge £28M, write-offs (£12M), recoveries £3M, FX translation (£1M). The calculated closing provision is £128M but the GL shows £130M. What does this £2M difference indicate?",
options: [
"The difference indicates a reconciling item — either a journal entry not captured in the movement analysis or a booking error — and must be identified and resolved before the accounts can be signed off",
"The £2M difference is a normal rounding variance that can be accepted within the bank's materiality threshold without investigation",
"The GL balance is correct and the movement calculation contains an arithmetic error that the Financial Controller should fix",
"The difference represents the time value of money adjustment that is applied to closing provisions but not included in the movement table"
],
correctOption: 0,
explanation: "Lesson 14 establishes that the provision movement must reconcile exactly: opening + charge - write-offs + recoveries ± FX = closing. £110M + £28M - £12M + £3M - £1M = £128M. The GL shows £130M — a £2M break that must be explained. Common causes: a manual journal posted outside the standard movement categories, a PMA booked separately, or a booking error. Any unexplained difference blocks the close. Rounding tolerance does not apply to this reconciliation. The arithmetic in the movement table is correct at £128M.",
source: "Lesson 14: Bank Reconciliation"
},
{
question: "In the banking AI hierarchy described in Chapter 32, Level 1 is Calculation Automation, Level 2 is Analytical Augmentation, and Level 3 is Autonomous Compliance Execution. A bank asks its AI agent to determine whether a borrower's credit quality has significantly increased since origination, justifying a cure from Stage 2 back to Stage 1. Which level is this task?",
options: [
"Level 1 because it involves applying the SICR criteria which are defined rules that can be computed deterministically",
"Level 3 because it requires autonomous cross-pillar orchestration spanning both IFRS 9 and Basel frameworks simultaneously",
"Level 2 because SICR cure assessment requires professional judgment about whether credit quality improvement is sustained and genuine — the agent surfaces the indicators but the credit officer makes the classification decision",
"This task cannot be classified in the banking AI hierarchy because it involves reversing a previous classification rather than making a new one"
],
correctOption: 2,
explanation: "Lesson 1 defines the hierarchy: Level 1 handles deterministic formulas (ECL = PD × LGD × EAD). Level 2 handles judgment-assisted analysis where professional context is required. SICR cure assessment is Level 2 — while quantitative indicators can be checked automatically (rating improvement, DPD returning to zero), the judgment about whether improvement is 'sustained' requires professional assessment of the borrower's prospects, industry conditions, and whether the improvement is structural or temporary. Level 3 involves cross-pillar orchestration across multiple simultaneous frameworks. All classification decisions fit within the hierarchy.",
source: "Lesson 1: The Three Regulatory Pillars of Modern Banking"
},
{
question: "A bank's Standardised Approach RWA calculation includes £45M in past-due loans (more than 90 days). The analyst applies a 100% risk weight. What is the correct risk weight for past-due exposures under the SA?",
options: [
"100% is correct because past-due loans are treated identically to unrated corporate exposures under the standardised approach",
"Past-due loans are excluded from RWA calculation entirely because they are already fully provisioned under IFRS 9",
"50% because collateral backing typically reduces the effective risk weight for past-due loans with security coverage",
"150% — past-due exposures over 90 days receive the highest standardised risk weight, producing RWA of £67.5M instead of £45M"
],
correctOption: 3,
explanation: "Lesson 7 provides the SA risk weight table: past-due loans (>90 DPD) receive 150% risk weight — the highest in the standardised approach. RWA = £45M × 1.50 = £67.5M, not £45M. The 100% weight applies to unrated corporates, not past-due exposures. Collateral may reduce exposure before risk weighting but does not change the 150% weight. Past-due loans are not excluded from RWA — they carry the highest weight precisely because they represent the greatest credit risk.",
source: "Lesson 7: Risk-Weighted Assets — SA and IRB Approaches"
},
{
question: "A bank holds off-balance-sheet committed revolving credit lines of £190M with original maturity greater than one year. The credit conversion factor under SA is 50%. An analyst omits these from the RWA calculation because they are 'not yet drawn.' What has been missed?",
options: [
"The analyst is correct because undrawn commitments do not create credit risk until the borrower actually draws the funds",
"Off-balance-sheet items must be converted to credit-equivalent amounts using the CCF before risk weighting — £190M × 50% = £95M credit equivalent, which is then risk-weighted by the counterparty's asset class",
"The CCF for committed lines is 100% regardless of maturity because the bank cannot refuse to honour a committed facility",
"Off-balance-sheet items are only included in the leverage ratio calculation and are excluded from credit risk RWA under both SA and IRB approaches"
],
correctOption: 1,
explanation: "Lesson 7 explains that off-balance-sheet items must be included in RWA using credit conversion factors. Committed revolving lines >1 year receive a 50% CCF. Credit equivalent = £190M × 50% = £95M. This amount is then risk-weighted based on the counterparty's asset class (e.g., 75% for retail SME). Undrawn commitments do create credit risk — borrowers in difficulty draw down lines before defaulting. The CCF of 50% reflects this empirical observation. 100% CCF applies to direct credit substitutes (guarantees), not revolving lines. Off-balance-sheet items are included in both leverage ratio and credit risk RWA.",
source: "Lesson 7: Risk-Weighted Assets — SA and IRB Approaches"
},
{
question: "A bank calculates its CET1 capital. The components are: ordinary shares £150M, share premium £50M, retained earnings £85M, AOCI -£10M, goodwill £30M, and deferred tax assets dependent on future profitability £15M. What is the CET1 capital after regulatory deductions?",
options: [
"CET1 = £150M + £50M + £85M = £285M; AOCI, goodwill, and DTA are all excluded from CET1 because they are non-equity items",
"CET1 = £150M + £50M + £85M - £10M - £30M = £245M; DTA is not deducted because it represents a future tax benefit that has economic value",
"CET1 = £150M + £50M + £85M - £10M = £275M before deductions; after deducting goodwill (£30M) and qualifying DTA (£15M): CET1 = £230M",
"CET1 = £150M + £50M + £85M - £10M - £30M - £15M = £230M but goodwill should be added back because purchased goodwill represents genuine business value"
],
correctOption: 2,
explanation: "Lesson 6 defines the CET1 calculation: start with ordinary shares + share premium + retained earnings + AOCI (which can be negative). Then deduct goodwill (cannot absorb losses — it disappears in distress), DTAs dependent on future profitability (worthless in loss scenarios), significant investments above threshold, and cash flow hedge reserve. CET1 = (£150M + £50M + £85M - £10M) - £30M - £15M = £230M. DTA deduction is mandatory because these assets have zero value when the bank is loss-making. Goodwill is deducted precisely because it cannot absorb losses — regardless of business value.",
source: "Lesson 6: Basel III/IV Capital Adequacy"
},
{
question: "A bank's CET1 ratio is 7.8%. The hard minimum CET1 requirement is 4.5%. The capital conservation buffer is 2.5%. The D-SIB surcharge is 1.0%. The combined buffer requirement is 8.0%. What is the bank's position and what restriction applies?",
options: [
"The bank is above the 4.5% hard minimum but below the 8.0% combined buffer — the MDA framework restricts dividend payments and discretionary bonus distributions until CET1 is rebuilt above 8.0%",
"The bank is in breach of the hard minimum because 7.8% is below the combined 8.0% requirement, triggering immediate regulatory intervention and resolution proceedings",
"The bank can continue paying full dividends because 7.8% exceeds the 4.5% hard minimum by a comfortable margin",
"The bank must immediately raise capital through a share issuance because falling below the combined buffer is treated as a capital adequacy violation"
],
correctOption: 0,
explanation: "Lesson 6 explains the buffer framework: the hard minimum (4.5%) is the absolute floor — breaching it triggers regulatory intervention. The buffers (CCB 2.5% + D-SIB 1.0% = 3.5%) sit above the minimum. At 7.8%, the bank is above the 4.5% minimum (no breach, no resolution) but below the 8.0% combined requirement. The MDA framework activates — restricting distributions (dividends, bonuses, AT1 coupons) to force capital rebuilding. This is not a breach — it is a restriction designed to prevent further capital erosion. Capital raising may be prudent but is not mandatory at this stage.",
source: "Lesson 6: Basel III/IV Capital Adequacy"
},
{
question: "The banking plugin uses pillar-aware routing rather than jurisdiction-aware routing. A practitioner who mastered the Islamic finance plugin from Chapter 31 asks how the two routing dimensions differ. Which comparison is correct?",
options: [
"Both plugins route identically — the only difference is the domain terminology used in the routing tables",
"The Islamic finance router uses skill chaining while the banking router loads only one skill per query to maintain simplicity",
"The banking router is more advanced because pillar routing is inherently more complex than jurisdiction routing",
"The Islamic finance router routes by jurisdiction (Bahrain AAOIFI vs Malaysia MFRS vs UK IFRS) while the banking router routes by pillar (IFRS 9 vs Basel vs AML) — same architectural pattern, different routing dimension"
],
correctOption: 3,
explanation: "Lesson 2 explicitly compares the two routing dimensions: Islamic finance routes by jurisdiction (same transaction produces different accounting treatment in different countries). Banking routes by pillar (same asset is governed simultaneously by three regulatory frameworks). Both use the same architectural pattern — a router that detects context, loads specialised skills, and chains outputs. Neither is inherently more complex. Both support skill chaining — the banking router chains ifrs9-ecl and basel-capital for cross-pillar queries, just as the Islamic finance router chains product skills with jurisdiction overlays.",
source: "Lesson 2: The Banking Plugin Architecture"
},
{
question: "A bank processes a payment for USD 285,000 from a steel supplier in Dubai. The sanctions screening system flags a partial name match against the OFAC SDN list. The compliance analyst finds the beneficiary name partially matches but the country and business type do not match the sanctioned entity. What is the correct resolution process?",
options: [
"The payment should be blocked permanently because any partial match against a sanctions list requires automatic rejection regardless of other factors",
"The analyst should document the false positive resolution: partial name match identified, country mismatch, business type mismatch, and specific distinguishing factors — then clear the payment with documented rationale for the non-match determination",
"Partial name matches are automatically cleared by the system and do not require human review or documentation",
"The payment should be held for 30 days while the bank requests confirmation from OFAC that the beneficiary is not the sanctioned entity"
],
correctOption: 1,
explanation: "Lesson 10 and the exercises describe sanctions screening false positive resolution. Partial name matches require investigation, not automatic blocking or automatic clearance. The analyst must document the distinguishing factors: country does not match, business type does not match, specific identifying information differs. Documented false positive resolution is a critical compliance record. Automatic blocking without investigation creates unnecessary business disruption. OFAC does not provide individual clearance confirmations for commercial transactions. The 30-day hold has no regulatory basis.",
source: "Lesson 10: Transaction Monitoring, ML, and SAR Filing"
},
{
question: "Chapter 32's Principle 4 states that the Basel IV output floor will reshape the banking industry. A bank with heavily optimised IRB models asks its AI agent to forecast the capital impact. The EBA estimates an average 18-22% RWA increase for large EU/UK banks. For this specific bank with heavily optimised models, what range does Chapter 32 suggest?",
options: [
"The impact may exceed 30% because banks with the most optimised IRB models face the largest absolute increase when the floor constrains their model-derived capital benefit",
"The impact will be less than the 18-22% average because heavily optimised models are already closer to the regulatory floor",
"The impact will be exactly 18-22% because the EBA estimate applies uniformly to all banks regardless of their IRB model sophistication",
"The output floor only affects small banks because large banks receive an exemption based on their systemic importance"
],
correctOption: 0,
explanation: "Lesson 7 states that EBA estimates an average 18-22% RWA increase, but for banks with heavily optimised IRB models, the impact exceeds 30%. This is because heavily optimised models produce the greatest gap between IRB RWA and SA RWA — the floor constrains precisely these banks the most. The impact is not uniform. Less optimised banks may see smaller increases. There is no systemic importance exemption — G-SIBs and D-SIBs face the floor equally. The output floor phase-in from 2025 to 2030 applies globally.",
source: "Lesson 7: Risk-Weighted Assets — SA and IRB Approaches"
},
{
question: "The provision movement tie-out requires that opening provision + impairment charge - write-offs + recoveries ± FX translation = closing provision. A bank reports an impairment charge of £28M in the income statement but the provision only increased by £14M. Assuming £12M in write-offs, £3M in recoveries, and -£1M in FX translation, what explains the apparent discrepancy?",
options: [
"The impairment charge is overstated in the income statement and should be corrected to £14M to match the provision movement",
"There is no discrepancy — the provision movement accounts for write-offs and other items: Opening £110M + charge £28M - write-offs £12M + recoveries £3M - FX £1M = £128M, which is £18M higher than opening, not £14M — the numbers reconcile correctly through the movement formula",
"Write-offs reduce the gross loan balance and the provision simultaneously, so the income statement charge and the provision movement naturally differ by the write-off amount",
"The £14M increase represents the net impairment after tax, while the £28M is the gross pre-tax charge reported in the income statement"
],
correctOption: 2,
explanation: "Lesson 14 explains the provision movement: write-offs simultaneously reduce both the gross loan balance and the provision — they release the provision that was already booked while removing the asset. So a £28M income statement charge does not translate directly to a £28M provision increase because £12M in write-offs offset it. The tie-out: £110M + £28M - £12M + £3M - £1M = £128M (£18M net increase). The income statement shows the full £28M charge; the balance sheet shows the net £18M increase after write-offs. Tax does not create the difference — the P&L charge is pre-tax. The £28M is correct in the income statement.",
source: "Lesson 14: Bank Reconciliation"
},
{
question: "A mid-size UK bank sets up eight scheduled operational tasks using the banking plugin. The daily staging monitor runs at 08:00 and flags a facility where SICR indicators changed overnight — a covenant breach notification was received. What should happen next according to Chapter 32?",
options: [
"The staging monitor automatically moves the facility to Stage 2 and updates the provision without human intervention to ensure real-time balance sheet accuracy",
"The staging monitor flags the covenant breach as a qualitative SICR trigger for credit officer review — the credit officer assesses whether the breach constitutes genuine credit deterioration and makes the staging decision",
"The staging monitor sends a notification but takes no further action until the next quarterly ECL calculation cycle",
"The covenant breach is ignored by the staging monitor because covenants are contractual provisions, not credit risk indicators"
],
correctOption: 1,
explanation: "Lesson 15 describes scheduled tasks and Lesson 3 establishes SICR governance. The daily staging monitor flags SICR triggers — including covenant breaches (a qualitative SICR indicator). But the staging decision requires professional judgment (Principle 2: SICR assessment is irreducibly human). The monitor surfaces the indicator; the credit officer decides whether the breach constitutes genuine deterioration or is technical (e.g., a reporting delay). Automatic staging without human review violates the governance principle. Waiting for the quarterly cycle misses the urgency. Covenant breaches are explicitly listed as SICR triggers.",
source: "Lesson 15: Full Banking Agent — Capstone"
},
{
question: "Principle 5 of banking AI deployment states that 'the interaction between pillars is where the insight lives.' An AML enforcement action results in a £50M fine. A risk analyst models this only as an operational risk charge. What dimensions does Chapter 32 say the analyst has missed?",
options: [
"The analyst has captured the complete impact because AML fines are classified exclusively as operational risk events under the Basel framework",
"The fine should be excluded from all risk models because it is a one-time event that does not reflect ongoing operational risk",
"The analyst should model the fine as a credit risk event because AML failures indicate weak credit underwriting standards",
"The fine is also a capital event (operational RWA increases), a liquidity event (reputational damage may trigger deposit outflows), and a potential IFRS 9 event (if the fine relates to lending that requires reassessment) — modelling only the operational risk charge gives the board an incomplete picture"
],
correctOption: 3,
explanation: "Lesson 15 Principle 5: the interaction between pillars is where the insight lives. An AML fine is simultaneously an operational risk event (fine amount), a capital event (operational RWA increases), and a liquidity event (deposit outflows from reputational damage — the capstone models 2% retail and 5% wholesale outflows). If the AML failure relates to a lending portfolio, it may also trigger IFRS 9 reassessment. Modelling only the operational risk charge misses the capital and liquidity cascades. One-time events are not excluded — they must be modelled for their full cross-pillar impact.",
source: "Lesson 15: Full Banking Agent — Capstone"
},
{
question: "A bank's internal audit team (third line of defence) identifies that the second line's transaction monitoring system is producing 98% false positives and the analyst team is closing alerts without adequate documentation. What is the correct escalation path?",
options: [
"Internal audit reports directly to the Board Audit Committee because the third line's independence requires it to bypass the management line it is auditing — findings about second-line effectiveness go to the board, not to the second line itself",
"Internal audit reports to the Head of Compliance (second line) who is responsible for fixing the monitoring system and improving analyst procedures",
"Internal audit suspends the transaction monitoring system until the false positive rate is reduced to acceptable levels",
"Internal audit takes over the alert review process temporarily because the second line has demonstrated inability to perform its function effectively"
],
correctOption: 0,
explanation: "Lesson 9 establishes that the third line (internal audit) reports to the Board Audit Committee, independent of both the business (first line) and compliance (second line). Reporting findings about second-line effectiveness to the Head of Compliance would compromise independence — audit cannot report to the function it is evaluating. Internal audit does not operate systems or take over operational functions — its role is independent assurance. Suspending the monitoring system would create a regulatory gap. The board receives the findings and directs management to remediate.",
source: "Lesson 9: AML/KYC — The Three Lines of Defence"
},
{
question: "A bank's Head of Credit Risk reviews the quarterly ECL output and notices that Stage 2 loans constitute 8% of the portfolio but generate 55% of the total ECL provision. A junior analyst calls this an error in the model. What is the correct explanation?",
options: [
"The disproportionate provision indicates that the SICR thresholds are too aggressive and too many loans are being classified as Stage 2",
"The analyst is correct because Stage 2 provisions should be proportional to the percentage of the portfolio classified as Stage 2",
"The model is likely correct — Stage 2 loans use lifetime ECL while Stage 1 loans use only 12-month ECL, so a small percentage of Stage 2 loans generates a disproportionately large share of the total provision due to the measurement window expansion",
"Stage 2 provisions should never exceed 30% of total ECL regardless of portfolio composition because regulators cap the Stage 2 contribution"
],
correctOption: 2,
explanation: "Lesson 3 explains the staging cliff effect: Stage 2 uses lifetime ECL while Stage 1 uses 12-month ECL. For a 20-year mortgage, the measurement window expands from 1 year to 20 years — naturally producing 5-10x more provision per loan. A small percentage of Stage 2 loans generating a disproportionate share of total ECL is the expected mathematical outcome, not a model error. Provisions are not proportional to portfolio share because the measurement windows differ fundamentally. SICR thresholds may need review but disproportion alone does not indicate miscalibration. There is no regulatory cap on Stage 2 contribution to total ECL.",
source: "Lesson 3: IFRS 9 ECL — Staging and the ECL Formula"
}
]}
questionsPerBatch={18}
/>
