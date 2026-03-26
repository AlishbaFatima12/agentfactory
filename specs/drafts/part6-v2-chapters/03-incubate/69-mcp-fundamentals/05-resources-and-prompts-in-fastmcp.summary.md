---
title: "Resources and Prompts in FastMCP - Summary"
chapter: 69
lesson: 5
---

## Key Concepts

- **Direct Resource**: Fixed URI, no parameters. Example: `@mcp.resource("candidates://active")`. Returns a single dataset (e.g., all active candidates).
- **Templated Resource**: URI with `{parameter}` placeholders. Example: `@mcp.resource("jobs://{job_id}")`. FastMCP extracts the value from the URI and passes it to the function.
- **Simple Prompt**: Returns a string. Good for single instructions ("do this thing"). Example: screening instructions customized for a role.
- **Multi-Turn Prompt**: Returns `list[base.Message]` with `base.UserMessage` and `base.AssistantMessage`. Good for multi-step methodologies ("follow this process"). The assistant message frames the approach, not the answer.
- **Resources and "not found"**: Returning a descriptive text message (not a protocol error) is usually better for AI-facing resources, because the model can reason about "Job not found" more naturally.

## Mental Models

- If you need to specify "which one," it is a templated resource. If there is only one or you want all of them, it is a direct resource.
- Simple prompts describe _what_. Multi-turn prompts describe _how_.
- Same data, three access patterns: tool (model decides), resource (app decides), prompt (user decides). The trigger is the entire distinction.

## Common Mistakes

- Using a tool for passive data retrieval when a resource would be more appropriate. Ask: "Who should control when this data is fetched?"
- Confusing multi-turn prompts with answers. The assistant message in a multi-turn prompt establishes the methodology, not the final output.
- Forgetting that templated resources appear in `resource_templates/list`, not `resources/list`.

## Quick Reference

```python
@mcp.resource("scheme://fixed-path")      # Direct
@mcp.resource("scheme://{param}")          # Templated

@mcp.prompt()
def simple(arg: str) -> str: ...           # Single instruction

from mcp.server.fastmcp.prompts import base
@mcp.prompt()
def multi(arg: str) -> list[base.Message]: # Multi-turn
    return [base.UserMessage(...), base.AssistantMessage(...)]
```

## Connection to Next Lesson

Lesson 6 is a Parsons problem that tests structural understanding by having you reorder scrambled code lines into a working MCP server, reinforcing the import-init-register-define-document-implement-run sequence.
