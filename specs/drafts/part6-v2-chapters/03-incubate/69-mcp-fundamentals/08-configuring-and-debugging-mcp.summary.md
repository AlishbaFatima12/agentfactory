---
title: "Configuring and Debugging MCP - Summary"
chapter: 69
lesson: 8
---

## Key Concepts

- **mcpServers Configuration**: JSON block with `command`, `args`, and `env` fields. The client launches the server as a child process (not connecting to a running one). Each client gets its own isolated server instance.
- **Environment Variable Interpolation**: Use `${VAR_NAME}` syntax to reference host environment variables at runtime. Never hardcode secrets in configuration files.
- **MCP Inspector**: Browser-based debugging tool (`mcp dev server.py`) that connects to your server and lets you manually call tools, read resources, and inspect prompts. Removes the AI model from the debugging loop.
- **JSON-RPC Error Codes**: -32700 (Parse error), -32601 (Method not found), -32602 (Invalid params), -32603 (Internal error). Each maps to a specific failure category.

## Mental Models

- The debugging decision tree: Server won't start (check imports, transport, Python version) then No tools listed (check decorators, Inspector) then Call fails (check params, names, error codes) then Wrong output (business logic bug, add logging).
- The Inspector isolates layers: if a manual call works in Inspector but fails through Claude Code, the problem is on the client side.

## Common Mistakes

- Using `print()` for debugging in an stdio server. Standard output IS the transport channel. Stray prints corrupt the JSON-RPC stream. Always use `print(..., file=sys.stderr)` or the `logging` module.
- Tool name mismatches (camelCase vs snake_case). Do not guess tool names on the client side; read them from `tools/list`.
- Hardcoding secrets in config files instead of using `${VAR_NAME}` interpolation.

## Quick Reference

```json
{
  "mcpServers": {
    "server-name": {
      "command": "uv",
      "args": ["run", "server.py"],
      "env": { "SECRET": "${SECRET}" }
    }
  }
}
```

Config locations: Claude Code: `.mcp.json` or `.claude/settings.json` (project-scoped). Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json` (global).

Debug logging: `print(f"debug info", file=sys.stderr)`

## Connection to Next Lesson

Lesson 9 is the capstone: expose your C7 Resume Screener skill as an MCP server using spec-first development, test-driven generation, and the full discipline stack (ruff, pyright, pytest).
