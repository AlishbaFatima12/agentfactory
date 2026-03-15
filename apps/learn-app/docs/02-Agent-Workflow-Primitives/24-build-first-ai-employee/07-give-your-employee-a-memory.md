---
sidebar_position: 7
title: "Give Your Employee a Memory"
chapter: 24
lesson: 7
duration_minutes: 40
description: "Add persistent memory using SQLite tables for action logging, knowledge storage, and correction capture — a closed feedback loop where your employee learns from its mistakes"
keywords:
  [
    "persistent memory",
    "SQLite",
    "action log",
    "knowledge store",
    "correction capture",
    "feedback loop",
    "NanoClaw",
    "observability",
    "structured data",
  ]

skills:
  - name: "Structured Persistent State"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student designs and implements SQLite tables for action logging and knowledge storage within NanoClaw, applying Ch21 schema design primitives to a real agent system"

  - name: "Correction-Driven Learning"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student configures CLAUDE.md instructions that capture user corrections into a knowledge store and demonstrate changed behavior on subsequent interactions"

  - name: "Action Observability"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student implements an action log that records autonomous actions with timestamps, enabling structured review of what the employee did and when"

learning_objectives:
  - objective: "Design SQLite tables for action logging and knowledge storage within NanoClaw"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces memory-config.md with two table schemas (action_log, knowledge) using appropriate constraints from Ch21"

  - objective: "Implement a correction capture workflow where user feedback persists to structured storage"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates at least 2 corrections persisted to the knowledge store, with subsequent behavior reflecting those corrections"

  - objective: "Query the action log to answer 'what did you do today?' with structured evidence"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student asks their employee to summarize recent actions and receives a response grounded in actual action_log rows"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Action log table (SQLite schema for recording autonomous actions)"
    - "Knowledge store table (subject-predicate-object triples for learned facts)"
    - "Correction-to-knowledge pipeline (extracting structured data from user feedback)"
    - "Log querying for observability (answering 'what did you do?' from data)"
  assessment: "4 concepts within B1-B2 limit. Schema design concepts (column types, constraints, CRUD) transfer from Ch21's PostgreSQL/SQLAlchemy work, though the engine is SQLite (simpler syntax, no ORM). The new element is applying database skills to agent memory."

differentiation:
  extension_for_advanced: "Add a confidence_score column to knowledge rows. When the employee acts on low-confidence knowledge, it flags the action for review. Implement a 'knowledge audit' command listing stored knowledge sorted by confidence."
  remedial_for_struggling: "Start with the action log only — one table, one INSERT instruction in CLAUDE.md. Get 3 actions logged before attempting the knowledge store."
---

# Give Your Employee a Memory

Your employee knows boundaries. It knows when to act and when to ask. But every time a session ends, it forgets everything — every correction you gave, every preference you expressed, every mistake it made. Tomorrow it will make the same errors you corrected today.

This is the gap between a capable employee and one that actually improves. In Prove Professional Value, you will need your employee to spot patterns and make proactive recommendations. An employee with no memory of past interactions cannot spot patterns. It has no past to draw from.

The solution is a closed feedback loop: the employee acts, logs what it did, receives your corrections, persists those corrections as structured knowledge, and behaves differently next time. This loop applies three of the Seven Principles you learned in Part 1. Principle 5 (Structured Persistent State) graduates your employee's memory from text files to proper database tables. Principle 7 (Observability) gives you a structured audit trail of every autonomous action. Principle 3 (Verification) closes the loop — your corrections become the verification signal that steers future behavior.

In Structured Data and Persistent Storage, you learned schema design, constraints, CRUD operations, and transactions using SQLAlchemy and PostgreSQL on Neon. Here you apply the same concepts — column types, NOT NULL, CHECK constraints, INSERT/SELECT — but with SQLite instead of PostgreSQL. Why SQLite? Because NanoClaw already uses SQLite internally for its own message history and task scheduling. Your employee's memory tables live alongside NanoClaw's own database in the group's persistent storage. The syntax is simpler (no ORM, no cloud connection), but the design principles transfer directly: schema contracts reject bad data, constraints make impossible states impossible, and queries answer questions without new code.

The extraction of structured knowledge from your natural-language corrections also builds on Computation and Data Extraction. In that chapter, you directed your agent to pull structured fields from messy text — amounts from bank statements, categories from descriptions. Here you apply the same pattern: extracting structured facts (subject, predicate, object) from your natural-language corrections like "Client X prefers bullet points."

## The Challenge

Give your employee persistent memory so it logs autonomous actions, remembers corrections, and can answer "what have you been doing?" with structured evidence.

### Acceptance Criteria

1. Action log captures at least 3 autonomous actions with timestamps
2. Knowledge store contains at least 2 corrections from real interactions
3. Employee demonstrates changed behavior based on a stored correction
4. Student can query "what did you do today?" and get a structured answer

### Deliverables

- `memory-config.md` — schema designs and CLAUDE.md additions for memory behavior
- Updated `groups/main/CLAUDE.md` with logging and correction instructions

## Use Case Gallery

**Accountant** — The action log records every expense categorization, invoice summary, and report generation. The knowledge store accumulates client preferences: "Client X prefers detailed line items, not category totals." Next time the employee generates a report for Client X, it checks the knowledge store and formats accordingly.

**Teacher** — The action log records every lesson plan generated, curriculum gap flagged, and resource compiled. The knowledge store learns from corrections: "Grade 5 needs simpler vocabulary than Grade 8 — rewrite any lesson plan using words a 10-year-old would know." The employee checks this before generating Grade 5 content.

**Consultant** — The action log records every research summary sent, client status update compiled, and meeting note drafted. The knowledge store captures communication preferences: "CEO prefers bullet points under 5 items — never send paragraphs." The employee restructures all CEO-bound output to match.

**Recruiter** — The action log records every resume screened, outreach template drafted, and pipeline report generated. The knowledge store learns evaluation criteria: "Engineering team values open source contributions — always check GitHub profiles and mention notable repos." The employee highlights this in future candidate summaries.

## Hints

<details>
<summary>Level 1 — Think about what to remember</summary>

Your employee needs two categories of memory:

**Things it DID** (the action log). This answers the question: "What have you been doing?" Every autonomous action — sending a message, generating a report, categorizing a file — gets a row. This is Principle 7 (Observability) made concrete: you can audit your employee's behavior with a SQL query instead of scrolling through chat history.

**Things it LEARNED** (the knowledge store). This answers the question: "What do you know about my preferences?" Every correction you give — "no, format it as bullets" or "always check the deadline before committing" — becomes a structured fact. This is Principle 5 (Structured Persistent State): real knowledge stored in tables with constraints, not scattered across conversation logs.

Both use the schema design concepts from Structured Data and Persistent Storage — column types, constraints, NOT NULL, CHECK — applied to SQLite instead of PostgreSQL. The design thinking is the same; the syntax is simpler.

**Where does the database live?** NanoClaw mounts each group's directory (`groups/main/`) as writable storage inside the container at `/workspace/group`. Files your employee creates there persist on the host filesystem and survive container restarts. Your SQLite database file goes here — it is as persistent as your `CLAUDE.md` and `SKILL.md` files.

Also consider: **who** is allowed to write corrections? For now, only you should be able to modify the knowledge store. The action log is append-only — your employee writes to it, and you read from it.

</details>

<details>
<summary>Level 2 — Ask your AI to help design the schema</summary>

Open a conversation with Claude and try this prompt:

```
I'm building persistent memory for my AI employee (a NanoClaw agent).
I need two SQLite tables:

1. action_log — records every autonomous action the employee takes
   Should track: what type of action, what it targeted, the trust level
   (auto-approved vs needed approval), the result, and when it happened

2. knowledge — stores learned facts from user corrections
   Should use a subject-predicate-object structure so facts are queryable
   (e.g., subject="Client X", predicate="prefers", object="bullet points")
   Should track: where the knowledge came from and when it was learned

Design both tables with appropriate constraints.
Then write CLAUDE.md instructions that tell the employee to:
- INSERT into action_log after every autonomous action
- Extract subject-predicate-object triples from user corrections
  and INSERT into knowledge
- Query knowledge before acting to check for relevant preferences
- Answer "what did you do today?" by querying action_log
```

Review the AI's schema against what you learned in Structured Data and Persistent Storage. Are the constraints appropriate? Are the column types right? Adjust before implementing.

Here is what a working correction-capture instruction looks like in CLAUDE.md. Use this as a starting template — adapt the wording and examples for your profession:

```markdown
## Correction Capture

When the user corrects your output or states a preference (phrases like
"no, actually...", "I prefer...", "always do X", "never do Y", "wrong —
it should be..."), do this:

1. Acknowledge the correction
2. Extract the structured fact:
   - subject: who or what is this about (e.g., "Client X", "Grade 5", "CEO")
   - predicate: what attribute or preference (e.g., "prefers", "requires", "format")
   - object: the value (e.g., "bullet points", "simpler vocabulary", "no paragraphs")
3. Store it by running:
   sqlite3 /workspace/group/memory.db "INSERT INTO knowledge (subject, predicate, object, source) VALUES ('...', '...', '...', 'user correction')"
4. Confirm: "Got it, I have noted that [subject] [predicate] [object]."
```

The key insight: your employee needs to **detect** that a message is a correction (not a new task), **extract** the structured fact, and **persist** it. The CLAUDE.md instruction must be explicit about all three steps — if you leave any step implicit, the agent will skip it inconsistently.

</details>

<details>
<summary>Level 3 — Step-by-step implementation</summary>

**Step 1: Create the database**

NanoClaw agents run Claude Code inside containers. Your agent can execute SQLite commands using the `sqlite3` CLI or Python scripts. The group directory (`groups/main/`) is mounted as writable storage at `/workspace/group` inside the container — files you create there persist on the host filesystem and survive container restarts, just like your `CLAUDE.md`.

Create the database and both tables. You can do this by asking your employee to run the SQL, or by running it yourself on the host:

```sql
-- Run from inside the group directory
sqlite3 memory.db "
CREATE TABLE IF NOT EXISTS action_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action_type TEXT NOT NULL,
  target TEXT NOT NULL,
  trust_level TEXT NOT NULL CHECK(trust_level IN ('auto','approved','flagged')),
  result TEXT,
  timestamp TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS knowledge (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  subject TEXT NOT NULL,
  predicate TEXT NOT NULL,
  object TEXT NOT NULL,
  source TEXT NOT NULL,
  timestamp TEXT NOT NULL DEFAULT (datetime('now'))
);
"
```

**Step 2: Design your schemas in `memory-config.md`**

Document the two tables you created:

Action log table:

| Column      | Type    | Constraints                                                   | Purpose                                               |
| ----------- | ------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| id          | INTEGER | PRIMARY KEY AUTOINCREMENT                                     | Unique row identifier                                 |
| action_type | TEXT    | NOT NULL                                                      | Category: "report", "message", "categorization", etc. |
| target      | TEXT    | NOT NULL                                                      | What the action operated on                           |
| trust_level | TEXT    | NOT NULL, CHECK(trust_level IN ('auto','approved','flagged')) | Whether this was auto-approved or needed review       |
| result      | TEXT    |                                                               | Outcome or summary of what happened                   |
| timestamp   | TEXT    | NOT NULL DEFAULT (datetime('now'))                            | When the action occurred                              |

Knowledge table:

| Column    | Type    | Constraints                        | Purpose                                                           |
| --------- | ------- | ---------------------------------- | ----------------------------------------------------------------- |
| id        | INTEGER | PRIMARY KEY AUTOINCREMENT          | Unique row identifier                                             |
| subject   | TEXT    | NOT NULL                           | Who or what the fact is about                                     |
| predicate | TEXT    | NOT NULL                           | The relationship or attribute                                     |
| object    | TEXT    | NOT NULL                           | The value or preference                                           |
| source    | TEXT    | NOT NULL                           | Where this knowledge came from ("user correction", "observation") |
| timestamp | TEXT    | NOT NULL DEFAULT (datetime('now')) | When the knowledge was recorded                                   |

**Step 3: Add CLAUDE.md instructions**

Add these sections to your `groups/main/CLAUDE.md`. Be explicit — your employee executes these as `sqlite3` commands against `/workspace/group/memory.db`:

```markdown
## Memory System

Database: /workspace/group/memory.db (SQLite)

### Action Logging

After every autonomous action (sending a message, generating a report,
categorizing data, or any task completed without user prompting), log it:

sqlite3 /workspace/group/memory.db "INSERT INTO action_log (action_type, target, trust_level, result) VALUES ('<type>', '<target>', '<auto|approved|flagged>', '<what happened>')"

### Correction Capture

When the user corrects your output or states a preference (phrases like
"no, actually...", "I prefer...", "always do X", "never do Y"):

1. Acknowledge the correction
2. Extract: subject (who/what), predicate (attribute), object (value)
3. Store: sqlite3 /workspace/group/memory.db "INSERT INTO knowledge (subject, predicate, object, source) VALUES ('<subject>', '<predicate>', '<object>', 'user correction')"
4. Confirm what you stored

### Knowledge Querying

Before generating output for a specific person, client, or context, check
for relevant knowledge:

sqlite3 /workspace/group/memory.db "SELECT subject, predicate, object FROM knowledge WHERE subject LIKE '%<context>%'"

Apply any matching preferences to your output.

### Observability

When asked "what did you do today?" or similar, query and present:

sqlite3 /workspace/group/memory.db "SELECT action_type, target, result, timestamp FROM action_log WHERE date(timestamp) = date('now') ORDER BY timestamp"
```

**Step 4: Test action logging**

Trigger 3 autonomous actions (send a message, generate a summary, categorize something). Then ask your employee: "What did you do today?" Verify the response references actual action_log rows with timestamps. If it does not, check that the database file exists at `groups/main/memory.db` on the host and that the CLAUDE.md instructions reference the correct path.

**Step 5: Test the correction loop**

Give your employee 2 corrections during normal work. For example: "No, always use bullet points for Client X" or "Grade 5 needs simpler vocabulary." Then trigger a task that should use that knowledge. Verify the employee's behavior changed — it should now apply the correction without being reminded. If the correction is not picked up, check the knowledge table: `sqlite3 groups/main/memory.db "SELECT * FROM knowledge"` — if the row is missing, refine your correction-capture instruction to be more explicit about detection triggers.

**Step 6: Document in `memory-config.md`**

Record your final schemas, the CLAUDE.md instructions you added, and evidence of both tests (action log query results and correction-driven behavior change).

</details>
