### Core Concept

The Claude browser extension (named "Claude" in the Chrome Web Store) connects Claude to Chrome and Microsoft Edge, extending agentic workflows to the browser. Claude does the reasoning; the extension executes clicks and navigation. Browser automation is inherently slower than file operations and requires selective, security-conscious activation.

### Key Mental Models

- **Multi-Surface Architecture**: The extension works with Claude Desktop, the CLI (`claude --chrome`), and the VS Code extension. It is not tied to Desktop alone.
- **Browser vs. File Trade-off**: Use browser integration when data lives on the web; use file-based Cowork when data is already local. Overlapping both wastes time.
- **Selective Activation as Security Practice**: Activating the extension only on specific pages you choose (not by default everywhere) is the correct security posture, not a limitation.

### Critical Patterns

- Activate the extension per-page or per-site rather than globally; exclude sensitive sites like banking and password managers.
- Watch the extension highlight elements before Claude clicks; intervene immediately if something looks wrong.
- Start with single-page tasks (summarizing a page, filling one form) before attempting multi-page navigation workflows.
- Prefer file-based operations when data is already downloaded; reserve browser automation for tasks that genuinely require live web interaction.

### Common Mistakes

- Expecting browser automation to match file operation speed: page loads add 1-5 seconds per step by design.
- Assuming Claude can handle MFA flows or CAPTCHAs automatically: these always require manual intervention.
- Thinking the extension is Chrome-only: Microsoft Edge is also supported. Brave, Arc, and other Chromium browsers are not yet supported.
- Using outdated model names: current models are Haiku 4.5, Sonnet 4.6, and Opus 4.6.

### Connections

- **Builds on**: Cowork's propose-approve-execute pattern from Lesson 27
- **Leads to**: Plugins and Connectors, integrating external data sources beyond local files and the open web (Lesson 29)
