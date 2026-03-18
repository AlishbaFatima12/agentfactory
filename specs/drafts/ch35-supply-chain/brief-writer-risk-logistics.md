# Writer Brief: Risk + Logistics + Spend (L07 + L08 + L09 + L10)

## Scope

You write 4 lesson files + their 8 sidecars. These lessons cover the analytical and intelligence skills: risk monitoring, logistics analysis, network design, and spend analytics.

## Files to Create

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/
├── 07-supplier-risk-five-dimensions.md
├── 07-supplier-risk-five-dimensions.flashcards.yaml
├── 07-supplier-risk-five-dimensions.summary.md
├── 08-logistics-carrier-performance.md
├── 08-logistics-carrier-performance.flashcards.yaml
├── 08-logistics-carrier-performance.summary.md
├── 09-supply-network-design-scenarios.md
├── 09-supply-network-design-scenarios.flashcards.yaml
├── 09-supply-network-design-scenarios.summary.md
├── 10-spend-analytics-consolidation.md
├── 10-spend-analytics-consolidation.flashcards.yaml
└── 10-spend-analytics-consolidation.summary.md
```

## What to Read

1. **Shared brief**: `specs/drafts/ch35-supply-chain/shared-brief.md`
2. **Architecture spec**: `specs/drafts/ch35-supply-chain/architecture-spec.md` — Sections 5-7
3. **Reference lesson (L03)**: The gold standard
4. **Spec product files**: `products/supplier-risk.md`, `products/logistics-brief.md`, `products/network-design.md`, `products/spend-analysis.md`

### Spec Line Ranges

| Lesson | Read These Spec Lines                                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------------------------------- |
| L07    | Lines 360-457 (Five Risk Dimensions + Tier 2) + Lines 924-1007 (Exercise 3) + supplier-risk.md product file            |
| L08    | Lines 460-548 (Logistics Optimisation — 4 dimensions) + Lines 1010-1074 (Exercise 4) + logistics-brief.md product file |
| L09    | Lines 549-591 (Network Design with MCP) + network-design.md product file                                               |
| L10    | Lines 594-659 (Spend Analytics) + Lines 1077-1146 (Exercise 5) + spend-analysis.md product file                        |

## Content-Specific Notes

### L07: Supplier Risk — Five Dimensions (45 min, Applied)

- **Command**: `/supplier-risk`
- Five risk dimensions: Financial, Operational, Regulatory/Compliance, Geopolitical, Tier 2/Sub-supplier
- The Karachi Industrial Fasteners risk brief example (spec lines 380-428) — shows Tier 2 cascade risk
- **Critical concept**: Tier 2 supplier mapping — the most dangerous gap. A Tier 2 failure cascading through a Tier 1 vendor is the scenario students must understand deeply
- Risk rating change rules: escalation when any dimension reaches red, elevation when two yellows
- **Exercise (Ex 3)**: Lines 924-1007 — build supplier risk dashboard for top 10 vendors
  - Define risk framework, calibrate thresholds
  - Run assessments, create risk matrix
  - Business case for highest-risk supplier mitigation
  - Configure Vendor Health Monitor agent parameters
- **Try With AI**: (1) Generate a risk brief for the student's most critical supplier, (2) Map Tier 2 exposure for a strategic vendor, (3) Design a weekly risk review format for the student's CPO
- Skills metadata: Applied, B1-B2, Apply/Evaluate level

### L08: Logistics and Carrier Performance (40 min, Applied)

- **Command**: `/logistics-brief`
- Four dimensions: Route Efficiency, Carrier Performance, Network Design (intro only — deep dive in L09), Sustainability
- Carrier scorecard format with OTD, damage rate, cost/kg, track-and-trace metrics
- Lane analysis: origin-destination optimisation
- Expedited freight analysis: root cause classification (late supplier, forecast error, inventory positioning, customer emergency, production planning)
- **Key insight**: "Expedited freight > 10% of total spend indicates an upstream supply chain design or process problem, not a logistics problem"
- Use the UK carrier comparison example from the spec (lines 498-547) — DPD, Royal Mail, own fleet, Evri
- **Exercise (Ex 4)**: Lines 1010-1074 — logistics optimisation analysis
  - Carrier performance review, lane optimisation, expedited freight root cause, carbon assessment
- **Try With AI**: (1) Build a carrier scorecard from the student's TMS data, (2) Analyse the student's top 3 lanes for optimisation, (3) Estimate carbon savings from a mode shift
- Skills metadata: Applied, B1, Apply/Analyze level

### L09: Supply Network Design Scenarios (35 min, Applied)

- **Command**: `/supply-network-design` (RENAMED from `/network-design`)
- Network design: when to trigger a review, scenario definition framework, conversational iteration
- MCP-connected optimisation architecture: Claude as conversational interface, MCP server exposes optimisation algorithm
- Use the Pakistan/Dubai DC scenario from the spec (lines 557-590) — three scenarios compared on cost, transit, carbon, capex
- **Fact flag**: Samir Saci "10-12 week studies" — use hedging ("Samir Saci's published work demonstrates that...")
- Conversational what-if patterns: "What if demand increases 20%?", "What if fuel costs rise 15%?", "What's the break-even volume?"
- **No exercise** in this lesson — network design is demonstrated through the Try With AI prompts
- **Try With AI**: (1) Define a network design scenario for the student's own distribution question, (2) Run a what-if sensitivity analysis, (3) Calculate break-even volume for a proposed new facility
- Skills metadata: Applied, B2, Analyze/Evaluate level

### L10: Spend Analytics and Consolidation (45 min, Applied)

- **Command**: `/spend-analysis`
- Three strategic questions: Who are we buying from? What are we paying? What should we be paying?
- Four analysis types: Category spend overview, vendor consolidation, price consistency check, market benchmark
- Use the corrugated cardboard price inconsistency example from the spec (lines 621-658) — 35% price gap across 4 sites
- Savings pipeline format: identified, active, captured
- **Exercise (Ex 5)**: Lines 1077-1146 — the spend consolidation project
  - Category map, consolidation analysis for top 3 categories, market benchmark, RFQ strategy, business case
  - Target: one consolidation initiative worth at least £50,000/year
- **Try With AI**: (1) Analyse the student's highest-spend indirect category for consolidation, (2) Run a price consistency check across business units, (3) Build a one-page business case for a consolidation initiative
- Skills metadata: Applied/Strategic, B1-B2, Apply/Evaluate level

## Exit Criteria

- [ ] 4 lesson files with complete YAML frontmatter
- [ ] 8 sidecar files
- [ ] L09 uses renamed command: `/supply-network-design`
- [ ] L07 includes the full risk brief output format
- [ ] L08 includes the carrier scorecard format
- [ ] L09 uses hedging for Samir Saci claims
- [ ] L10 includes the spend analysis output formats
- [ ] Each lesson has 3 Try With AI prompts
- [ ] Exercises reference correct spec exercise numbers (Ex 3, Ex 4, Ex 5)
- [ ] "Cowork" terminology used throughout
- [ ] No `import` statements for non-existent components
