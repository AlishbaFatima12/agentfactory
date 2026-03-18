### Core Concept

Network design is now conversational — scenarios that once required periodic consulting engagements can be re-evaluated in real time as assumptions change. The `/supply-network-design` skill provides a conversational interface to a MCP-connected optimisation backend, but the discipline of stating objectives and trigger conditions explicitly is what makes the output actionable.

### Key Mental Models

- **Status Quo as Scenario A**: Always include the current network as the baseline — a scenario recommendation is only meaningful relative to what you are already doing
- **Objective Function in Rank Order**: State whether you are optimising for cost, service level, or resilience — in what order of priority. Ambiguous objectives produce ambiguous recommendations.
- **Trigger Events Drive Reviews**: Demand shift >20%, transport cost increase >15%, new geographies — these are the conditions that warrant a review, not calendar dates

### Critical Patterns

- Use `/supply-network-design` (not `/network-design`) — the renamed command is the plugin surface
- Define the objective function before generating scenarios — "minimise cost while maintaining service level" is incomplete without specifying the priority order
- Run what-if questions after the initial recommendation to test robustness: demand variation, fuel cost increase, route disruption
- The inflection point analysis (which scenario provides the best cost-to-payback ratio) is the deliverable, not the optimisation output itself

### Common Mistakes

- Running scenarios without defining trigger conditions — a scenario analysis without documented justification for the review is hard to defend internally
- Accepting the first scenario recommendation without what-if testing — the recommendation is only as robust as the assumptions it was built on
- Treating network design as a one-time exercise — trigger events should initiate a review, not the annual planning cycle

### Connections

- **Builds on**: Logistics and carrier performance (Lesson 8) — lane data and carrier performance feed the network parameters
- **Leads to**: Spend analytics (Lesson 10) — network decisions determine procurement volumes and consolidation opportunities by geography
