# Writer Brief: Design Thinking + Lean Startup (L04 + L05 + L06 + L07)

**Writer**: writer-design-lean
**Lessons**: L04 (Hundred Ideas), L05 (Assumption Stack), L06 (MVP), L07 (Build-Measure-Learn)
**Total files**: 12 (4 lessons + 4 flashcards + 4 summaries)
**Exercises**: 3 (Ex 1 in L04, Ex 3 part 1 in L05, Ex 3 part 2 in L06)

**Note**: L03 (Customer Discovery) is written by the reference-builder, not this writer. Your L04 depends on L03's outputs (HMW problem statement, discovery synthesis).

**Read before writing**:

1. `specs/drafts/ch40-innovation/shared-brief.md` — shared rules
2. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec
3. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 399-641 (Design Thinking: Ideate + Lean Startup: all) and lines 1419-1583 (Exercises 1, 3)
4. `specs/drafts/chap29_innovation/innovation-skills/products/idea.md` — /idea skill spec
5. `specs/drafts/chap29_innovation/innovation-skills/products/hypothesis.md` — /hypothesis skill spec
6. `specs/drafts/chap29_innovation/innovation-skills/products/validate.md` — /validate skill spec
7. L03 reference lesson output (once available) — your L04 opening references L03's discovery outputs

---

## L04: Hundred Ideas, One Hour

**File**: `04-hundred-ideas-one-hour.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/04-hundred-ideas-one-hour.md`
**Duration**: 40 min
**Spec lines**: 399-431 (Ideate section) + 1419-1487 (Exercise 1)
**Primary skill**: `/idea`

### Content Structure

1. **Opening** (2-3 paragraphs): Why brainstorms underperform. Cognitive limitations bound creative range. AI removes these constraints. Transition: "In Lesson 3, you defined the problem worth solving. Now you generate solutions."

2. **The 100-Idea Sprint Methodology**:
   - Why 100 (best ideas in the second half; early ideas are obvious)
   - The 10 categories: Product, Business Model, Distribution, Analogy, Technology, Crazy/10x, Boring, Contrarian, Partnership, Incumbent
   - Use the AP example: show the prompt from spec lines 406-419

3. **DVF Scoring Framework**:
   - Desirability, Viability, Feasibility — definitions and scoring (GREEN/YELLOW/RED)
   - From idea.md: what makes a STRONG vs. WEAK idea
   - The "Why Now?" test — valid reasons from idea.md lines 120-128

4. **Shortlisting** (from spec lines 422-430):
   - Filter 100 → top 10
   - Single selection with 2-paragraph case

5. **Pressure Testing**:
   - Devil's advocate: 5 strongest arguments against
   - For each: what must be proven to overcome it
   - AP example: show the shortlisting + pressure test output

6. **Exercise: Idea Generation Sprint** (Ex 1, spec lines 1419-1487):
   - Step 1: Define HMW problem statement (10 min) — use output from L03 exercise
   - Step 2: 100-idea sprint using `/idea` (30 min)
   - Step 3: Shortlisting with DVF (15 min)
   - Step 4: Pressure test selected idea
   - Deliverable: HMW statement, 100 ideas, shortlist of 10, one selected idea with pressure test

7. **Try With AI** (3 prompts):
   - Reproduce: Run 100-idea sprint for AP automation problem
   - Adapt: Run for a different industry problem
   - Apply: Run for student's own HMW from L03

8. **Intrapreneurship note**: "For intrapreneurs, the Incumbent Ideas category is especially relevant — your own organisation is the incumbent. What would your company do with this problem if it noticed?"

### Frontmatter Notes

- `chapter: 40`, `lesson: 4`, `duration_minutes: 40`
- Skills: Generate 100 structured ideas using the 10-category framework (B1 Applied); Apply DVF scoring to filter ideas to an actionable shortlist (B1 Evaluate)
- Cognitive load: 5 concepts (100-idea sprint, 10 categories, DVF framework, "Why Now?" test, pressure testing)

---

## L05: The Assumption Stack

**File**: `05-the-assumption-stack.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/05-the-assumption-stack.md`
**Duration**: 40 min
**Spec lines**: 432-519 (Assumption Stack section) + 1533-1573 (Exercise 3 part 1)
**Primary skill**: `/hypothesis`

### Content Structure

1. **Opening** (2-3 paragraphs): The most dangerous thing an entrepreneur can do is build for six months before testing their core assumptions. Transition: "In Lesson 4, you selected an idea. Now you make every bet in that idea explicit."

2. **Assumption Categories** (from hypothesis.md lines 68-93):
   - Customer, Problem, Solution, Business Model, Technical
   - Aim for 20-30 assumptions (fewer than 15 = not thinking hard enough)

3. **Three-Tier Risk Scoring**:
   - TIER 1 — EXISTENTIAL: if wrong, pivot required
   - TIER 2 — SERIOUS: product changes significantly
   - TIER 3 — IMPORTANT: optimisation required
   - Risk scoring rule: "If I discovered this was wrong tomorrow, would I change direction?"

4. **Evidence Quality**:
   - ASSUMED → ANECDOTAL → VALIDATED
   - Validation hierarchy from validate.md lines 103-117

5. **Test Design Hierarchy (MVT)** (from hypothesis.md lines 133-153):
   - Conversation → Landing Page → Concierge → Wizard of Oz → Functional MVP
   - Rule: "Go to Level 5 only if Levels 1-4 cannot test the assumption"

6. **AP Example**: Full assumption map (A-001 through A-010) from spec lines 456-518
   - Show TIER 1 (existential): price validation, AI accuracy, buying authority
   - Show TIER 2 (serious): WhatsApp API, adoption, ERP integration
   - Show TIER 3 (important): CAC, customer success, churn, NPS
   - Show the test priority order

7. **Exercise: Hypothesis Stress-Test** (Ex 3 part 1, spec lines 1533-1573):
   - Step 1: Assumption brainstorm (target 20-30 using 5 categories)
   - Step 2: Risk scoring and test design using `/hypothesis`
   - Step 3: Test prioritisation — 4-week validation plan
   - Deliverable: Full assumption map (20+ assumptions) with risk scores, 4-week validation plan

8. **Try With AI** (3 prompts):
   - Reproduce: Build assumption map for AP automation SaaS
   - Adapt: Build assumption map for a different venture
   - Apply: Build assumption map for student's selected idea from L04

### Frontmatter Notes

- `chapter: 40`, `lesson: 5`, `duration_minutes: 40`
- Skills: Build a three-tier assumption map for a venture (B1 Apply/Analyze); Design minimum viable tests ordered by cost (B1 Apply)
- Cognitive load: 5 concepts (assumption map, 3 risk tiers, evidence quality, MVT hierarchy, test prioritisation)

---

## L06: MVP — The Minimum That Validates

**File**: `06-mvp-the-minimum-that-validates.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/06-mvp-the-minimum-that-validates.md`
**Duration**: 40 min
**Spec lines**: 521-615 (MVP section) + 1573-1583 (Exercise 3 part 2)
**Primary skill**: `/hypothesis` (MVP scoping mode)

### Content Structure

1. **Opening**: "The MVP is the most misunderstood concept in startup methodology." It is not the minimum product — it is the minimum product that tests the most critical assumption at the lowest possible cost. Transition: "In Lesson 5, you mapped your assumptions. Now you scope the smallest thing that tests the most dangerous ones."

2. **MVP Design Framework**:
   - Core purpose: what 2-3 critical assumptions does this test?
   - Feature inclusion criteria: each feature must test a critical assumption
   - The exclusion list is as important as the inclusion list
   - Success criteria (specific, measurable)
   - Failure criteria (triggers pivot conversation)

3. **AP Example**: Complete MVP design from spec lines 543-614
   - 5 features IN (invoice ingestion, PO matching, WhatsApp approval, dashboard, manual payment)
   - 6 features OUT (ERP integration, mobile app, multi-currency, advanced reporting, automated payments, handwritten OCR) — each with "what assumption it does NOT test"
   - 8-week build plan
   - Success/failure criteria

4. **Exercise: MVP Scoping** (Ex 3 part 2, spec lines 1573-1583):
   - Step 4 from Exercise 3: "Based on the assumption map, design the minimum viable product."
   - Input: top 3 assumptions from L05 exercise, team size, time budget
   - Use `/hypothesis` in MVP scoping mode
   - Deliverable: MVP scoping document with feature in/out, success/failure criteria, build plan

5. **Try With AI** (3 prompts):
   - Reproduce: Design MVP for AP automation SaaS
   - Adapt: Design MVP for a different venture with specific constraints
   - Apply: Design MVP for student's venture using their assumption map from L05

6. **Intrapreneurship note**: "For intrapreneurs, the MVP is often a pilot with one internal team or one existing customer. Your 'build plan' may be a staffing request and a timeline, not a development sprint."

### Frontmatter Notes

- `chapter: 40`, `lesson: 6`, `duration_minutes: 40`
- Skills: Scope an MVP that tests the top 3 critical assumptions (B1 Apply/Evaluate); Write measurable success and failure criteria (B1 Apply)
- Cognitive load: 4 concepts (MVP purpose, feature inclusion/exclusion criteria, success/failure criteria, build plan)

---

## L07: Build-Measure-Learn

**File**: `07-build-measure-learn.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/07-build-measure-learn.md`
**Duration**: 35 min
**Spec lines**: 617-641 (BML section)
**Primary skill**: `/validate`

### Content Structure

1. **Opening**: After running the MVP with pilot customers, the BML loop produces validated learning — or invalidated assumptions that require a pivot decision. Transition: "In Lesson 6, you designed the MVP. Now you analyse what happened when real customers used it."

2. **The BML Loop**:
   - Build (the MVP from L06)
   - Measure (specific metrics against success criteria)
   - Learn (which assumptions validated/invalidated; what was unexpected)

3. **AP Example**: Complete BML analysis from spec lines 621-641
   - Pilot results: 2/3 at $500, 1 at $350; 91% accuracy (87% handwritten); adoption 89%/71%/45%; all 3 auditor-confident
   - Unexpected learning: remittance emails requested; handwritten invoices 30% (higher than expected)
   - Assumption outcomes: A-001 partially validated, A-002 partially validated, A-005 mixed
   - Persevere recommendation with specific next steps

4. **Pivot Types** (from validate.md lines 73-101):
   - All 8 pivot types with one-sentence definitions
   - When to use each
   - The pivot decision checklist from validate.md lines 120-129

5. **Evidence Quality Standard** (from validate.md lines 103-117):
   - Hierarchy: paid + renewed > paid once > LOI > usage > said they'd pay > said problem is real
   - VALIDATED means payment or sustained usage, not enthusiasm

6. **Try With AI** (3 prompts):
   - Reproduce: Conduct BML analysis on the AP pilot data (paste the results from the spec)
   - Adapt: Conduct BML analysis on a hypothetical pilot with different results
   - Apply: "I ran a pilot with these results: [student's data]. Conduct a build-measure-learn analysis."

### Frontmatter Notes

- `chapter: 40`, `lesson: 7`, `duration_minutes: 35`
- Skills: Conduct a Build-Measure-Learn analysis on pilot data (B1 Analyze); Identify the correct pivot type when an assumption is invalidated (B1 Evaluate)
- Cognitive load: 4 concepts (BML loop, 8 pivot types, evidence quality hierarchy, pivot decision checklist)

---

## Exit Criteria

- [ ] L04 includes the full 100-idea sprint methodology with DVF scoring and Exercise 1
- [ ] L05 includes the full 3-tier assumption map with MVT hierarchy and Exercise 3 part 1
- [ ] L06 includes the complete MVP design framework with feature in/out and Exercise 3 part 2
- [ ] L07 includes all 8 pivot types and the evidence quality standard
- [ ] All AP worked examples use the spec's sample outputs (not invented)
- [ ] Each lesson opens with a transition from the prior lesson
- [ ] All 12 files written (4 lessons + 4 flashcards + 4 summaries)
- [ ] Full YAML frontmatter on all 4 lessons
- [ ] "Cowork" terminology throughout
- [ ] No `import` statements for non-existent components
