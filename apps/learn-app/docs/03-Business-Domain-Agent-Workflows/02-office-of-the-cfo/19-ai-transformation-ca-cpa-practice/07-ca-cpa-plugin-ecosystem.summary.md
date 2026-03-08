### Core Concept

The Cowork plugin ecosystem for CA/CPA practice operates in two layers: Layer 1 (knowledge-work-plugins/finance) provides five core accounting commands covering Domains 1, 3, 4, and 5, while Layer 2 (financial-services-plugins) extends into investment-facing advisory work for Domain 2 -- together they turn the theoretical domain analysis from earlier lessons into executable workflows.

### Key Mental Models

- **Two-Layer Plugin Architecture**: Layer 1 handles core accounting (journal entries, reconciliations, income statements, variance analysis, SOX testing); Layer 2 handles financial services (DCF, comps, LBO). Most general practitioners need only Layer 1; financial services practitioners need both.
- **Four Cowork Mechanisms**: Cowork differs from standard AI chat through direct file access, sub-agent coordination, scheduled tasks, and the plugin ecosystem -- these four mechanisms together enable autonomous multi-step workflows rather than single question-answer exchanges.

### Critical Patterns

- Each plugin command produces a draft working paper, not a signed-off deliverable -- the CA/CPA reviews every output before it enters the accounting system or reaches a client.
- The /sox-testing command automates the documentation framework for Section 404 compliance but does not make the professional assessment of whether a control failure constitutes a material weakness.
- Plugin commands map directly to practice domains: /journal-entry, /reconciliation, /income-statement serve Domain 1; /variance-analysis serves Domain 4; /sox-testing serves Domains 3 and 5; /dcf, /comps, /lbo serve Domain 2.

### Common Mistakes

- Assuming plugin output is a finished deliverable -- every command produces a draft that requires professional review before sign-off.
- Installing both plugin layers when only Layer 1 is needed -- Layer 2 is specifically for investment-facing financial services work, not general accounting practice.

### Connections

- **Builds on**: Lessons 2-6's five-domain analysis that identified which CA/CPA workflows are automatable.
- **Leads to**: Lesson 8's orchestrated workflows that chain these commands into complete processes like the month-end close.
