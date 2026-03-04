### Core Concept

The financial-services-plugins suite extends its core plugin with four function-specific add-on plugins -- investment-banking, equity-research, private-equity, and wealth-management -- plus two partner-built plugins from LSEG and S&P Global. Each add-on requires the core plugin to be installed first, inheriting its 11 MCP data connectors and financial modelling commands. The add-ons encode domain-specific professional conventions: the investment banking plugin knows M&A deal lifecycle documents, the equity research plugin knows post-earnings note formats, the private equity plugin knows IC memo structure, and the wealth management plugin knows client review workflows.

### Key Concepts

- **Investment-banking plugin (7 commands, 9 skills)**: Handles sell-side and buy-side advisory from teaser and buyer list through CIM, merger model, and deal tracking -- the full M&A engagement lifecycle
- **Equity-research plugin (9 commands, 9 skills)**: Covers post-earnings updates, initiating coverage, thesis maintenance, morning notes, and screening -- sell-side research conventions
- **Private-equity plugin (9 commands, 9 skills)**: Spans the PE deal lifecycle from sourcing and screening through diligence, unit economics, returns analysis, IC memo, and portfolio monitoring
- **Wealth-management plugin (6 commands, 6 skills)**: Supports client meeting prep, financial planning, rebalancing, client reporting, and tax-loss harvesting
- **Partner plugins**: LSEG (fixed income, FX, options, macro) and S&P Global (tearsheets, earnings previews, funding digests) bring proprietary data
- **Five customisation dimensions**: Swap connectors, add firm context, bring templates, adjust workflows, build new plugins
- **Non-negotiable boundaries**: Claude does not provide advice, must be verified, does not validate assumptions, does not replace an audit

### Skills Practised

- Mapping finance workflows to the correct plugin and command
- Evaluating customisation strategies across five dimensions
- Applying professional finance concepts (teaser, IC memo, due diligence, earnings consensus) in plugin context

### Connections

- **Builds on**: Lesson 5 established the core plugin with its shared connectors and financial modelling commands; this lesson explores the four add-on plugins and two partner plugins built on that foundation
- **Leads to**: Lesson 7 covers cross-app orchestration -- how these plugins work together across Excel, PowerPoint, and connected enterprise systems
