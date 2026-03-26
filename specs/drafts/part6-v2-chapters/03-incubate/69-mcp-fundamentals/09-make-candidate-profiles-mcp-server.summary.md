---
title: "Make: Resume Screener MCP Server - Summary"
chapter: 69
lesson: 9
---

## Key Concepts

- **Skill-to-MCP Mapping**: Take an existing agent skill definition (Resume Screener from Chapter 67) and map its capabilities to MCP primitives (tools, resources, prompts). The skill defines "what"; the MCP spec defines "how it is served."
- **Spec-First Development**: Write a specification document before any code. The spec translates the skill's natural-language contract into a typed MCP interface, forcing design decisions (parameter types, edge case handling, data shapes) out of the implementation phase.
- **Test-Driven Generation (TDG)**: Use the reviewed spec and Chapter 68 simulation scenarios to generate failing tests first, then generate implementation that passes them.
- **Discipline Stack**: `ruff check . && ruff format . && pyright && pytest`. Run in that order: lint first to clear noise, types second to catch schema mismatches, tests third to verify behavior.
- **Capstone Server**: "HireFlow Resume Screener" exposing the C7 Resume Screener skill with 2 tools (`parse_cv`, `score_candidate`), 1 templated resource (`candidates://profiles/{candidate_id}`), and 1 prompt (`screening_summary`).

## Mental Models

- The spec translates a skill's natural-language contract into a typed MCP interface. The decisions are the learning, not the typing.
- Build chain: skill definition (C7) + simulation results (C8) + MCP fundamentals (C9) = working MCP server.
- Phase sequence: Spec (AI-free) then Review (AI-assisted) then Tests (AI-generated, using C8 scenarios) then Implementation (AI-generated) then Discipline Stack then Inspector Verification then Git Commit.

## Common Mistakes

- Building from scratch instead of mapping an existing skill. The Resume Screener already defines what the server should do; the capstone is about the MCP bridge, not reinventing the skill.
- Skipping the spec to start coding directly. This leads to ad-hoc design decisions embedded in code that are hard to review and impossible to test against.
- Running pytest before pyright. Type errors can mean your tests are testing the wrong types.
- Forgetting to verify with the MCP Inspector after the discipline stack passes. pytest tests Python logic; the Inspector tests MCP protocol behavior.
- Inventing new sample data instead of reusing Chapter 68 simulation candidates. This breaks the validation chain.

## Quick Reference

Nine success criteria checklist:

1. Server starts without errors
2. `tools/list` returns both tools with correct schemas
3. `resources/list` returns the candidate resource template
4. `prompts/list` returns the screening prompt
5. `parse_cv` handles empty input gracefully
6. `score_candidate` produces scores between 0-100 (validated against C8 edge cases)
7. All code passes ruff, pyright, pytest
8. Inspector shows all primitives registered correctly
9. Sample data matches Chapter 68 simulations

## Connection to Next Lesson

Lesson 10 provides a self-assessment rubric across five dimensions (prediction accuracy, trace quality, server building, debugging, independent make) and a 15-question quiz covering the entire chapter. In Chapter 70, the student builds additional MCP servers. In Chapter 73, the Resume Screener MCP server built here is wired into a Claude Agents SDK agent.
