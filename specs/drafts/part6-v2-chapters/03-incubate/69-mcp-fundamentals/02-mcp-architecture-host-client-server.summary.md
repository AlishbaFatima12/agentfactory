---
title: "MCP Architecture: Host, Client, Server - Summary"
chapter: 69
lesson: 2
---

## Key Concepts

- **Host**: The user-facing application (Claude Desktop, VS Code, Cursor). Manages lifecycle: decides which servers to start/stop and enforces security boundaries. Does not execute tools itself.
- **Client**: Lives inside the host. Each client connects to exactly one server. Sends requests, receives responses, translates between host internals and MCP protocol format. One client per server for fault isolation.
- **Server**: A separate process that provides capabilities (tools, resources, prompts). Advertises what it can do, executes requests, returns structured results.
- **JSON-RPC 2.0**: The message format MCP uses. Requests have four fields: `jsonrpc`, `method`, `params`, `id`. Responses have `jsonrpc`, `result` or `error` (never both), and `id`.

## Mental Models

- Restaurant analogy: Host = restaurant manager (decides which kitchens are open), Client = waiter (carries orders to one kitchen), Server = kitchen (cooks dishes on request).
- One Client, One Server: a deliberate design choice for fault isolation. If one server crashes, other connections are unaffected.

## Common Mistakes

- Assuming one client can talk to multiple servers. Each client-server pair is an isolated connection.
- Confusing requests with notifications. Requests have an `id` field and expect a response. Notifications have no `id` and expect nothing back (e.g., the `initialized` message).

## Quick Reference

Connection sequence: Handshake (`initialize` request/response, `initialized` notification) then Discovery (`tools/list`) then Execution (`tools/call`).

Why MCP over REST: MCP connections are stateful, bidirectional, and have built-in capability discovery. REST is stateless, client-initiated only, and needs external specs for discovery.

## Connection to Next Lesson

Lesson 3 introduces the three types of capabilities servers can provide: Tools (model-controlled), Resources (application-controlled), and Prompts (user-controlled), each with distinct discovery and execution methods.
