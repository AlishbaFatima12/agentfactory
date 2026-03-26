---
sidebar_position: 3
title: "Format Edge Cases in CV Parsing"
description: "Investigate what happens when the CV parser encounters empty fields, missing sections, mixed delimiters, and unexpected formats"
chapter: 70
lesson: 3
duration_minutes: 25
keywords:
  [edge cases, CV parsing, format handling, trace table, data validation]

skills:
  - name: "Identifying Data Edge Cases"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can identify at least four edge cases in a text parsing function and predict the parser's behavior for each"

  - name: "Tracing Parser Logic for Edge Inputs"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can complete a trace table showing variable state at each step when the parser encounters non-standard input"

learning_objectives:
  - objective: "Identify four or more edge cases in CV text that could cause the parser to produce incorrect or empty output"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Written list of edge cases with expected parser behavior"

  - objective: "Complete a trace table for _extract_section when the input has no matching header"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Filled trace table with correct variable values at each step"

cognitive_load:
  new_concepts: 3
  assessment: "Three concepts: edge case identification, trace table analysis, defensive parsing. Applies analytical skills from C68 simulation to concrete code."

differentiation:
  extension_for_advanced: "Design a test suite with pytest that covers all identified edge cases"
  remedial_for_struggling: "Start with just the empty string edge case; trace through _extract_section one line at a time"
---

# Format Edge Cases in CV Parsing

The CV parser from Lesson 2 works perfectly for Amara Okafor's well-formatted CV. Clean headers in uppercase. Skills separated by commas. Experience entries separated by blank lines. Every section present and labeled.

Real CVs are not this polite. Candidates format their resumes in dozens of ways. Some use lowercase headers. Some list skills with bullet points instead of commas. Some skip the education section entirely. Some put their email in the header instead of on its own line.

Before reading further, try this yourself: What are three inputs that would cause the `parse_cv` tool to return unexpected results? Write them down.

## Edge Case 1: Empty String

What happens when an agent calls `parse_cv("")`?

Trace through the code:

1. `cv_text.strip().split("\n")` on an empty string returns `[""]`
2. `name = lines[0].strip()` sets `name = ""`
3. The email loop finds no `@`, so `email = ""`
4. `_extract_section("", "SKILLS")` returns `""` (no matching header)
5. `_parse_skills("")` splits by newline and filters empties, returning `[]`
6. `_parse_experience("")` returns `[]`
7. `_extract_section("", "EDUCATION")` returns `""`

**Result:** A `ParsedCV` with all empty fields. No crash, but no warning either. The caller gets back what looks like a valid parsed CV with an empty name, no email, no skills, no experience, and no education. Downstream agents have no way to know whether the input was empty or the candidate genuinely has no skills.

## Edge Case 2: Missing Section Headers

Consider a CV with no "SKILLS" header:

```
Fatima Al-Hassan
fatima@example.com
Python, SQL, Machine Learning
Worked at DataCo for 3 years
MS Data Science, MIT
```

The `_extract_section` function searches for a line that exactly matches the header (case-insensitive). When it finds no match, it returns an empty string. The parser produces:

```json
{
  "name": "Fatima Al-Hassan",
  "email": "fatima@example.com",
  "skills": [],
  "experience": [],
  "education": ""
}
```

Fatima has skills, experience, and education, but the parser cannot find them because there are no section headers. The output is technically valid but factually wrong.

## Edge Case 3: Mixed Skill Delimiters

What if skills use a mix of commas and newlines?

```
SKILLS
Python, FastAPI
Docker
PostgreSQL, Redis
```

Trace through `_parse_skills`:

| Step | Line      | `"," in skills_text` | Action         | Result So Far                                        |
| ---- | --------- | -------------------- | -------------- | ---------------------------------------------------- |
| 1    | Full text | True (comma found)   | Split by comma | `["Python", "FastAPI\nDocker\nPostgreSQL", "Redis"]` |

The comma-split path wins because the text contains commas. But the split produces `"FastAPI\nDocker\nPostgreSQL"` as a single item. The parser returns three skills instead of five:

```json
["Python", "FastAPI\nDocker\nPostgreSQL", "Redis"]
```

The newline-separated skills in the middle get merged into one string. This is a **Data/Edge-Case Error**: the code handles two formats (comma-separated and newline-separated) but not a mix of both.

## Edge Case 4: Email Embedded in Name Line

Some CVs put the email on the same line as the name:

```
James Park (james.park@company.com)
```

The name extraction takes `lines[0]`, which gives `"James Park (james.park@company.com)"`. The email scan finds `@` and `.` in that line, so `email = "James Park (james.park@company.com)"`. Both fields contain incorrect data: the name includes the email, and the email includes the name.

## Trace Table Exercise

Complete this trace table for `_extract_section` when called with `_extract_section(cv_text, "EXPERIENCE")` on this input:

```
Chen Wei
chen@mail.com

Skills
Python, Java

Experience
Software Engineer at TechCo
Built REST APIs
```

Note: The headers are **not** in uppercase.

| Step | `line`                          | `line.strip().upper()` | `capturing` | `result_lines` | Notes                         |
| ---- | ------------------------------- | ---------------------- | ----------- | -------------- | ----------------------------- |
| 1    | `"Chen Wei"`                    | `"CHEN WEI"`           | False       | []             | (fill in)                     |
| 2    | `"chen@mail.com"`               | `"CHEN@MAIL.COM"`      | False       | []             | (fill in)                     |
| 3    | `""`                            | `""`                   | False       | []             | (fill in)                     |
| 4    | `"Skills"`                      | `"SKILLS"`             | (fill in)   | (fill in)      | Does this match "EXPERIENCE"? |
| 5    | `"Python, Java"`                | `"PYTHON, JAVA"`       | (fill in)   | (fill in)      | Is this a header?             |
| 6    | `""`                            | `""`                   | (fill in)   | (fill in)      | Empty line                    |
| 7    | `"Experience"`                  | `"EXPERIENCE"`         | (fill in)   | (fill in)      | Does this match?              |
| 8    | `"Software Engineer at TechCo"` | (fill in)              | (fill in)   | (fill in)      | `isupper()` check?            |
| 9    | `"Built REST APIs"`             | (fill in)              | (fill in)   | (fill in)      | `isupper()` check?            |

**Key question at Step 9:** `"BUILT REST APIS".isupper()` returns `True` and `len("BUILT REST APIS") > 2` is `True`. What happens?

:::tip Think about it
The line "Built REST APIs" is not a section header. It is a description of work experience. But after `.upper()`, Python's `isupper()` returns `True` because all alphabetic characters are uppercase. The parser treats it as a header boundary and stops capturing.

What would the function return? Only one line: `"Software Engineer at TechCo"`. The details about building REST APIs are lost.
:::

This is the kind of edge case that surfaces only with real data. The header detection logic (`line.strip().isupper() and len(line.strip()) > 2`) is too aggressive. It catches legitimate content lines that happen to contain uppercase words.

## Summary of Edge Cases

| Edge Case         | Input               | Behavior                   | Problem                    |
| ----------------- | ------------------- | -------------------------- | -------------------------- |
| Empty string      | `""`                | Returns all-empty ParsedCV | No warning to caller       |
| Missing headers   | No "SKILLS" line    | Skills returns `[]`        | Factually wrong output     |
| Mixed delimiters  | Commas + newlines   | Merges items incorrectly   | Data/Edge-Case Error       |
| Email in name     | `"Name (email)"`    | Both fields corrupted      | No email extraction logic  |
| Uppercase content | `"Built REST APIs"` | Treated as header boundary | Content truncated silently |

In the next lesson, you will see how one of these edge cases becomes the specific bug James ships to production.
