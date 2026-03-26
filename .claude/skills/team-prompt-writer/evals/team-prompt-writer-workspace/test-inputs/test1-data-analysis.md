# Part 5: Data Analysis Fundamentals — Draft Spec

## Overview

This part teaches domain experts (non-programmers) to analyze business data
using AI-assisted workflows. The reader has completed Parts 0-4 and knows
how to write specifications, use Claude Code, and think systematically.
They do NOT know Python, SQL, or statistics.

The transformation: from "I have a spreadsheet and don't know what to do"
to "I can ask the right questions, get AI to do the analysis, and critically
evaluate the results."

## Target Audience

Business professionals, managers, consultants who make data-driven decisions
but rely on analysts to crunch numbers. They understand their domain deeply
but can't write a pivot table formula.

## Chapters

### Chapter 35: The Data Mindset (4 lessons)
- L01: What data can and cannot tell you (correlation ≠ causation, survivorship bias)
- L02: Asking good questions of data (hypothesis-first, not data-first)
- L03: The analysis workflow (question → data → method → interpretation → action)
- L04: Common statistical traps (Simpson's paradox, base rate neglect, p-hacking)

### Chapter 36: Working With Spreadsheets (5 lessons)
- L01: Structuring data for analysis (tidy data principles)
- L02: Using Cowork for data exploration (pivot tables, filtering, grouping)
- L03: Visualization principles (chart type selection, misleading charts)
- L04: Dashboard design for decision-makers
- L05: Exercise: Build a KPI dashboard from raw sales data

### Chapter 37: AI-Assisted Analysis (4 lessons)
- L01: When to use AI vs do it yourself (AI sweet spots and blind spots)
- L02: Prompting for data analysis (context, constraints, output format)
- L03: Evaluating AI-generated insights (checking methodology, not just results)
- L04: Exercise: Full analysis cycle with AI pair

### Chapter 38: From Analysis to Action (3 lessons)
- L01: Translating numbers into recommendations
- L02: Communicating uncertainty to non-technical stakeholders
- L03: Capstone: Present a data-driven recommendation to a simulated board

## Cross-References
- Ch 35 L01 references Part 0 systematic thinking
- Ch 36 L02-L04 uses Cowork (taught in Part 3 Ch 29)
- Ch 37 L02 references Part 1 prompt engineering
- Ch 38 L02 references Part 0 Ch 5 (communicating what matters)

## Quality Bar
Every lesson should feel like advice from a mentor who has made these
mistakes, not a textbook. Real datasets, real business scenarios, real
consequences of bad analysis. The reader should finish each lesson
feeling more confident AND more appropriately cautious.

## Output Directory
apps/learn-app/docs/05-Data-Analysis-Fundamentals/

## Special Constraints
- NO Python or SQL code (this is for non-programmers)
- All analysis done via Cowork + natural language prompts
- Exercises use downloadable CSV files from companion repo
- Em-dash limit: 0-1 per file
