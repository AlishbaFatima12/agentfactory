# The Negotiation Playbook; Summary

## Core Concept

The negotiation playbook (`legal.local.md`) transforms the Legal Plugin from a generic document reviewer into an institutional knowledge system by encoding an organisation's specific clause positions, risk tolerances, and jurisdictional requirements. The lesson demonstrates the difference through a before-and-after comparison: the same CloudStack agreement reviewed without a playbook produces generic observations ("cap appears low"), while a playbook-calibrated review produces actionable instructions with specific numbers ("3-month cap = PKR 600,000 against Noor standard of 12 months = PKR 2,400,000 -- 75% below floor"). The playbook is the product; the plugin is infrastructure.

## Key Mental Models

- **Playbook as institutional knowledge**: The `legal.local.md` file encodes years of negotiation experience, risk tolerance, and regulatory obligations into a structured configuration that the plugin reads at review time
- **Three-field clause position structure**: Each clause position defines a STANDARD POSITION (ideal), ACCEPTABLE RANGE (negotiable), and RED ESCALATION triggers (hard limits requiring attorney review)
- **Generic vs. calibrated output**: Without a playbook, the agent reviews against "widely-accepted commercial standards"; with a playbook, it reviews against the organisation's specific positions, producing PKR-denominated analysis instead of qualitative observations
- **MCP connector categories**: Nine category placeholders (`~~calendar`, `~~email`, `~~cloud storage`, etc.) that resolve at runtime to whichever provider is connected, making skills provider-agnostic
- **DPA (Data Processing Agreement)**: A required contract between data controller and processor specifying what data is processed, for what purpose, retention periods, breach notification, and deletion obligations
- **SCCs (Standard Contractual Clauses)**: Pre-approved contractual terms for transferring personal data from strong-protection jurisdictions to those without adequacy decisions -- jurisdiction-specific (EU SCCs, UK IDTA, DIFC/ADGM mechanisms)

## Critical Patterns

- The playbook changes classifications, not just labels -- Limitation of Liability moved from YELLOW to RED because the playbook defines a specific floor (12 months' fees) that the 3-month cap violates
- NDA triage configuration uses a three-tier system (Tier 1 auto-approve, Tier 2 review, Tier 3 escalate to GC) with explicit criteria and response SLAs for each tier
- Different organisations produce radically different output from the same plugin -- PayGulf's DFSA-regulated playbook defaults to DIFC law and higher liability floors compared to Noor Technologies' moderate-risk positions
- The `~~category` placeholder system means swapping cloud storage from Box to SharePoint requires changing connector configuration, not modifying any skill definition
- Without connectors the plugin is a document reviewer; with connectors it becomes a process manager handling intake, calendar sync, and vendor monitoring

## Common Mistakes

- Treating the playbook as a template to fill in abstractly rather than encoding real institutional knowledge from actual negotiation experience and past outcomes
- Configuring clause positions without jurisdiction-specific notes -- a Pakistan-primary organisation needs different data protection positions than a DIFC-regulated entity
- Forgetting to include the NDA configuration section, which controls triage behaviour for `/triage-nda` in later lessons
- Assuming MCP connectors are required for the plugin to function -- connectors expand capability from document review to process management but are not prerequisites
- Not testing the playbook by running `/review-contract` on the same agreement reviewed in L01 to verify that classifications actually changed

## Connections

- The playbook built here drives every classification in the clause-by-clause review demonstrated in **L03** and calibrates cross-border reviews in **L04**
- The NDA Tier 1/2/3 configuration maps directly to the `/triage-nda` workflow in **L05**
- The PayGulf comparison demonstrates why the same plugin produces different output for different organisations -- a pattern that recurs in every domain chapter (banking in Ch 32, Islamic finance in Ch 31)
- MCP connector categories introduced here enable the connected workflows in **L09** (vendor management), **L10** (contract intake agent), and **L11** (compliance calendar)
- The governing principle from **L01** is reinforced: the playbook makes the agent's output more specific, but the attorney still reviews every RED flag and makes the commercial judgment call
