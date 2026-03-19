# Writer Brief: Pitch + Sprint + Agents + Capstone (L12 + L13 + L14 + L15)

**Writer**: writer-pitch-agents-cap
**Lessons**: L12 (Investor Pitch Deck), L13 (Innovation Sprints), L14 (Four Innovation Agents), L15 (Capstone)
**Total files**: 12 (4 lessons + 4 flashcards + 4 summaries)
**Exercises**: 2 (Ex 6 in L12, Ex 8 in L15)

**Read before writing**:

1. `specs/drafts/ch40-innovation/shared-brief.md` — shared rules
2. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec
3. `specs/drafts/chap29_innovation/Chapter29_Intrapreneurship_Agent.md` lines 858-1174 (Pitch + Sprint) + lines 1354-1417 (Four Agents) + lines 1707-1761 (Exercise 6) + lines 1820-1874 (Exercise 8)
4. `specs/drafts/chap29_innovation/innovation-skills/products/pitch.md`
5. `specs/drafts/chap29_innovation/innovation-skills/products/sprint.md`
6. All 4 agent files in `specs/drafts/chap29_innovation/innovation-skills/agents/`
7. `specs/drafts/chap29_innovation/innovation-skills/innov.local.md.template` — full template (for L15 capstone)

---

## L12: Investor Pitch Deck

**File**: `12-investor-pitch-deck.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/12-investor-pitch-deck.md`
**Duration**: 45 min
**Spec lines**: 858-1069 + 1707-1761 (Exercise 6)
**Primary skill**: `/pitch`

### Content Structure

1. **Opening** (2-3 paragraphs): A great pitch deck is not a product demo with financials appended. It is a story — a narrative arc. Transition: "You have the canvas (L08), financials (L09), market data (L10), and GTM (L11). Now you tell the story that makes someone want to fund this."

2. **Narrative Architecture — 9 Slides** (spec lines 888-899):
   - Hook → Problem → Solution → Market → Traction → Business Model → Team → Ask → Vision
   - For each: headline format, content type, verbal script guideline, emotional job

3. **AP Example — Full 9-Slide Narrative** (spec lines 914-1068):
   - Complete slide-by-slide narrative with headlines, content, verbal scripts, emotional jobs
   - This is the longest worked example in the chapter — reproduce faithfully from spec

4. **Pitch Quality Standards** (from pitch.md lines 100-125):
   - Every claim needs a source
   - Banned phrases: "Massive market opportunity", "Disruptive technology", "First mover advantage", "Proprietary AI", "Conservative projections", "We just need 1% of the market", "No direct competition"
   - Traction hierarchy: Revenue > pilot results > LOIs > waitlist > interviews

5. **Hard Questions Prep**: Top 15 hardest questions with honest answers (from spec Exercise 6 Step 2)

6. **Executive Summary**: One-paragraph (100-word) summary for investor email intros

7. **Exercise: The Investor Pitch Deck** (Ex 6, spec lines 1707-1761):
   - Step 1: Narrative architecture using `/pitch`
   - Step 2: Hardest 15 questions
   - Step 3: Executive summary (100 words)
   - Step 4: Pitch practice — speak it aloud, paste transcript, get feedback
   - Deliverable: 9-slide narrative, 15 Q&A answers, executive summary, pitch practice feedback

8. **Try With AI** (3 prompts):
   - Reproduce: Write the pitch narrative for the AP SaaS
   - Adapt: Write for a different venture and different investor type
   - Apply: Write the pitch narrative for student's own venture

9. **Intrapreneurship note**: "For intrapreneurs, the 'pitch deck' is a business case for your innovation committee. Slide translations: Hook = why this matters to the organisation; Market = internal opportunity; Ask = budget and headcount request; Team = your cross-functional coalition."

### Frontmatter Notes

- `chapter: 40`, `lesson: 12`, `duration_minutes: 45`
- Skills: Construct a 9-slide investor pitch narrative with emotional engineering (B2 Create); Prepare honest answers for the 15 hardest investor questions (B2 Evaluate)
- Cognitive load: 4 concepts (9-slide narrative arc, emotional engineering, pitch quality standards, traction hierarchy)

---

## L13: Innovation Sprints

**File**: `13-innovation-sprints.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/13-innovation-sprints.md`
**Duration**: 35 min
**Spec lines**: 1073-1174
**Primary skill**: `/sprint`

### Content Structure

1. **Opening**: Agile was designed for software delivery. Innovation Sprints adapt Agile for higher uncertainty — you are simultaneously discovering, validating, and building. Transition: "The DLA Stack's third methodology is Agile. This lesson teaches how to run sprints when both the problem and solution still have uncertainty."

2. **Innovation Sprint vs. Product Sprint** (from sprint.md lines 17-28):
   - Product Sprint: delivery goal, ship-or-not success
   - Innovation Sprint: learning goal + delivery goal, validated learning success
   - Use Innovation Sprint at DISCOVERY/VALIDATION/MVP stages; Product Sprint at GROWTH

3. **Sprint Plan Components** (from sprint.md output structure):
   - Sprint goal (learning + delivery)
   - Backlog with user stories linked to assumptions
   - Definition of Done (code, learning, documentation)
   - Mid-sprint check
   - Sprint review format
   - Retrospective with assumption updates

4. **User Story Quality** (from sprint.md lines 96-111):
   - Strong: names specific role, states action precisely, has testable acceptance criteria
   - Weak: generic user, vague action, unmeasurable criteria
   - Each story links to an assumption ID

5. **Backlog Prioritisation** (from sprint.md lines 113-129):
   - Assumption Risk Score (1-3) x Delivery Value Score (1-3) = Priority Score (max 9)
   - Build sprint from highest score down

6. **AP Example — Full Sprint Plan** (spec lines 1100-1173):
   - Sprint goal: Validate WhatsApp adoption improvement
   - 4 user stories with points, owners, acceptance criteria
   - Mid-sprint check, review, retrospective

7. **Try With AI** (3 prompts):
   - Reproduce: Plan an innovation sprint for AP SaaS
   - Adapt: Plan a sprint for a different venture/assumption
   - Apply: Plan a sprint for student's venture using their assumption map from L05

### Frontmatter Notes

- `chapter: 40`, `lesson: 13`, `duration_minutes: 35`
- Skills: Design an innovation sprint with learning and delivery goals (B1 Apply); Prioritise a backlog by assumption risk x delivery value (B1 Apply)
- Cognitive load: 4 concepts (innovation vs. product sprint, learning goal, assumption-linked stories, priority scoring)

---

## L14: Four Innovation Agents

**File**: `14-four-innovation-agents.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/14-four-innovation-agents.md`
**Duration**: 40 min
**Spec lines**: 1354-1417
**Skills**: All 4 agents

### Content Structure

1. **Opening**: Individual skills handle one task at a time. Agents provide continuous intelligence — they run weekly, monitor changes, and surface the decisions that need attention before you ask. Transition: "You have used all 10 plugin commands. Now meet the four agents that orchestrate them continuously."

2. **Agent Architecture Overview**:
   - Skills = on-demand, single-task
   - Agents = persistent, scheduled, context-aware
   - All agents read from and propose updates to `innov.local.md`

3. **Agent 1: The Idea Generator** (spec lines 1356-1367):
   - Purpose: Steady flow of fresh ideas
   - Weekly: Monday Innovation Brief (3 unsolicited ideas + market signal + uncomfortable question)
   - Monthly: Idea backlog review
   - On-demand: 100-idea sprint facilitation, pivot ideation, analogy library
   - Show the Monday Innovation Brief output format from idea-generator-agent.md

4. **Agent 2: Customer Intelligence** (spec lines 1371-1383):
   - Purpose: Continuous feedback loop
   - Weekly: Customer Signal Digest (health snapshot, top 3 themes, assumption updates, at-risk customers)
   - On-demand: Interview synthesis, NPS analysis, churn analysis, persona maintenance
   - Show the digest format from customer-intelligence-agent.md

5. **Agent 3: Business Model Architect** (spec lines 1387-1399):
   - Purpose: Living canvas and financial model
   - Trigger-based: Proposes canvas updates when new validation data arrives
   - Monthly: Financial Health Review (unit economics, current state, runway alert, canvas health)
   - On-demand: Alternative business model exploration
   - Show the monthly review format from business-model-architect-agent.md

6. **Agent 4: Fundraising Readiness** (spec lines 1403-1416):
   - Purpose: Always fundraising-ready
   - Continuous: Readiness score (16-item checklist)
   - Weekly (during active fundraising): Investor pipeline update
   - On-demand: Pre-meeting investor brief, pitch practice feedback, monthly investor update draft
   - Show the readiness checklist from fundraising-readiness-agent.md

7. **AP Example**: Configure all 4 agents for the AP venture — what each would produce in Week 1

8. **Try With AI** (3 prompts):
   - Reproduce: "Generate a Monday Innovation Brief for the AP automation venture"
   - Adapt: "Generate a Customer Signal Digest given these hypothetical feedback data points"
   - Apply: "Based on my innov.local.md, generate a Financial Health Review for my venture"

9. **Intrapreneurship note**: "Fundraising Readiness Agent translates to 'Business Case Readiness' — replace investor pipeline with stakeholder alignment tracking. The readiness checklist becomes: business case document, financial justification, pilot results, executive sponsor brief, cross-functional support letters."

### Frontmatter Notes

- `chapter: 40`, `lesson: 14`, `duration_minutes: 40`
- Skills: Explain the role and weekly deliverables of each innovation agent (B1 Understand); Configure persistent agents to monitor a venture's innovation metrics (B1 Apply)
- Cognitive load: 4 concepts (persistent agent concept, weekly automated briefs, trigger-based activation, 4 agent specialisations)

---

## L15: Capstone — Build Your Innovation OS

**File**: `15-capstone-build-innovation-os.md`
**Path**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/07-the-innovation-lab/40-intrapreneurship-innovation-agents/15-capstone-build-innovation-os.md`
**Duration**: 90 min
**Spec lines**: 1820-1874 (Exercise 8)
**Skills used**: All 10 commands

### Content Structure

1. **Opening**: This is the integration lesson. You have used every tool in the Innovation OS individually. Now you assemble the complete innovation context file that makes every tool specific to YOUR venture.

2. **Exercise: Build innov.local.md** (Ex 8, spec lines 1820-1874):
   - **Part A: Walk through the AP example** — Show a complete, filled-in innov.local.md for the AP automation SaaS venture, drawing on outputs from every prior lesson
   - **Part B: Student builds their own** — Step-by-step:

   - Step 1: Venture context (from L01-L04 work)
   - Step 2: Customer profiles (from L03 discovery)
   - Step 3: Assumption stack (from L05)
   - Step 4: Financial model parameters (from L09)
   - Step 5: Competitive landscape (from L10)
   - Step 6: Fundraising or intrapreneurship section

3. **Validation Test** (spec lines 1862-1873):
   - Run 4 prompts and check if outputs are specific (not generic):
     1. `/idea` — "What 3 ideas should I explore this week?"
     2. `/canvas` — "What is the health of my business model canvas?"
     3. `/hypothesis` — "What is my most critical untested assumption?"
     4. `/pitch` — "Write my executive summary"
   - If outputs are generic: add more specificity to the section producing generic output

4. **The Most Common Gaps** (from innov.local.md.template validation notes):
   - customer_profiles (pains too vague)
   - key_assumptions (too few — need 15-20)
   - competitive_landscape (differentiation too generic)
   - financial_model (all ASSUMED)

5. **Try With AI** (3 prompts):
   - Reproduce: "Based on innov.local.md for the AP venture, what should I work on today?"
   - Adapt: "Here is my draft innov.local.md [paste]. What sections are weakest?"
   - Apply: "Run the 4-question validation test on my innov.local.md"

### Frontmatter Notes

- `chapter: 40`, `lesson: 15`, `duration_minutes: 90`
- Skills: Assemble a complete innov.local.md configuration from prior exercise outputs (B2 Create); Validate venture context file quality using the 4-question diagnostic test (B2 Evaluate)
- Cognitive load: 0 new concepts (integration lesson)

---

## Exit Criteria

- [ ] L12 includes full 9-slide narrative from spec with all slides, banned phrases, traction hierarchy
- [ ] L13 includes innovation vs. product sprint distinction, assumption-linked stories, priority scoring
- [ ] L14 covers all 4 agents with their weekly/on-demand tasks and output formats
- [ ] L15 includes complete AP innov.local.md example + student builds their own + 4-question validation
- [ ] All AP worked examples use the spec's sample outputs (not invented)
- [ ] Each lesson opens with transition from prior lesson
- [ ] All 12 files written (4 lessons + 4 flashcards + 4 summaries)
- [ ] Full YAML frontmatter on all 4 lessons
- [ ] "Cowork" terminology throughout
- [ ] No `import` statements for non-existent components
