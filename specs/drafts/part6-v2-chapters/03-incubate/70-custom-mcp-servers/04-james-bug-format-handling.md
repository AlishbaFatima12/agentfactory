---
sidebar_position: 4
title: "James's Bug: Missing Format Handling"
description: "Find and classify the bug in James's CV parser when it encounters a CV with title-case section headers instead of uppercase"
chapter: 70
lesson: 4
duration_minutes: 20
keywords:
  [planted bug, error taxonomy, data edge case, format handling, verification]

skills:
  - name: "Diagnosing Data/Edge-Case Errors"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can identify a Data/Edge-Case Error in parsing code, explain why the input triggers the bug, and classify it using the Error Taxonomy"

  - name: "Applying the Error Taxonomy"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can classify a bug into the correct Error Taxonomy category and explain the classification"

learning_objectives:
  - objective: "Find the specific line in _extract_section that causes incorrect boundary detection for title-case headers"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Identify the isupper() check and explain why it fails for title-case section headers"

  - objective: "Classify the bug using the Error Taxonomy and Verification Ladder"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Correct classification as Data/Edge-Case Error with appropriate verification rung"

cognitive_load:
  new_concepts: 2
  assessment: "Two concepts: bug classification with Error Taxonomy, asymmetric case handling in parsing. Builds on edge case analysis from Lesson 3."

differentiation:
  extension_for_advanced: "Write three pytest test cases that would catch this bug before deployment"
  remedial_for_struggling: "Re-read the _extract_section code from Lesson 2 and trace just the isupper() line"
---

# James's Bug: Missing Format Handling

James deployed his CV parser server from Lesson 2. The first three candidates had well-formatted CVs with uppercase section headers. Everything parsed correctly. Then candidate number four submitted this CV:

```
Priya Sharma
priya.sharma@techmail.com

SKILLS
Python, AWS, Terraform, CI/CD

EXPERIENCE
DevOps Lead
CloudScale Inc, 2022-2024
Managed AWS EKS clusters

SRE
NetOps Ltd, 2020-2022
Built CI/CD pipelines

Education
MSc Cloud Computing, Imperial College London, 2020
```

Notice the difference: "SKILLS" and "EXPERIENCE" are uppercase, but "Education" is in title case.

James expected:

```json
{
  "experience": [
    {
      "title": "DevOps Lead",
      "details": "CloudScale Inc, 2022-2024 Managed AWS EKS clusters"
    },
    { "title": "SRE", "details": "NetOps Ltd, 2020-2022 Built CI/CD pipelines" }
  ],
  "education": "MSc Cloud Computing, Imperial College London, 2020"
}
```

What he actually got:

```json
{
  "experience": [
    {
      "title": "DevOps Lead",
      "details": "CloudScale Inc, 2022-2024 Managed AWS EKS clusters"
    },
    {
      "title": "SRE",
      "details": "NetOps Ltd, 2020-2022 Built CI/CD pipelines"
    },
    {
      "title": "Education",
      "details": "MSc Cloud Computing, Imperial College London, 2020"
    }
  ],
  "education": "MSc Cloud Computing, Imperial College London, 2020"
}
```

"Education" appears as a job title in the experience list. Priya's degree got classified as work experience.

Before reading the analysis, look at the `_extract_section` code and find the specific line that causes this.

## Finding the Bug

The `_extract_section` function has two case-handling conditions:

**Start condition (line 7 of the function):**

```python
if line.strip().upper() == header.upper():
```

This comparison converts BOTH sides to uppercase. `"Education".upper() == "EDUCATION"` is `True`. The start condition is case-insensitive. It works correctly.

**Break condition (line 9 of the function):**

```python
if capturing and line.strip().isupper() and len(line.strip()) > 2:
    break
```

This check uses `isupper()`, which returns `True` only when ALL alphabetic characters in the string are uppercase. `"Education".isupper()` returns `False` because the `d`, `u`, `c`, `a`, `t`, `i`, `o`, `n` characters are lowercase.

The asymmetry is the bug: the parser starts sections case-insensitively but detects section boundaries case-sensitively. When a CV mixes uppercase headers ("EXPERIENCE") with title-case headers ("Education"), the parser starts capturing correctly but fails to stop at the next section.

When `_extract_section(cv_text, "EXPERIENCE")` runs:

1. It finds the "EXPERIENCE" header and starts capturing
2. It captures all the experience content
3. It reaches the "Education" line
4. `"Education".isupper()` is `False`, so it does NOT break
5. It captures "Education" and "MSc Cloud Computing..." as experience content
6. It reaches the end of the text

The experience section now includes education content. Then `_parse_experience` treats "Education" as a job title (first line of an entry) and the degree as job details.

## The Fix

Emma's version uses the same case handling for both conditions:

```python
def _extract_section(text: str, header: str) -> str:
    """Extract content between a header and the next header or end of text."""
    known_headers = {"SKILLS", "EXPERIENCE", "EDUCATION", "SUMMARY", "PROJECTS"}
    lines = text.strip().split("\n")
    capturing = False
    result_lines: list[str] = []
    for line in lines:
        normalized = line.strip().upper()
        if normalized == header.upper():
            capturing = True
            continue
        if capturing and normalized in known_headers and normalized != header.upper():
            break
        if capturing:
            result_lines.append(line.strip())
    return "\n".join(result_lines).strip()
```

**What changed:** Instead of `isupper()` as a generic header detector, Emma checks against a set of **known section headers**. The comparison `normalized in known_headers` works case-insensitively because both sides are uppercase. This handles title case, lowercase, and any other capitalization style.

"Wait," James said, looking at Emma's code. "You hardcoded the section names. What if someone uses a header we haven't thought of?"

"That's a valid concern," Emma said. "What's the alternative?"

"Use `isupper()` like I did. But that breaks on title case."

"So you need something more robust than `isupper()` but more flexible than a fixed list. What options do you have?"

James thought for a moment. "I could make the list configurable. Pass it as a parameter."

"Good. But for now, the known headers list covers the 80% case. The Modify exercises in Lesson 9 will ask you to make it configurable."

:::info ERROR TYPE
**Category:** Data/Edge-Case Error
**What happened:** The CV parser's section boundary detection used `isupper()`, which only matches ALL-UPPERCASE strings. Title-case headers like "Education" were not recognized as section boundaries, causing the experience section to absorb education content.
**Caught by:** Manual testing with a CV that uses mixed header capitalization
**Verification Rung:** Rung 1 (Predict-Run habit): James predicted the output, ran it, and discovered the discrepancy
:::

## Why This Matters

This bug is representative of a category: **format assumption errors**. James assumed all CVs use uppercase headers because the first three did. The parser "worked" in testing because the test data was too clean.

In production agent factories, your MCP servers process data from many sources. CVs come from LinkedIn exports, PDF extractors, manual copy-paste, and automated scrapers. Each source formats data differently. A parser that handles only one format silently corrupts data from every other format.

The fix is not to handle every possible format (that is impossible). The fix is to:

1. Define what formats you support explicitly (the `known_headers` set)
2. Report when data does not match expected formats (Lesson 7 covers this with Context logging)
3. Test with diverse inputs (Lesson 9 Modify exercises)

This is the same principle from Chapter 68's simulation: validate against diverse inputs, not just the happy path.
