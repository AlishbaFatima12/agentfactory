## Summary

This lesson introduces the `financial-analysis` core plugin of the `anthropics/financial-services-plugins` suite -- the foundation that every add-on plugin depends on. The core plugin centralises all 11 MCP data connectors (Daloopa, Morningstar, S&P Global, FactSet, Moody's, MT Newswires, Aiera, LSEG, PitchBook, Chronograph, Egnyte), provides eight commands for professional financial modelling (/comps, /dcf, /lbo, /3-statements, /competitive-analysis, /debug-model, /check-deck, /ppt-template), and includes nine passive skills that apply financial conventions automatically. The shared-core architecture means install order is mandatory: core first, then add-ons.

### Key Concepts

- Shared-core architecture: all MCP connectors configured once in the core plugin and inherited by all add-ons
- Mandatory install order: core plugin must be installed before any function-specific add-on
- Eight commands producing professional deliverables as working Excel files with live formulas
- Nine passive skills that fire automatically when Claude detects relevant financial context
- Five end-to-end workflow patterns spanning the suite (Research to Report, Spreadsheet Analysis, Financial Modelling, Deal Materials, Portfolio to Presentation)
- Finance concept foundations: WACC, Enterprise Value, LTM, LBO model mechanics

### Skills Practised

- Navigating a multi-plugin ecosystem with shared dependencies
- Mapping financial modelling tasks to the correct core command
- Interpreting comps and DCF outputs for decision support
- Reading sensitivity tables to communicate valuation uncertainty

### Connections

- **Builds on:** Lesson 4 (From Assistant to Agent) -- the KWP/finance plugin architecture with skills vs commands
- **Leads to:** Lesson 6 (Domain Plugins -- From Deals to Portfolios) -- the four function-specific add-on plugins that extend the core
