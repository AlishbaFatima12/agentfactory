# Lesson 37: Code vs. Cowork - A Decision Framework

## Quick Reference

| Use Claude Code when...     | Use Claude Cowork when...    |
| --------------------------- | ---------------------------- |
| Writing software code       | Working with documents       |
| Running tests or builds     | Organizing files and folders |
| Using version control (git) | Processing spreadsheets      |
| Debugging or profiling      | Creating presentations       |
| Managing dependencies       | Analyzing PDFs and reports   |
| Comfortable with terminals  | Prefer visual interfaces     |

**Simple rule**: Code for code, Cowork for documents.

## Decision Criteria

### Criterion 1: What are you working with?

- Source code → Claude Code
- Office documents → Claude Cowork
- Mixed → Depends on primary task

### Criterion 2: What's your goal?

- Write/modify code → Claude Code
- Generate documents → Claude Cowork
- Run tests/builds → Claude Code
- Organize files → Claude Cowork

### Criterion 3: What's your comfort level?

- Developer, terminal comfortable → Claude Code
- Non-technical, prefer GUIs → Claude Cowork
- Both → Use both, task-dependent

## When to Use Both (Hybrid Workflows)

**Pattern 1: Development + Documentation**

```
Code: Build feature → Cowork: Create user docs → Code: Commit to repo
```

**Pattern 2: Analysis + Presentation**

```
Code: Run Python analysis → Cowork: Create PowerPoint with results
```

**Pattern 3: Script + Distribution**

```
Code: Write/test script → Cowork: Create user guide and package
```

## Skills Work Across Both

Skills you create work in **both interfaces**. A Skill for "financial report analysis" can be used in:

- Claude Code when processing data programmatically
- Claude Cowork when generating reports from spreadsheets

## The Convergence Path

**Where we started**: Two separate interfaces optimized for different use cases

**What's happening now**: Claude Code runs in terminal, VS Code, JetBrains, desktop app, web browser, and iOS app. The desktop app and web surfaces blur the Code/Cowork boundary, providing Code capabilities without terminal comfort.

**Where it's heading**: A unified experience where terminal power and visual convenience coexist in every surface.

**Implication**: Focus on patterns that transfer (agentic reasoning, Skill design), not interface-specific tricks.
