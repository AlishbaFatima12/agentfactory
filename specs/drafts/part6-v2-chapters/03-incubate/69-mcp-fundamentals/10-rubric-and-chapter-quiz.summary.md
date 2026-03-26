---
title: "Rubric and Chapter Quiz - Summary"
chapter: 69
lesson: 10
---

## Key Concepts

- **Five Assessment Dimensions**: Prediction Accuracy, Trace Quality, MCP Server Building, Debugging Skill, and Independent Make. Each rated as Developing, Competent, or Fluent.
- **Self-Assessment vs. Memorization**: The rubric measures ability to apply knowledge, not recall facts. "Competent" in debugging means you can look up error codes and use the decision tree; "Fluent" means you recognize patterns without reference.
- **Question-to-Lesson Mapping**: Every quiz question traces back to a specific lesson, enabling targeted review of weak areas rather than re-reading the entire chapter.

## Mental Models

- The rubric is a snapshot, not a verdict. Competent is sufficient for moving forward; fluency comes through practice in subsequent chapters.
- Three reflection questions to calibrate: What was the hardest concept? Which primitive is still fuzzy? Where would you spend 30 more minutes?

## Common Mistakes

- Confusing resource control with tool control. Resources are application-controlled (the app decides when to load data), not model-controlled. This is the most common misconception.
- Thinking the `id` field in JSON-RPC is optional. It is what distinguishes a request (expects response) from a notification (fire-and-forget).
- Assuming `@mcp.tool()` prefixes the server name to the tool name. It uses the Python function name directly.

## Quick Reference

Quiz scoring: 13-15 = ready for Chapter 70. 10-12 = review missed lessons. 7-9 = focus on categories with 2+ wrong answers. Below 7 = revisit from Lesson 1.

| Questions | Topic                               | Review Lesson |
| :-------- | :---------------------------------- | :------------ |
| 1-2       | Host-Client-Server architecture     | Lesson 2      |
| 3         | JSON-RPC 2.0 format                 | Lesson 2      |
| 4-6       | Primitive control models            | Lesson 3      |
| 7-9       | FastMCP implementation              | Lessons 4-5   |
| 10        | Transport layers                    | Lessons 2, 4  |
| 11-15     | Configuration, Inspector, debugging | Lesson 8      |

## Connection to Next Lesson

This concludes Chapter 69. The MCP patterns practiced here form the foundation for every HireFlow FTE agent built in Chapters 70-81, where agents connect to shared tools, resources, and prompts through MCP servers.
