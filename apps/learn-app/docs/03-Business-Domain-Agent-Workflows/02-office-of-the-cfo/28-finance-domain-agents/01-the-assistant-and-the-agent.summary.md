### Core Concept

Finance is the domain where the distinction between an AI assistant and an AI agent becomes concrete and consequential. **Claude in Excel** is an embedded assistant — a standalone Microsoft add-in that lives in a sidebar within one workbook, reading all sheets, formulas, and data to answer questions, debug errors, and produce professional financial deliverables through pre-built Agent Skills. **Cowork with Excel** is an orchestrating agent — part of the Cowork platform that treats Excel as one node in a multi-step autonomous workflow spanning multiple applications. Both share the same data connector ecosystem; the difference is scope, not capability.

### Key Mental Models

- **Assistant vs Agent Architecture**: An embedded assistant operates within one application (deep companion for modelling work). An orchestrating agent operates across applications (workflow automation from Excel to PowerPoint to Word). The architecture you need depends on whether your deliverable lives inside one tool or spans several.
- **Two Layers of Claude in Excel**: Layer 1 is general workbook intelligence — always active, works on any spreadsheet, provides cell-level traceability. Layer 2 is the pre-built Agent Skills — specialist financial workflows (3-statement models, comps, DCF, due diligence, earnings, initiating coverage, and presentation tools) that produce industry-standard deliverables and can incorporate market data when configured with appropriate connectors.
- **Shared Data Connectors**: Claude in Excel and Cowork do not maintain separate data ecosystems. Any data connector configured in your Claude settings (S&P Global, FactSet, PitchBook, Morningstar, and others) works in both environments. The distinction is scope — one workbook versus multi-app orchestration.

### Critical Patterns

- The chapter is structured in three parts: Part One covers Claude in Excel (the embedded assistant), Part Two covers Cowork finance plugins (the orchestrating agent), and Part Three covers enterprise extensions using the Knowledge Extraction Method from Chapter 27
- Claude in Excel supports multiple platforms: web, Windows (365), Mac (16.46+), and iPad (2.51+)
- Spreadsheets from untrusted sources carry prompt injection risks — Claude reads cell values, formulas, and comments, so malicious instructions can be hidden in workbooks shared during deal processes and audits

### Common Mistakes

- Assuming Claude in Excel and Cowork use separate connector ecosystems — they share the same data connectors; the difference is architectural scope
- Confusing the pre-built Agent Skills with general chat capabilities — the Agent Skills are purpose-built financial workflows, not conversational features
- Thinking Claude in Excel requires the Cowork platform — it is a standalone Microsoft add-in that works independently

### Connections

- **Builds on**: Chapter 27 taught the Knowledge Extraction Method for surfacing tacit knowledge; Chapter 26 taught SKILL.md architecture and the Agent Skills Pattern — this lesson applies both to the finance domain
- **Leads to**: Lesson 2 begins hands-on work with Claude in Excel's general workbook intelligence — understanding models you did not build
