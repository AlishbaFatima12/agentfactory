### Core Concept

The Job Spec Writer is the first HireFlow FTE skill written with full guidance. It demonstrates the complete Predict-Run-Investigate-Modify cycle applied to skill development. The lesson reveals a specific failure mode: specification errors, where the skill follows its instructions correctly but the instructions are incomplete. Finding and fixing these gaps is the purpose of the cycle.

### Key Mental Models

- **Predict before testing**: Before running a skill against a test input, record exactly what you expect the output to be. Prediction forces you to trace the skill's decision logic mentally. When actual output diverges from prediction, you have located a specification gap, not a runtime error.
- **Specification Error category**: The Job Spec Writer correctly follows its instructions when processing a "Senior Backend Engineer" brief with only technical requirements. It produces a rubric with only the mentioned dimensions. But senior roles need seniority-appropriate dimensions (system design, technical leadership) that hiring managers assume but do not write. The skill followed its rules; the rules were incomplete.
- **Graduated scaffolding across lessons**: Lesson 4 provides every step. Lessons 5-7 progressively remove guidance. By Lesson 7, the student applies the transformation method independently. The Job Spec Writer skill is the reference pattern for all subsequent FTE skills.

### Critical Patterns

- The Job Spec Writer's output format directly determines what the Resume Screener can do. The scoring rubric with explicit dimension names and numeric weights is the inter-FTE data contract. Building it without those fields breaks the pipeline at the next stage
- Seniority-appropriate dimensions are expected but not stated. Hiring managers say "senior level" and assume system design and leadership dimensions will appear. Agents only know what they are told. A Principle must explicitly inject these dimensions for senior and lead roles
- Mixed-function roles ("developer AND QA manager AND customer support") represent a distinct edge case: the skill should split them and ask which role to proceed with, rather than producing a single incoherent job description

### Common Mistakes

- James's first rubric for a senior role contained only three dimensions (Python, PostgreSQL, payment processing) because those were the only requirements in the brief. Seniority-appropriate dimensions are implicit expectations that must be made explicit in Principles
- Testing only with normal inputs. Adversarial inputs ("Engineer," a brief with ten contradictory requirements, a brief in abbreviations) reveal which Principles are missing or too vague. The skill that handles normal briefs well often fails silently on edge case inputs
- Not predicting before running. Without a written prediction, discrepancies between expected and actual output are invisible. Prediction is the mechanism that surfaces specification gaps

### Connections

- **Builds on**: Transformation method and SKILL.md anatomy from Lessons 2-3; inter-FTE data contracts introduced in Lesson 3
- **Leads to**: Job Spec Writer output format becomes Resume Screener input format in Lesson 5; same Predict-Run-Investigate-Modify cycle used in Lessons 5-7
