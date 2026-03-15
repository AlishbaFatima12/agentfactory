# Writer Brief: writer-ch7-8

## Scope

You own **Chapter 7: Reasoning Through Dilemmas** and **Chapter 8: Building Something From Nothing**.

## Task ID: #7

## Source Draft Lines

- **Chapter 7 (Lines ~721-810)**: Core Skill intro, Exercise 1 (Position Lock), Exercise 2 (Adversarial Defence), Exercise 3 (Stakeholder Swap), Exercise 4 (Cost Matrix), Chapter Deliverable, Grading Criteria
- **Chapter 8 (Lines ~811-910)**: Core Skill intro, Exercise 1 (Blank Page Sprint), Exercise 2 (Creation Log), Exercise 3 (The Originality Test), Exercise 4 (Three-Draft Evolution), Chapter Deliverable, Grading Criteria

**Important**: Line numbers are approximate. Use chapter headings (`# **Chapter 7: Reasoning Through Dilemmas**` and `# **Chapter 8: Building Something From Nothing**`) as authoritative boundaries.

## Files to Create

### 08-reasoning-through-dilemmas/ (4 files)

1. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/08-reasoning-through-dilemmas/01-position-lock.md`**
   - sidebar_position: 1, chapter: 8, lesson: 1
   - Layers: Layer 1 (Predict Before You Prompt)
   - Building On: Chapter 1's Prediction Lock (same pattern, now applied to ethical positions)
   - Has: Scenario Selector (Tabs — ethical dilemma variants), AI Check prompt
   - Needs `import Tabs` and `import TabItem` if Tabs present

2. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/08-reasoning-through-dilemmas/02-adversarial-defence.md`**
   - sidebar_position: 2, chapter: 8, lesson: 2
   - Layers: Layer 4 (Contradiction Challenge)
   - Building On: Chapter 4's Rebuild Under Constraints pattern
   - Has: AI Check prompt
   - Three rounds of AI counter-arguments — student must survive all three
   - Introduces **Adversarial Defence** — referenced in Ch 9

3. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/08-reasoning-through-dilemmas/03-stakeholder-swap.md`**
   - sidebar_position: 3, chapter: 8, lesson: 3
   - Layers: Layer 3 (Live Defence)
   - Building On: Chapter 3's Cascade Map + Chapter 5's Audience Analysis + Live Adaptation
   - Has: Solo Learner Alternative, AI Check prompt
   - Student argues from a stakeholder position that is NOT their own

4. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/08-reasoning-through-dilemmas/04-cost-matrix.md`**
   - sidebar_position: 4, chapter: 8, lesson: 4
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt, Chapter Deliverable, Grading Criteria
   - Introduces **Stakeholder Cost Matrix** — referenced in Parts 5-10

### 09-building-something-from-nothing/ (4 files)

5. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/09-building-something-from-nothing/01-blank-page-sprint.md`**
   - sidebar_position: 1, chapter: 9, lesson: 1
   - Layers: Layer 1 (Predict Before You Prompt), Layer 5 (Divergence Test)
   - Has: AI Check prompt
   - Timed creative sprint — student creates something original under time pressure, no AI

6. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/09-building-something-from-nothing/02-creation-log.md`**
   - sidebar_position: 2, chapter: 9, lesson: 2
   - Layers: Layer 6 (Iterative Drafts)
   - Building On: Chapter 6's Collaboration Log format
   - Has: AI Check prompt
   - Introduces **Creation Log** — the three-draft evolution process becomes default workflow for Parts 2-10

7. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/09-building-something-from-nothing/03-the-originality-test.md`**
   - sidebar_position: 3, chapter: 9, lesson: 3
   - Layers: Layer 4 (Contradiction Challenge), Layer 5 (Divergence Test)
   - Building On: Chapter 4's Assumption Autopsy + Chapter 3's Cascade Map
   - Has: AI Check prompt
   - The test: ask AI "could you have produced this?" — establishes the self-check for genuine value-add

8. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/09-building-something-from-nothing/04-three-draft-evolution.md`**
   - sidebar_position: 4, chapter: 9, lesson: 4
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt, Chapter Deliverable, Grading Criteria
   - Full three-draft evolution: before AI, with AI, after reflection
   - Introduces **Three-Draft Evolution** as reusable creation workflow

## Cross-References (Building On)

**Chapter 7**:

- Ex1: Building On Ch 1's Prediction Lock
  - Link: `../02-asking-better-questions/01-prediction-lock.md`
- Ex2: Building On Ch 4's Rebuild Under Constraints
  - Link: `../05-reasoning-from-first-principles/04-rebuild-under-new-constraints.md`
- Ex3: Building On Ch 3's Cascade Map + Ch 5's Audience Analysis + Live Adaptation
  - Links: `../04-thinking-in-systems/01-cascade-mapping.md`, `../06-communicating-what-matters/01-audience-prediction.md`, `../06-communicating-what-matters/02-live-adaptation.md`

**Chapter 8**:

- Ex2: Building On Ch 6's Collaboration Log
  - Link: `../07-working-with-ai-not-for-ai/02-collaboration-log.md`
- Ex3: Building On Ch 4's Assumption Autopsy + Ch 3's Cascade Map
  - Links: `../05-reasoning-from-first-principles/03-assumption-autopsy.md`, `../04-thinking-in-systems/01-cascade-mapping.md`

## Chapter-Specific Patterns

- **Ch 7** deals with ethical dilemmas — scenarios should be genuinely difficult (no clear right answer). The source draft provides specific scenarios — preserve them exactly.
- **Ch 7 Ex2** (Adversarial Defence) has a multi-round structure: student submits position, AI attacks, student responds, AI attacks again (3 rounds). Make the round structure explicit in the deliverable format.
- **Ch 7 Ex3** (Stakeholder Swap) requires students to argue FROM a position they disagree with — this is the hardest exercise in the chapter. Solo Learner Alternative has AI playing each stakeholder.
- **Ch 8 Ex1** (Blank Page Sprint) is timed (the source specifies the time) — preserve the time constraint prominently
- **Ch 8 Ex3** (Originality Test) is unique: the student asks AI to evaluate whether AI could have produced their work. This is a meta-assessment of value-add.

## Exit Criteria

- [ ] All 8 files created with full YAML frontmatter
- [ ] Adversarial Defence three-round structure clearly delineated
- [ ] Stakeholder Swap Solo Alternative properly uses AI for each role
- [ ] Blank Page Sprint time constraint prominently displayed
- [ ] Originality Test meta-question ("could AI have produced this?") clearly framed
- [ ] Stakeholder Cost Matrix introduced as reusable tool
- [ ] All AI Check prompts in code blocks verbatim from source
- [ ] All Building On references use correct relative links
- [ ] Solo Learner Alternatives in `:::tip` admonitions
- [ ] Chapter Deliverables in `:::info` at end of Exercise 4 files
- [ ] Grading Criteria in `<details>` collapsibles
- [ ] No emojis in output
