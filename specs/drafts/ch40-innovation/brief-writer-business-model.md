# Writer Brief: Business Model + Market + GTM (L08 + L09 + L10 + L11)

**Writer**: writer-business-model
**Lessons**: L08 (Business Model Canvas), L09 (Unit Economics), L10 (Competitive Intelligence), L11 (Go-to-Market Strategy)
**Total files**: 12 (4 lessons + 4 flashcards + 4 summaries)
**Exercises**: 3 (Ex 4 in L08, Ex 5 in L09, Ex 7 in L11)

**Read before writing**:

1. `specs/drafts/ch40-innovation/shared-brief.md` — shared rules
2. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec
3. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 643-877 (BMC + Financial Model) + lines 1178-1349 (Market + GTM) + lines 1587-1703 (Exercises 4, 5) + lines 1764-1817 (Exercise 7)
4. `specs/drafts/chap29_innovation/innovation-skills/products/canvas.md`
5. `specs/drafts/chap29_innovation/innovation-skills/products/financials.md`
6. `specs/drafts/chap29_innovation/innovation-skills/products/market.md`
7. `specs/drafts/chap29_innovation/innovation-skills/products/gtm.md`

---

## L08: Business Model Canvas

**File**: `08-business-model-canvas.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/08-business-model-canvas.md`
**Duration**: 45 min
**Spec lines**: 643-761 + 1587-1641 (Exercise 4)
**Primary skill**: `/canvas`

### Content Structure

1. **Opening** (2-3 paragraphs): Alexander Osterwalder's 9 building blocks. Traditionally requires a workshop; with AI you build a first-draft in one session and stress-test immediately. Transition: "You have validated assumptions (L05-L07). Now you map how the entire business works."

2. **The 9 Blocks** (from canvas.md output structure):
   - Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, Cost Structure
   - For each: what it answers, what makes it strong/weak
   - Value Proposition quality standard from canvas.md lines 114-125

3. **AP Example — Full Canvas** (spec lines 665-746):
   - Complete 9-block canvas with evidence quality per block
   - Canvas health summary (which blocks validated, partially validated, hypothetical)

4. **Stress-Testing** (spec lines 749-759):
   - 3 adversarial scenarios: WhatsApp API discontinuation, large ERP vendor launches competitor, developers resign
   - For each: impact assessment, mitigation, survival probability

5. **Alternative Business Model Exploration** (from canvas.md lines 127-138):
   - Structural variations: subscription vs. usage-based, enterprise vs. professional, platform vs. marketplace
   - Show 3 alternatives with trade-off analysis

6. **Exercise: BMC Build** (Ex 4, spec lines 1587-1641):
   - Step 1: First-draft canvas using `/canvas` (20 min)
   - Step 2: Canvas stress-test (20 min)
   - Step 3: Alternative business model exploration (20 min)
   - Step 4: Revenue model design (30 min)
   - Deliverable: Complete BMC with stress-test, 3 alternatives, revenue model with unit economics

7. **Try With AI** (3 prompts)

8. **Intrapreneurship note**: "For intrapreneurs, the canvas looks different: Customer Segments may be internal teams. Revenue Streams may be cost savings or efficiency gains. Key Partnerships are other departments. The framework still works — just translate the business language to your organisational context."

### Frontmatter Notes

- `chapter: 40`, `lesson: 8`, `duration_minutes: 45`
- Skills: Build a Business Model Canvas with evidence quality assessment (B1 Apply); Stress-test a canvas with adversarial scenarios (B1 Analyze)
- Cognitive load: 4 concepts (9 canvas blocks, evidence quality per block, canvas health summary, adversarial stress-testing)

---

## L09: Unit Economics and Financial Modelling

**File**: `09-unit-economics-financial-modelling.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/09-unit-economics-financial-modelling.md`
**Duration**: 45 min
**Spec lines**: 763-877 + 1644-1703 (Exercise 5)
**Primary skill**: `/financials`

### Content Structure

1. **Opening**: "If you cannot make money on one customer, you cannot make money on a thousand." Unit economics first, then projections. Transition: "Your canvas has Revenue Streams and Cost Structure blocks. Now you model whether they actually work."

2. **Unit Economics Foundation** (spec lines 770-857):
   - CAC (Customer Acquisition Cost) — distinguish founder-led vs. sustainable
   - LTV (Lifetime Value) — the churn dependency
   - LTV:CAC ratio — assessment thresholds (<3 poor, 3-5 acceptable, >5 strong, >10 exceptional)
   - Payback period
   - Breakeven customer count

3. **The Churn Warning** (from financials.md lines 98-106):
   - 10% annual churn → 10-year lifetime, 10x LTV multiplier
   - 40% annual churn → 2.5-year lifetime, 2.5x multiplier
   - "A 4x difference in churn produces a 4x difference in LTV"
   - If churn is ASSUMED: flag as HIGH UNCERTAINTY

4. **AP Example — Full Unit Economics** (spec lines 792-856):
   - CAC $275 sustainable, LTV $36K, 131:1 ratio, 0.6-month payback, breakeven at 10 customers
   - Key warnings: churn assumed, CAC at scale will be higher, WhatsApp API cost variable

5. **Three-Scenario Revenue/Runway Model** (spec lines 859-877):
   - Base, Conservative, Optimistic
   - Month-by-month: new customers, total, MRR, burn, cash balance, runway
   - Breakeven dates, fundraising triggers

6. **Sensitivity Analysis + Series A Readiness** (from financials.md lines 108-122):
   - How breakeven shifts if CAC 2x, churn 2x, revenue 30% lower, growth halved
   - Series A benchmarks: $1M-$3M ARR, >100% YoY growth, <10% annual churn, >3x LTV:CAC

7. **Exercise: Unit Economics + Financial Model** (Ex 5, spec lines 1644-1703):
   - Step 1: Unit economics foundation using `/financials`
   - Step 2: 18-month model (3 scenarios)
   - Step 3: Fundraising model
   - Step 4: Sensitivity analysis
   - Deliverable: Unit economics table, 18-month model (3 scenarios), fundraising model, sensitivity analysis

8. **Try With AI** (3 prompts)

### Frontmatter Notes

- `chapter: 40`, `lesson: 9`, `duration_minutes: 45`
- Skills: Build unit economics model with CAC/LTV/payback analysis (B2 Apply); Create a three-scenario financial model with runway and fundraising triggers (B2 Analyze)
- Cognitive load: 6 concepts (CAC founder vs. sustainable, LTV at different churn rates, LTV:CAC ratio, breakeven, 3-scenario model, sensitivity analysis) — at B2 level, appropriate

---

## L10: Competitive Intelligence and Market Sizing

**File**: `10-competitive-intelligence-market-sizing.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/10-competitive-intelligence-market-sizing.md`
**Duration**: 40 min
**Spec lines**: 1178-1222
**Primary skill**: `/market`

### Content Structure

1. **Opening**: Competitive intelligence and market sizing are not academic exercises — they are the foundation of the TAM/SAM/SOM slide in your pitch (L12) and the validation of your pricing (L09). Transition: "You have a financial model. Now you validate whether the market is large enough and your positioning is defensible."

2. **Competitive Landscape Scan** (from market.md):
   - Direct competitors (same problem, same customer)
   - Indirect alternatives (different approach, including "do nothing" and "Excel")
   - For each: positioning, pricing, strengths vs. us, weaknesses vs. us, threat level
   - Strategic recommendation: where to win, where to avoid, differentiation to defend

3. **Bottom-Up Market Sizing** (5-step method from market.md lines 70-93):
   - Count → Qualify → Price → Calculate (TAM/SAM/SOM) → Value capture validation
   - Why bottom-up > top-down (investors are sceptical of analyst TAM claims)
   - The 10% rule: price should be <10% of value delivered

4. **Moat Assessment** (6 types from market.md lines 128-156):
   - Data, Switching Costs, Network Effects, Brand, Regulatory, Distribution
   - Which moats the venture is building vs. aspirational

5. **AP Example**: Show competitive landscape scan and bottom-up sizing prompts from spec

6. **Try With AI** (3 prompts):
   - Reproduce: Run competitive intelligence for AP automation
   - Adapt: Run for a different market/geography
   - Apply: Run for student's venture

7. **Intrapreneurship note**: "For intrapreneurs, 'competitors' include other internal projects, and 'market size' may be measured in internal users or cost savings rather than revenue."

### Frontmatter Notes

- `chapter: 40`, `lesson: 10`, `duration_minutes: 40`
- Skills: Conduct competitive landscape analysis (B1 Analyze); Build bottom-up market size model with TAM/SAM/SOM (B1 Apply)
- Cognitive load: 5 concepts (competitive landscape structure, bottom-up sizing 5-step, TAM/SAM/SOM, value capture ratio, 6 moat types)

---

## L11: Go-to-Market Strategy

**File**: `11-go-to-market-strategy.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/11-go-to-market-strategy.md`
**Duration**: 45 min
**Spec lines**: 1226-1349 + 1764-1817 (Exercise 7)
**Primary skill**: `/gtm`

### Content Structure

1. **Opening**: GTM is where strategy meets execution. Transition: "You know the market (L10) and have the financials (L09). Now you design how to reach 50 customers."

2. **ICP Definition** (from gtm.md lines 47-84):
   - Company (sector, size, geography, technology, structure)
   - Person (role, seniority, what they care about, how they buy)
   - Buying Trigger (the event that makes them ready to buy NOW)
   - Signals (how to identify them)
   - NOT a fit (explicitly exclude)

3. **Positioning Statement** (from gtm.md lines 86-98):
   - For / Who / Our product / That / Unlike / We format

4. **Channel Strategy** (6 archetypes from gtm.md lines 101-144):
   - Founder-led outreach, Content/thought leadership, Community/associations, Referral, Inside sales, Partnerships
   - Ranked by CAC efficiency, scalability, speed

5. **AP Example — Full GTM** (spec lines 1248-1349):
   - ICP: CFOs at manufacturing/distribution $800M-$3B
   - Positioning statement
   - 4-channel strategy ranked by CAC
   - 7-step sales process
   - Pricing strategy (value-based, anchor high, annual prepay)
   - Customer success programme (Day 1-90)

6. **Pricing Strategy Rules** (from gtm.md lines 146-166):
   - Anchor high, justify, then tier
   - Value-based: <10% of value delivered
   - Annual prepay preferred
   - Paid trial > free trial

7. **Exercise: GTM Strategy Sprint** (Ex 7, spec lines 1764-1817):
   - Step 1: ICP definition using `/gtm`
   - Step 2: Channel strategy
   - Step 3: Sales process design
   - Step 4: 90-day GTM calendar with decision gates at Day 30 and Day 60
   - Deliverable: ICP document, ranked channel strategy, 7-step sales process, 90-day GTM calendar

8. **Try With AI** (3 prompts)

### Frontmatter Notes

- `chapter: 40`, `lesson: 11`, `duration_minutes: 45`
- Skills: Define an ICP with buying trigger and exclusion criteria (B2 Apply); Design a multi-channel GTM strategy ranked by CAC efficiency (B2 Create)
- Cognitive load: 5 concepts (ICP with trigger, positioning statement, 6 channel archetypes, value-based pricing, 90-day calendar)

---

## Exit Criteria

- [ ] L08 includes all 9 BMC blocks with evidence quality and stress-testing
- [ ] L09 includes the churn warning standard and 3-scenario model
- [ ] L10 includes bottom-up sizing (5-step) and 6 moat types
- [ ] L11 includes ICP with buying trigger, 6 channel archetypes, pricing rules
- [ ] All AP worked examples use the spec's sample outputs
- [ ] Each lesson opens with transition from prior lesson and references forward
- [ ] All 12 files written (4 lessons + 4 flashcards + 4 summaries)
- [ ] Full YAML frontmatter on all 4 lessons
- [ ] "Cowork" terminology throughout
- [ ] No `import` statements for non-existent components
