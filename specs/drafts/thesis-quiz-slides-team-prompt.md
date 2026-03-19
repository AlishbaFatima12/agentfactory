# Team Prompt: Thesis Quiz & Slides Update

**Paste this prompt into a team-enabled Claude Code session to launch the team.**

---

Create an agent team to regenerate the Agent Factory Thesis slides and quiz to reflect the latest thesis content.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

## Context

**Source**: `apps/learn-app/docs/thesis.md` — the Agent Factory Thesis (631 lines)
**Current slides**: CDN at `https://pub-80f166e40b854371ac7b05053b435162.r2.dev/books/ai-native-dev/static/slides/part-0/chapter-00/agent-factory-thesis.pdf`
**Current quiz**: Embedded `<Quiz>` component in thesis.md (lines 220-631, ~58 questions)
**Flashcards**: `apps/learn-app/docs/thesis.flashcards.yaml` (separate sidecar, NOT in scope)

The thesis content has been updated. The slides and quiz must be regenerated to match.

---

## You Are the Team Lead

You coordinate. You do NOT generate slides or quiz questions yourself.

Use the shared task list (TaskCreate/TaskUpdate) to track all work.

Both teammates work IN PARALLEL — there are no dependencies between them.

---

## TEAMMATE 1: SLIDES-UPDATER

**Task**: "Regenerate thesis slides via NotebookLM and upload to CDN"
**Model**: opus
**Tools needed**: mcp**claude-in-chrome**\* (browser automation), Bash, Read, Edit

Spawn with this prompt:

````
"You are the slides-updater teammate for the Thesis Quiz & Slides Update team.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION: Generate a new slide deck for the Agent Factory Thesis using NotebookLM, iterate until quality passes all 7 gates, then download and upload to CDN.

READ FIRST:

1. `apps/learn-app/docs/thesis.md` — Read lines 1-217 ONLY (the thesis content, NOT the quiz section)
2. `.claude/skills/notebooklm-slides/SKILL.md` — The slide generation workflow and quality gates
3. `.claude/skills/upload-chapter-slides/SKILL.md` — The upload workflow

STEP-BY-STEP WORKFLOW:

Step 1 — Prepare the Prompt

Read the thesis content (lines 1-217 of thesis.md). Identify:
- Core thesis statement (AI employees, not software)
- The paradigm shift table (SaaS → Agent Factory)
- The Industrialized Stack (Intent → Factory → Outcome)
- The 10-80-10 Rule (direction → execution → verification)
- Agents as economic actors (autonomous resource acquisition)
- The Two-Layer Model (Factory Layer + Edge Layer)
- Identic AI (personal agents reflecting human judgment)
- Workforce opportunity (not displacement)

Craft an A2-level proficiency prompt (the thesis targets a general/beginner audience):

---BEGIN PROMPT---
Create an inspiring slide deck for the Agent Factory Thesis aimed at professionals and beginners (A2 proficiency).

AUDIENCE: Business professionals and aspiring AI practitioners with no prior agent-building experience.

FRAMEWORK TO EMPHASIZE:
• The Agent Factory = manufacturing AI employees, not selling software tools
• 10-80-10 Rule: Humans set direction (10%), AI executes (80%), humans verify (10%)
• Agents as economic actors that autonomously acquire resources within human-set budgets
• Identic AI: personal agents that reflect each human's judgment and delegate on their behalf

THEMES (with specific data from the thesis):
1. The Paradigm Shift — SaaS era (per-seat, manual, operator) vs. Agent Factory era (per-outcome, automated, supervisor)
2. The Industrialized Stack — Intent → Factory → Outcome pipeline with machine-readable specs and MCP
3. The 10-80-10 Rule — Steve Jobs's operating rhythm applied to AI workforce management
4. Agents as Economic Actors — autonomously buying compute, data, and services within permission envelopes
5. The Two-Layer Model — Factory Layer (mass production) + Edge Layer (personal agents)
6. Identic AI — Don Tapscott's concept of personal AI that reflects individual judgment
7. Workforce Opportunity — AI employees create new roles, not just automate old ones

TONE:
• Inspiring and future-focused (not intimidating)
• Professional yet accessible
• Opportunity-driven narrative
• Clear, simple language — no unexplained jargon
• Action-oriented

<slide_format_requirements>
Generate 12-15 slides. Each slide: 3-5 bullet points as complete sentences, NOT paragraphs. Clear headings. Cover all 7 themes.
</slide_format_requirements>

NARRATIVE: current reality → paradigm shift → how the factory works → what changes for humans → opportunity ahead → action
END WITH: Specific next steps for the reader (not "Keep learning!")
---END PROMPT---

Step 2 — Generate in NotebookLM

1. Navigate to notebooklm.google.com using browser tools
2. Create a new notebook titled "Agent Factory Thesis — Slides"
3. Upload the thesis source: copy the content from thesis.md lines 1-217 as a text source
4. In the Studio panel, click "Slide Deck"
5. Select "Presenter Slides" format
6. Paste the A2 proficiency prompt above
7. Click "Generate" and wait (may take 5-30 minutes — poll periodically)

Step 3 — Review Against 7 Gates

After generation, review each gate:

| Gate | Check | Pass Criteria |
|------|-------|---------------|
| 1. Title | Reflects Agent Factory thesis? | Not generic "Introduction to AI" |
| 2. Language | A2 proficiency? | Simple, no unexplained jargon |
| 3. Themes | All 7 themes covered? | Each theme with specific data |
| 4. Tone | Inspiring, professional, accessible? | Not academic or intimidating |
| 5. Count | 12-15 slides? | Within range |
| 6. Arc | Clear narrative progression? | Reality → shift → how → humans → opportunity → action |
| 7. Ending | Actionable next steps? | Specific tasks, not "Keep learning!" |

Score: 7/7 → proceed to download. <7/7 → iterate.

Step 4 — Iterate If Needed

If any gate fails:
1. Identify which gates failed and why
2. Refine the prompt to address failures (e.g., "Make language simpler" or "Add more data points to Theme 3")
3. Regenerate in NotebookLM
4. Re-review against 7 gates
5. Repeat until 7/7 (max 3 iterations — if still failing after 3, message the lead with specific issues)

Step 5 — Download the PDF

1. Click the download button in NotebookLM's slide viewer
2. The file will download to ~/Downloads/ (or equivalent)
3. Note the exact file path

Step 6 — Upload to CDN

Run the upload script from the project root:

```bash
cd apps/panaversity-fs-py && uv run python scripts/upload_asset.py \
  --file '<downloaded-pdf-path>' \
  --type slides \
  --part 0 \
  --chapter 0 \
  --name agent-factory-thesis
````

Capture the CDN URL from the output.

Step 7 — Update thesis.md

Check if the CDN URL has changed. If yes, update the Teaching Aid section in thesis.md (around line 63):

```markdown
## Teaching Aid

[Fullscreen](NEW_CDN_URL)
```

Use the Edit tool to update the URL — do NOT rewrite the entire file.

Step 8 — Verify

1. Confirm the PDF is accessible at the CDN URL: `curl -I '<cdn_url>'`
2. Confirm thesis.md has the correct URL
3. Message the team lead: 'SLIDES-UPDATER DONE — slides uploaded to [CDN URL], thesis.md updated'

RULES:

- Execute autonomously without asking for confirmation
- Do NOT modify anything in thesis.md except the Teaching Aid URL (if it changed)
- Do NOT touch the quiz section, flashcards section, or any content
- If NotebookLM is rate-limited or unavailable, message the lead immediately
- If browser tools fail after 3 attempts, message the lead with the error"

```

---

## TEAMMATE 2: QUIZ-UPDATER

**Task**: "Regenerate thesis quiz to match updated content"
**Model**: opus
**Tools needed**: Read, Write, Edit, Bash

Spawn with this prompt:

```

"You are the quiz-updater teammate for the Thesis Quiz & Slides Update team.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION: Regenerate the thesis quiz to reflect the latest thesis content, producing a comprehensive 50-question assessment that covers all thesis concepts.

READ FIRST:

1. `apps/learn-app/docs/thesis.md` — Read lines 1-217 ONLY (the thesis content)
2. `.claude/skills/quiz-generator/SKILL.md` — Quiz format, constraints, and validation rules
3. `apps/learn-app/docs/thesis.md` lines 218-631 — Read the EXISTING quiz to understand the current format and <Quiz> component structure

STEP-BY-STEP WORKFLOW:

Step 1 — Extract Key Concepts from Thesis

Read thesis.md lines 1-217 and identify ALL testable concepts:

Section: The Paradigm Shift

- Product shift: software tools → AI employees
- Value metric: per-seat → per-outcome
- Execution model: manual → automated & industrialized
- Resource acquisition: human-procured → agent-autonomous
- Human role: operator → supervisor & verifier
- Integration: rigid APIs → Standard Tool Protocols (MCP)

Section: The Industrialized Stack

- Three layers: Intent Layer → Factory Layer → Outcome
- Machine-readable specifications
- Reusable skills
- Standard Tool Protocols (MCP)
- Cloud-native infrastructure

Section: The 10-80-10 Rule

- Steve Jobs's management operating rhythm applied to AI
- First 10%: human direction (intent, specs, constraints)
- Middle 80%: AI execution (agents composing tools, spawning specialists)
- Final 10%: human verification (judgment, quality assurance)

Section: Agents as Economic Actors

- Autonomous purchasing within budgets
- Permission envelopes set by human supervisors
- Dynamic resource acquisition (compute, data, services)
- 1-2 years from scale

Section: The Two-Layer Model

- Factory Layer: mass production of agent capabilities
- Edge Layer: personal agents customized per user
- Factory manufactures; edge deploys

Section: Identic AI

- Don Tapscott's concept
- Personal agent reflecting individual judgment
- Delegates on human's behalf
- How humans command the AI workforce

Section: Workforce Opportunity

- AI employees create new roles
- Retraining and upskilling focus
- Not displacement narrative

Step 2 — Generate 50 Questions

Generate exactly 50 conceptual questions (NOT recall) following these rules:

QUESTION DISTRIBUTION across sections:

- Paradigm Shift: 10-12 questions
- Industrialized Stack: 8-10 questions
- 10-80-10 Rule: 6-8 questions
- Agents as Economic Actors: 6-8 questions
- Two-Layer Model: 5-7 questions
- Identic AI: 4-6 questions
- Workforce Opportunity: 4-6 questions

QUESTION QUALITY:

- 75%+ at Apply level or higher (Bloom's taxonomy)
- NO recall questions ("What is X?" → BAD)
- Conceptual and scenario-based ("Which approach best demonstrates X?" → GOOD)
- Each question tests UNDERSTANDING, not memorization

OPTION RULES:

- Exactly 4 options per question
- ALL options within ±3 words of each other (per question)
- correctOption uses 0-3 index (NOT 1-4)
- ~12-13 correct answers per index (even distribution)
- No 3+ consecutive same correctOption index

EXPLANATION RULES:

- 100-150 words per explanation
- Explain WHY the correct answer is correct (2-3 sentences)
- Explain WHY each distractor is wrong (1-2 sentences each)
- Include real-world connection (1-2 sentences)

SOURCE FIELD:

- Every question has a `source` field linking to the relevant thesis section
- Format: `"Section: [Section Name]"`

Step 3 — Format as Quiz Component

Write the quiz in this exact format, replacing lines 218-631 of thesis.md:

```markdown
## Test Your Understanding

<Quiz
title="The Agent Factory Thesis Assessment"
questionsPerBatch={20}
questions={[
{
question: "...",
options: ["...", "...", "...", "..."],
correctOption: N,
explanation: "...",
source: "Section: ..."
},
// ... 49 more questions
]}
/>
```

CRITICAL FORMAT NOTES:

- questionsPerBatch={20} (show 20 per session, not all 50)
- Keep the Flashcards section ABOVE the quiz (lines 212-216) — do NOT modify it
- The quiz section starts at line 218 ("## Test Your Understanding")
- Preserve the closing content AFTER the quiz if any exists

Step 4 — Validate

After writing, validate:

1. Count questions: must be exactly 50
2. Check correctOption distribution:
   - Count index 0: should be 12-13
   - Count index 1: should be 12-13
   - Count index 2: should be 12-13
   - Count index 3: should be 12-13
3. Check for 3+ consecutive same index: must have NONE
4. Spot-check 10 random questions for option length (±3 words)
5. Verify all source fields reference valid thesis sections
6. Verify JSX syntax is valid (no unclosed tags, proper escaping)

If distribution is uneven, manually adjust by swapping option positions and updating correctOption + explanation references.

Step 5 — Final Check

Read back the modified thesis.md and verify:

- Lines 1-217 are UNTOUCHED (thesis content)
- Lines 212-216 are UNTOUCHED (Flashcards section)
- Quiz section starts at line 218 with "## Test Your Understanding"
- <Quiz> component has valid JSX
- All 50 questions present and well-formed

Message the team lead: 'QUIZ-UPDATER DONE — 50 questions generated, thesis.md updated (lines 218+), distribution: [0:N, 1:N, 2:N, 3:N]'

RULES:

- Execute autonomously without asking for confirmation
- Do NOT modify thesis content (lines 1-217) or flashcards section (lines 212-216)
- Do NOT add import statements — the Quiz component is globally available
- Do NOT add a Flashcards import — Flashcards is a global MDX component
- Ensure all questions are CONCEPTUAL (Apply level+), never recall
- If you cannot achieve even distribution after 2 manual adjustment passes, report the best distribution achieved"

````

---

## Lead Coordination Rules

1. **Create the team** with TeamCreate (team name: "thesis-update")
2. **Create 3 tasks** with TaskCreate:
   - Task 1: "Regenerate thesis slides" (no dependencies)
   - Task 2: "Regenerate thesis quiz" (no dependencies)
   - Task 3: "Lead verification" (depends on Tasks 1 & 2)
3. **Spawn BOTH teammates simultaneously** — they have zero dependencies on each other
4. **Do NOT write content yourself** — coordinate only
5. **Monitor progress** via messages from teammates
6. **If a teammate is stuck** (no message after 10 minutes), send a check-in message
7. **When BOTH teammates report DONE**, begin verification (Task 3)

### Lead Verification Checklist

After both teammates finish:

```bash
# 1. Verify thesis.md structure
head -220 apps/learn-app/docs/thesis.md | tail -5  # Check quiz section starts correctly

# 2. Count quiz questions
grep -c "question:" apps/learn-app/docs/thesis.md  # Should be 50

# 3. Verify no phantom imports
grep "import" apps/learn-app/docs/thesis.md  # Should return NOTHING

# 4. Verify slides URL is accessible
curl -I "$(grep 'r2.dev' apps/learn-app/docs/thesis.md | grep -o 'https://[^)]*')"

# 5. Verify flashcards section intact
grep "Flashcards" apps/learn-app/docs/thesis.md  # Should show <Flashcards /> tag

# 6. Spot-check quiz distribution
grep "correctOption:" apps/learn-app/docs/thesis.md | sort | uniq -c
````

8. **If verification fails**: message the relevant teammate with specific issues to fix
9. **If verification passes**: shut down teammates, clean up team
10. **Report to user**: "Thesis slides and quiz updated. Slides at [URL]. Quiz: 50 questions covering [sections]."

---

## Model Preferences

| Teammate       | Model | Rationale                                           |
| -------------- | ----- | --------------------------------------------------- |
| slides-updater | opus  | Browser automation + quality judgment for iteration |
| quiz-updater   | opus  | Quality question generation + validation            |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write quiz questions or generate slides yourself — delegate everything to teammates
- Do NOT wait for slides to finish before starting quiz (they're parallel)
- Do NOT let teammates modify thesis content (lines 1-217)
- Do NOT skip the lead verification checklist
- Do NOT add import statements to thesis.md (Quiz and Flashcards are global MDX components)
- Do NOT touch thesis.flashcards.yaml (out of scope)
