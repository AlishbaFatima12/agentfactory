### Core Concept

The four-stage reconciliation workflow separates what can be automated from what requires judgment: data extraction and three-way matching are rules-based; commercial negotiations and systematic pattern investigation require people. Partial payment — pay matched lines immediately, hold only disputed amounts — is an operational principle, not a policy option.

### Key Mental Models

- **Four-Stage Pipeline**: Document Intelligence → Three-Way Match → Exception Routing → Audit and Pattern Monitoring — each stage feeds the next; exception routing only works when tolerance rules (Lesson 5) are already configured
- **Partial Payment Principle**: Withholding an entire invoice over one disputed line is operationally incorrect — it damages vendor relationships and distorts cash flow
- **Pattern vs. Incident**: The Audit stage runs weekly pattern detection across batches; a pattern of the same exception type from one vendor signals a data alignment problem, not a series of individual invoices to approve

### Critical Patterns

- Bank detail change on an invoice = fraud signal — stop, verify through a separate channel before any payment
- Run `/invoice-reconcile` on a batch, not one invoice at a time — pattern detection only works across volume
- Calculate partial payment for every exception invoice: identify matched lines, approve those immediately, hold only the disputed amount
- The `invoice-reconciliation-agent` automates the four stages continuously — the human boundary is commercial negotiation and threshold escalation, not rule-based matching

### Common Mistakes

- Holding entire invoices when only one line is disputed — the matched portion should be paid on time
- Treating bank detail changes as administrative updates — always treat as a fraud signal requiring independent verification
- Running reconciliation in isolation from tolerance rules — Stage 3 exception routing depends on the category-specific rules configured in Lesson 5

### Connections

- **Builds on**: Three-way match tolerance rules (Lesson 5) — those rules are the engine Stage 3 runs against
- **Leads to**: Persistent agents (Lesson 12) — the `invoice-reconciliation-agent` is the automated version of this workflow
