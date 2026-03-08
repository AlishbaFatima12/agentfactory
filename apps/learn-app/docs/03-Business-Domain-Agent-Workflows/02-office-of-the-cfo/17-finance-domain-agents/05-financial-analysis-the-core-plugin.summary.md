## Summary

This lesson introduces the `financial-analysis` core plugin of the `anthropics/financial-services-plugins` suite. The core plugin centralises eleven data connectors (Daloopa, Morningstar, S&P Global, FactSet, Moody's, MT Newswires, Aiera, LSEG, PitchBook, Chronograph, Egnyte), provides eight commands for professional financial modelling, and includes nine passive skills. Students install the plugin, run `/comps` and `/dcf` hands-on, interpret valuation output, and practise model verification with `/debug-model` and `/check-deck`.

### Key Concepts

- Install order is mandatory: core plugin first, then domain add-ons
- Eight commands producing professional deliverables as working Excel files with live formulas
- Nine passive skills that fire automatically when Claude detects relevant financial context
- Comps and DCF as complementary valuation methodologies -- convergence validates; divergence reveals assumption gaps
- Verification commands (`/debug-model`, `/check-deck`) as production discipline, not optional extras
- Finance concept foundations: WACC, Enterprise Value, LTM, LBO model mechanics

### Skills Practised

- Installing and verifying the core plugin in Cowork
- Running `/comps` and `/dcf` to produce and interpret valuation output
- Reading sensitivity tables to communicate valuation uncertainty
- Running `/debug-model` and `/check-deck` for production verification
- Chaining comps → DCF → LBO in a professional analysis sequence

### Connections

- **Builds on:** Lesson 4 (From Assistant to Agent) -- the KWP/finance plugin architecture with skills vs commands
- **Leads to:** Lesson 6 (Domain Plugins -- From Deals to Portfolios) -- the four function-specific add-on plugins that extend the core
