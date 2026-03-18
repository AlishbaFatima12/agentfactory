### Core Concept

The supply-chain plugin is not a collection of generic AI tools — it is an organisation-specific intelligence layer whose value depends on the `supply-chain.local.md` configuration file that encodes your policies, thresholds, and vendor context into every skill invocation.

### Key Mental Models

- **Plugin = Skills + Agents + Config**: The plugin's three components work together — 8 skills for on-demand analysis, 5 agents for continuous monitoring, and `supply-chain.local.md` as the organisational policy layer that makes both work for your context
- **MCP = Live Data vs. Manual Data**: Without MCP, you provide data manually in prompts; with MCP, skills pull from live ERP, AP, and logistics systems automatically
- **Renamed Commands as Collision Avoidance**: Three commands use different names from their spec to avoid conflict with Anthropic-owned surfaces — always use the plugin names

### Critical Patterns

- Install via `claude plugin install supply-chain@agentfactory-business`, then run a verification prompt immediately
- Use `/invoice-reconcile` (not `/reconcile`), `/vendor-communicate` (not `/communicate`), `/supply-network-design` (not `/network-design`)
- Populate `supply-chain.local.md` with classification tier counts and invoice thresholds before the first skill invocation — defaults work but your organisation's specifics make the output accurate
- Verify installation with the test `/vendor-assess` prompt before attempting real vendor data

### Common Mistakes

- Assuming the plugin auto-connects to ERP after installation — MCP requires explicit endpoint configuration separate from plugin install
- Using the spec command names (`/reconcile`, `/communicate`) — these may collide with other surfaces and produce unexpected behaviour
- Waiting until `supply-chain.local.md` is fully configured before starting — start with what you know; the plugin works with defaults

### Connections

- **Builds on**: Three structural failures (Lesson 1) — each of the 8 skills addresses one or more failures directly
- **Leads to**: Vendor classification (Lesson 3) — the first skill invocation in the chapter workflow
