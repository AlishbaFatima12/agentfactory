# Cowork Content Design Rules

## Terminology (CRITICAL)

**The tool is called "Cowork." Not "Claude in Excel," not "Claude Cowork," not "Claude in Cowork," not "Claude in Excel (via Cowork)."**

| Wrong                          | Right         |
| ------------------------------ | ------------- |
| "Claude in Excel"              | "Cowork"      |
| "Claude in Excel (via Cowork)" | "Cowork"      |
| "Claude Cowork"                | "Cowork"      |
| "Claude in Cowork"             | "Cowork"      |
| "Open Claude in Excel"         | "Open Cowork" |

**"Claude in Excel" and "Cowork" are SEPARATE products.** "Claude in Excel" is the Excel-specific assistant (Ch 28). "Cowork" is Claude's collaborative workspace with spreadsheet side panel. They are not the same thing — never substitute one for the other. Ch 28 correctly uses "Claude in Excel" because that chapter teaches that product. Ch 29+ teaches Cowork-based workflows and must never say "Claude in Excel" when it means Cowork.

**When writing Try With AI setups**: Use `"Use these prompts in Cowork or your preferred AI assistant."` — not platform-specific instructions.

---

## Exercise Design for Cowork

### The Three-Step Pattern

Every Cowork exercise follows: **Prompt → Verify → Extend**

1. **Prompt** — Give Cowork a natural-language instruction
2. **Verify** — Ask Cowork to report what it built (Named Ranges, formulas, etc.), then evaluate against lesson principles
3. **Extend** — Add something new to test isolation/robustness

### Named Ranges Are Invisible

Named Ranges are metadata — NOT visible in the spreadsheet grid. Students cannot verify them by looking. Verification MUST be done via prompts:

```
List every Named Range in this spreadsheet. For each one, show me
the name, the cell it points to, and the current value.
```

**Never** use visual checklists (☐) for Named Range verification — the student cannot see them.

### Imperfect Agent Output Is a Feature

Cowork may not produce IDFA-perfect output (e.g., creating 11 Named Ranges instead of 4). This is a teaching moment — the student applies lesson concepts to evaluate and correct the agent's work. Design exercises to leverage this:

- Provide an expected outcome table so students can compare
- Include "What to look for" guidance with specific correction prompts
- Frame discrepancies as learning, not failure

### Progressive Model Building

Lessons 3-7 build ONE model progressively. Each lesson adds to the previous spreadsheet:

- L03: Assumptions layer
- L04: Calculation layer
- L05: LaTeX verification (adds WACC + NPV to the model, verifies in LaTeX)
- L06: Intent Notes
- L07: What-if and goal-seeking on the built model

Always include `:::note Keep This File` reminders between lessons.

---

## Plugin and Skill References

### Plugin Setup

Plugin installation belongs in the **chapter README prerequisites**, not repeated in every lesson. Lessons reference it with:

```markdown
:::tip Plugin Setup Reminder
This exercise requires the **[Plugin Name]** plugin installed in Cowork.
If you have not set it up yet, follow the instructions in the
[Chapter N prerequisites](./README.md#prerequisites) before continuing.
:::
```

### Skill Invocation — Three Methods

| Method              | How                                                    | Reliability                          | Taught In |
| ------------------- | ------------------------------------------------------ | ------------------------------------ | --------- |
| Auto-activation     | Trigger phrases in prompt match SKILL.md description   | High — depends on phrase recognition | L03-L08   |
| Explicit invocation | Student types `/skill-name` in chat                    | Certain — skill explicitly loaded    | L09       |
| Instructions pane   | Add NLP instructions via Cowork sidebar → Instructions | Always on — no prompt dependency     | L09       |

- **L03-L08 pattern**: Simple natural prompts. Skills may auto-activate from trigger phrases but students don't reference skills by name.
- **L09 pattern**: Teaches all three methods. Explicit = typing `/skill-name`. Instructions pane = persistent session-wide activation via Cowork's folder instructions (equivalent of `CLAUDE.md`).
- **Skill invocation is up to the agent** — none of the three methods guarantee the agent will use the skill. Instructions pane is the most reliable because it applies to every message in the session.

### Skill Name Format

When students invoke skills in Cowork:

- Correct: `/financial-architect`
- Wrong: `/idfa-financial-architect:financial-architect`

The student types only the skill name with a slash prefix. The plugin routing is handled internally.

---

## Plugin Structure in Lessons

When showing a plugin directory tree in lessons, show only what the student installs — NOT repo development artifacts.

**Plugin (show in tree):** `.claude-plugin/plugin.json`, `skills/`, `README.md`, `LICENSE`

**Dev artifacts (do NOT show):** `CLAUDE.md`, `evals/`, `examples/`, `tests/`, `specs/`, `.gitignore`

The repo may contain dev artifacts for contributors, but students install the plugin — not the repo. Keep trees focused on what they get.

---

## Known Terminology Debt (Part 3)

**187 occurrences of "Claude in Excel" across 37 files in Part 3.** Heaviest:

| Chapter                       | Files     | Occurrences | Priority                                                       |
| ----------------------------- | --------- | ----------- | -------------------------------------------------------------- |
| Ch 28 (Finance Domain Agents) | ~20 files | ~155        | **Correct** — Ch 28 teaches Claude in Excel (separate product) |
| Ch 29 (IDFA) L01-L02 + README | 4 files   | ~12         | Medium — contextual references to Ch 28 tools                  |
| Ch 30 (CA/CPA Practice)       | 4 files   | ~6          | Medium                                                         |
| Ch 33 (Legal Ops)             | 1 file    | 1           | Low                                                            |
| Ch 34 (Sales/RevOps)          | 1 file    | 1           | Low                                                            |
| Ch 26 (Enterprise Blueprint)  | 2 files   | 2           | Low                                                            |

**Ch 28 is correct** — "Claude in Excel" is the product Ch 28 teaches. The remaining ~32 occurrences in Ch 29-34 need review: some are legitimate cross-references to Ch 28's product, others should say "Cowork."
