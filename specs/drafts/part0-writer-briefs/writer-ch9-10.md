# Writer Brief: writer-ch9-10

## Scope

You own **Chapter 9: Deciding Under Uncertainty** and **Chapter 10: Learning How to Learn**.

## Task ID: #8

## Source Draft Lines

- **Chapter 9 (Lines ~911-1062)**: Core Skill intro, Exercise 1 (Sealed Decision), Exercise 2 (AI Consultation), Exercise 3 (Information Drop), Exercise 4 (Decision Audit), Chapter Deliverable, Grading Criteria
- **Chapter 10 (Lines ~1063-1164)**: Core Skill intro, Exercise 1 (Learning Plan), Exercise 2 (72-Hour Sprint), Exercise 3 (Teach It Back), Exercise 4 (Strategy Retrospective), Chapter Deliverable, Grading Criteria

**Important**: Line numbers are approximate. Use chapter headings (`# **Chapter 9: Deciding Under Uncertainty**` and `# **Chapter 10: Learning How to Learn**`) as authoritative boundaries.

## Files to Create

### 10-deciding-under-uncertainty/ (4 files)

1. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/10-deciding-under-uncertainty/01-sealed-decision.md`**
   - sidebar_position: 1, chapter: 10, lesson: 1
   - Layers: Layer 1 (Predict Before You Prompt)
   - Building On: Chapter 1's Prediction Lock + Chapter 2's Confidence Calibration
   - Has: AI Check prompt
   - Student receives an ambiguous scenario with incomplete information, makes a decision, states confidence level (0-100%), and defines reversal triggers (what would make them change their mind)
   - Introduces **Reversal Trigger** concept — referenced in Parts 2-10

2. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/10-deciding-under-uncertainty/02-ai-consultation.md`**
   - sidebar_position: 2, chapter: 10, lesson: 2
   - Layers: Layer 2 (Reasoning Receipt), Layer 4 (Contradiction Challenge)
   - Building On: Chapter 6's Collaboration Log format
   - Has: AI Check prompt
   - Student consults AI on the same scenario from Ex1, documents where they trust AI vs. own judgment
   - Key learning: distinguishing AI information from AI fabrication under uncertainty

3. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/10-deciding-under-uncertainty/03-information-drop.md`**
   - sidebar_position: 3, chapter: 10, lesson: 3
   - Layers: Layer 4 (Contradiction Challenge), Layer 6 (Iterative Drafts)
   - Has: AI Check prompt
   - **Time-pressured exercise**: Instructor releases contradictory information mid-exercise. Student has exactly 20 minutes (timed, enforced) to revise. Tests anchoring vs. overreaction vs. proportional updating.
   - Building On: Chapter 7's Adversarial Defence (surviving contradictory input)

4. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/10-deciding-under-uncertainty/04-decision-audit.md`**
   - sidebar_position: 4, chapter: 10, lesson: 4
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt, Chapter Deliverable, Grading Criteria
   - Full retrospective: student audits their own decision process across all 4 exercises
   - Introduces **Decision Audit** as reusable meta-cognitive skill
   - Grading: Initial decision 15%, Reversal triggers 10%, Consultation Log 20%, Information drop response 25%, Decision Audit 20%, AI feedback integration 10%

### 11-learning-how-to-learn/ (4 files)

5. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/11-learning-how-to-learn/01-learning-plan.md`**
   - sidebar_position: 1, chapter: 11, lesson: 1
   - Layers: Layer 1 (Predict Before You Prompt)
   - Building On: Chapter 1's Prediction Lock (the learning plan IS a prediction about your own learning process)
   - Has: AI Check prompt, Deliverable Template
   - Student is assigned an unfamiliar domain. Before learning anything, writes a Learning Plan.
   - Deliverable Template has a detailed multi-phase structure — use `<details>` collapsible

6. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/11-learning-how-to-learn/02-72-hour-sprint.md`**
   - sidebar_position: 2, chapter: 11, lesson: 2
   - Layers: Layer 2 (Reasoning Receipt), Layer 6 (Iterative Drafts)
   - Building On: Chapter 6's Collaboration Log format (now tracking learning, not business problem)
   - Has: AI Check prompt
   - 72 hours to learn an unfamiliar domain well enough to produce competent analysis
   - Learning Log with 20+ entries, mid-point reflection at hour 36

7. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/11-learning-how-to-learn/03-teach-it-back.md`**
   - sidebar_position: 3, chapter: 11, lesson: 3
   - Layers: Layer 3 (Live Defence)
   - Has: Solo Learner Alternative, AI Check prompt
   - 10-minute teaching session + 5 minutes Q&A, no AI during session
   - Solo Alternative: record yourself teaching, then AI plays student asking questions

8. **`apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/11-learning-how-to-learn/04-strategy-retrospective.md`**
   - sidebar_position: 4, chapter: 11, lesson: 4
   - Layers: Layer 6 (Iterative Drafts)
   - Has: AI Check prompt, Chapter Deliverable, Grading Criteria
   - Creates the **Personal Learning Framework** — this is the capstone deliverable of Part 0
   - Grading: Learning Plan 15%, Learning Log 20%, Teaching session 25%, Retrospective 15%, Framework 15%, AI feedback 10%

## Cross-References (Building On)

**Chapter 9**:

- Ex1: Building On Ch 1's Prediction Lock + Ch 2's Confidence Calibration
  - Links: `../02-asking-better-questions/01-prediction-lock.md`, `../03-detecting-broken-reasoning/04-confidence-calibration.md`
- Ex2: Building On Ch 6's Collaboration Log format
  - Link: `../07-working-with-ai-not-for-ai/02-collaboration-log.md`
- Ex3: Building On Ch 7's Adversarial Defence + Ch 4's Rebuild Under Constraints
  - Links: `../08-reasoning-through-dilemmas/02-adversarial-defence.md`, `../05-reasoning-from-first-principles/04-rebuild-under-new-constraints.md`
- Ex4: Building On Ch 2's Confidence Calibration
  - Link: `../03-detecting-broken-reasoning/04-confidence-calibration.md`

**Chapter 10**:

- Chapter-level: "This capstone chapter calls on everything" — references Ch 1, 2, 3, 4, 6
  - Multiple links to earlier chapters
- Ex1: Building On Ch 1's Prediction Lock
  - Link: `../02-asking-better-questions/01-prediction-lock.md`
- Ex2: Building On Ch 6's Collaboration Log format
  - Link: `../07-working-with-ai-not-for-ai/02-collaboration-log.md`

## Chapter-Specific Patterns

- **Ch 9** is the most complex chapter — it has 4 exercises that build on each other sequentially (sealed decision -> consultation -> information drop -> audit). The Exercises 1-3 all work on the SAME scenario. Make this continuity explicit.
- **Ch 9 Ex3** (Information Drop) has a strict 20-minute timer — display this prominently (`:::warning Time Limit: 20 minutes` or similar)
- **Ch 9** introduces **Reversal Triggers** — a concept that recurs throughout Parts 2-10. Frame it clearly as a named, reusable tool.
- **Ch 10** is the **capstone chapter** — its intro explicitly says it "calls on everything." The Building On admonition should reference all major preceding skills.
- **Ch 10 Ex2** (72-Hour Sprint) has a mid-point reflection at hour 36 — this is part of the deliverable, not optional.
- **Ch 10 Ex4** produces the **Personal Learning Framework** — frame this as the single most important deliverable of Part 0. It is "your operating system for Parts 2-10."

## Exit Criteria

- [ ] All 8 files created with full YAML frontmatter
- [ ] Ch 9 scenario continuity across all 4 exercises clearly maintained
- [ ] 20-minute time constraint in Ch 9 Ex3 prominently displayed
- [ ] Reversal Trigger concept clearly introduced as named tool
- [ ] Ch 10 capstone nature reflected — Building On references all key prior skills
- [ ] Personal Learning Framework framed as operating system for rest of book
- [ ] Learning Plan template in `<details>` collapsible
- [ ] All AI Check prompts in code blocks verbatim from source
- [ ] All Building On references use correct relative links
- [ ] Solo Learner Alternative for Ch 10 Ex3 in `:::tip`
- [ ] Chapter Deliverables in `:::info` at end of Exercise 4 files
- [ ] Grading Criteria in `<details>` collapsibles
- [ ] No emojis in output
