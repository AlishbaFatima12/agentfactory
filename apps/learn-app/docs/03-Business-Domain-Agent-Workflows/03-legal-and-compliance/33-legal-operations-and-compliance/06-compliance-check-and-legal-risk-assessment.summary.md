# Compliance Check and Legal Risk Assessment; Summary

## Core Concept

This lesson teaches proactive compliance assessment: evaluating regulatory requirements _before_ launching a product or entering a market, rather than reacting after legal exposure exists. Using `/compliance-check`, students learn to identify applicable regulations across multiple jurisdictions for a planned business action, then quantify each compliance gap using a 5x5 severity-by-likelihood risk matrix that produces prioritised, colour-coded action plans (GREEN/YELLOW/ORANGE/RED). The shift from reactive to proactive compliance is the central insight: hours spent on pre-launch assessment prevent millions in enforcement penalties.

## Key Mental Models

- **Three Compliance Modes**: Reactive (`/review-contract` for existing documents), Monitoring (`/brief topic:regulatory` for tracking changes), and Proactive (`/compliance-check` for planned actions): each serves a distinct purpose and the right mode depends on timing relative to the business action.
- **5x5 Risk Matrix**: Severity (1-5) multiplied by Likelihood (1-5) produces a score from 1-25, classified into four bands; GREEN (accept), YELLOW (monitor), ORANGE (mitigate), RED (escalate immediately). Transforms subjective "feels risky" into quantified assessment.
- **Multi-Jurisdiction Cascade**: A single business action (AI document processing) can trigger regulatory obligations in three or more jurisdictions simultaneously (PDPA 2023, UAE PDPL, UK GDPR), each with independent penalties.
- **Proactive vs Reactive Cost Asymmetry**: Pre-launch compliance costs hours; post-launch enforcement costs millions. A PKR 25 million PDPA penalty or 4% global turnover UK GDPR fine dwarfs the cost of running `/compliance-check`.
- **Risk-Ordered Priority Actions**: The matrix converts a flat compliance checklist into a sequenced action plan; RED items block launch, YELLOW items need attention but allow phased rollout, GREEN items fold into normal operations.
- **Regulated Entity Threshold**: The same framework produces materially different outputs depending on the organisation's regulatory status; PayGulf (DFSA-regulated) generates two RED risks versus Noor Technologies' one RED, demonstrating that regulatory context changes risk severity.

## Critical Patterns

- Describe the planned action with specificity (data types, jurisdictions, third parties, technology) to get useful compliance output: vague prompts produce vague assessments.
- Always check for "hidden" regulations that are easy to miss: the Electronic Transactions Ordinance surfaced for Noor despite not being an obvious data protection law.
- Cross-border data flows to third-party processors (e.g., US-based OCR provider) consistently produce RED risks because they trigger transfer safeguards in every applicable jurisdiction simultaneously.
- The compliance assessment identifies _what_ regulations apply; the risk matrix quantifies _how much risk_ each gap creates: these are two distinct steps, not one.
- Every compliance output requires licensed attorney review: the agent structures the analysis, but a human attorney confirms regulatory interpretation and signs off.

## Common Mistakes

- Assuming business documents (invoices, bills of lading) do not contain personal data: they include names, addresses, phone numbers, and bank details that trigger data protection requirements.
- Treating all compliance gaps as equal priority instead of scoring and classifying them: a RED cross-border transfer risk and a GREEN document retention gap require fundamentally different responses.
- Running `/compliance-check` with insufficient detail about data flows and third parties, which causes the assessment to miss applicable regulations.
- Confusing proactive compliance (`/compliance-check` before launch) with reactive review (`/review-contract` for existing agreements): using the wrong tool produces the wrong type of analysis.
- Skipping the risk matrix step after a compliance assessment and treating the output as a simple checklist rather than a prioritised action plan.

## Connections

- Builds directly on the GREEN/YELLOW/RED classification system introduced in L03 (contract review), extending it from qualitative flags to a quantified 5x5 scoring framework.
- The `/compliance-check` command follows the same input-output pattern students learned with `/review-contract` (L03) and `/triage-nda` (L05), reinforcing the consistent command structure across the Legal Plugin.
- The multi-jurisdiction analysis connects to L04 (cross-border pitfalls), where students first encountered the complexity of overlapping regulatory regimes.
- The priority actions output feeds into L09 (meeting prep and vendor management), where compliance findings become negotiation talking points and action items.
- The PayGulf worked example establishes a recurring comparison pattern (Noor vs PayGulf) that continues through later lessons, showing how organisational context changes legal analysis.
