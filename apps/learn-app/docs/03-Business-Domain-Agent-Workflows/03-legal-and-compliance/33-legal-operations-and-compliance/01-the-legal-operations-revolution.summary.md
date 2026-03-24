# The Legal Operations Revolution; Summary

## Core Concept

This lesson introduces legal AI deployment by having students install two plugin layers (Anthropic Legal Plugin and Agent Factory Legal Ops extension) in Cowork and run their first contract review against a vendor SaaS agreement. Through the structured GREEN/YELLOW/RED clause classification output, students discover the governing principle of every legal AI workflow -- the agent reviews, triages, drafts, and flags while the licensed attorney advises, decides, and signs -- not as a lecture but through the ever-present ATTORNEY REVIEW: REQUIRED header in the plugin's output.

## Key Mental Models

- **Two-layer plugin architecture**: The Anthropic Legal Plugin provides base commands and skills for contract review, NDA triage, and compliance; the Agent Factory Legal Ops extension adds jurisdiction overlays and cross-border capabilities on top
- **GREEN/YELLOW/RED classification**: GREEN clauses are acceptable as written, YELLOW clauses should be negotiated before signing, RED clauses must be escalated to an attorney before the agreement can proceed
- **The governing principle**: The agent assists (reviews, triages, drafts, flags) and the licensed professional decides (advises, signs) -- a boundary enforced by professional conduct rules in every jurisdiction
- **Five pre-AI bottlenecks**: Contract review queues, NDA backlogs, compliance monitoring gaps, knowledge management failures, and reporting blind spots -- each mapped to a specific plugin command
- **Prediction-then-compare**: Students predict the review outcome before running `/review-contract`, then compare against the actual output to calibrate their own risk assessment instincts
- **Professional conduct frameworks**: ABA Model Rules (US), SRA Code of Conduct (England/Wales), Pakistan Bar Council rules, and UAE Federal Decree-Law No. 34 all establish the same boundary between AI assistance and attorney responsibility

## Critical Patterns

- The ATTORNEY REVIEW: REQUIRED header appears on every output the Legal Plugin produces -- it is hardcoded and cannot be removed, encoding the governing principle into the tool itself
- Plugin verification uses `/review-contract` auto-complete as the test -- if the command does not auto-complete, installation is incomplete
- MCP connectors are optional and do not affect output quality -- with connectors the agent reads live data, without them documents are uploaded manually
- The contract review that would take 45 minutes of close reading produces structured risk analysis in under two minutes, but the attorney still makes the final call
- Five of ten clauses in the sample agreement required attention -- most students predicted fewer, demonstrating the value of systematic review

## Common Mistakes

- Assuming the plugin output is a final decision rather than a structured triage for attorney review
- Installing only one plugin layer (base without extension, or vice versa) and not verifying with the `/review-contract` auto-complete test
- Skipping the prediction step before running `/review-contract` -- the calibration exercise is where students learn to assess their own risk judgment
- Conflating the GREEN/YELLOW/RED classification with a pass/fail system -- YELLOW items still require attorney confirmation even though they are within negotiable range
- Treating MCP connectors as required rather than optional -- both paths (with and without connectors) produce the same quality output

## Connections

- The GREEN/YELLOW/RED classification system introduced here becomes the foundation for every contract workflow in the chapter, including NDA triage in **L05** and cross-border review in **L04**
- The five bottlenecks map directly to plugin commands explored in subsequent lessons: `/triage-nda` (L05), `/compliance-check` (L06), negotiation playbook (L02), and `/brief` (L03)
- The governing principle discovered here is reinforced in every lesson's output and becomes the architectural constraint for building legal agents in **L10-L11**
- MCP connector categories introduced briefly here are explained in detail in **L02** with the `~~category` placeholder system
- The sample CloudStack agreement returns in **L02** for playbook-calibrated comparison and in **L03** for clause-by-clause redline generation
