### Core Concept

Generic finance plugins produce structurally correct but contextually wrong output because they lack institutional knowledge -- jurisdiction-specific tax rules and entity-specific chart of accounts encodings close this gap by transforming a generic assistant into an agent that applies your tax rates, your account codes, and your documentation requirements automatically.

### Key Mental Models

- **Institutional Knowledge Gap**: Plugins know accounting; they do not know your accounting -- the difference between generic IFRS output and output that matches your jurisdiction's tax code, your organisation's chart of accounts, and your firm's documentation standards.
- **"When [condition], [action]" Format**: Every extension instruction follows this single pattern -- the condition defines when the agent applies the knowledge, the action defines what it does. Precision in the condition clause determines whether the extension activates correctly.

### Critical Patterns

- Jurisdiction extensions (Extension 1) apply broadly to all clients in a jurisdiction: tax rates, filing deadlines, penalty provisions, and escalation rules for ambiguous positions.
- Chart of accounts extensions (Extension 2) apply to a single organisation: account codes, intercompany conventions, documentation requirements, and restricted accounts that require senior approval.
- The two extensions layer together -- a quarter-end tax provision uses the chart of accounts extension for correct account codes AND the jurisdiction extension for correct tax rates and deadlines.

### Common Mistakes

- Confusing jurisdiction extensions with entity extensions -- jurisdiction rules (tax rates, deadlines) apply to all clients in that jurisdiction; chart of accounts mappings apply to one specific organisation.
- Trying to encode every possible tax rule -- a practical extension covers the 20% of rules that apply to 80% of the firm's work, with escalation instructions for edge cases.

### Connections

- **Builds on**: Lesson 7's plugin ecosystem and workflows that demonstrated the need for jurisdiction-specific output, and the skill-building methodology from earlier chapters.
- **Leads to**: Lesson 9's three remaining extensions (audit methodology, client entity, compliance calendar) that complete the five-extension architecture.
