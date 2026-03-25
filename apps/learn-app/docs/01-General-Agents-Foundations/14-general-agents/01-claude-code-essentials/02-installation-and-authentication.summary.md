### Core Concept

Claude Code installation bridges the gap from understanding the paradigm (Lesson 1) to hands-on usage. Successful setup requires selecting the right installation method for your platform and authenticating with your preferred cost model (subscription vs pay-per-use vs enterprise).

### Key Mental Models

- **Platform-Specific Installation**: Each platform (Windows/macOS/Linux) has a recommended primary method optimized for that environment, reducing decision fatigue from evaluating all options
- **Authentication Economics**: Three cost models exist: Claude App (subscription), Console API (pay-per-use), Enterprise (dedicated capacity). Your usage patterns and organizational requirements determine which to use
- **Free Plan Exclusion**: The free Claude.ai plan does not include Claude Code access. You need at least a Pro subscription ($20/month), a Console API account, or a free backend (Lesson 3)
- **Safety Boundaries**: Claude Code has your permissions. Start sessions in project directories (not system directories) and review commands before approving

### Critical Patterns

- **All platforms**: Native install (recommended); `curl -fsSL https://claude.ai/install.sh | bash` (macOS/Linux/WSL) or `irm https://claude.ai/install.ps1 | iex` (Windows PowerShell). Native installations auto-update in the background.
- **Windows**: Requires WSL or Git for Windows (Claude Code needs bash). Options: WSL (recommended), native PowerShell/CMD, WinGet (`winget install Anthropic.ClaudeCode`), or npm (deprecated)
- **macOS**: Native install (recommended), Homebrew (`brew install --cask claude-code`), or npm (deprecated fallback)
- **Linux/WSL**: Native install (recommended), or npm (deprecated fallback)
- **npm**: Deprecated; requires Node.js 18+. Use native install instead when possible
- **Homebrew**: Does NOT auto-update. Run `brew upgrade claude-code` periodically
- **System requirements**: 4 GB minimum RAM, macOS 13+, Windows 10+, Ubuntu 20.04+/Debian 10+
- Verify installation with `claude --version` before proceeding to authentication
- Select authentication based on your account type:
  - Method 1: Claude App (Pro/Max/Team subscription) - most common, unified access
  - Method 2: Console API (API credits, pay-per-use) - developers, usage-based billing
  - Method 3: Enterprise (Bedrock, Vertex AI, Microsoft Foundry) - organizations with cloud infrastructure
- Test setup with: `claude "Hello! Can you confirm Claude Code is working?"`
- Disable auto-updates via `settings.json` (recommended) or `DISABLE_AUTOUPDATER=1` env var

### Common Mistakes

- Running Claude Code in system directories (~/Library, /etc, C:\Windows) instead of project folders
- Signing up for the free Claude.ai plan and expecting Claude Code access (requires Pro or higher)
- Windows users: Trying to run Claude Code without WSL or Git for Windows
- Console API users: Not setting usage limits at console.anthropic.com/settings/limits
- Homebrew users: Assuming Claude Code auto-updates (it does not; run `brew upgrade claude-code`)
- Approving commands without review, especially `sudo` or administrative operations
- Alpine Linux users: Forgetting to install libgcc/libstdc++ and configure `USE_BUILTIN_RIPGREP=0`

### Connections

- **Builds on**: Lesson 1's distinction between passive AI tools and agentic collaboration
- **Leads to**: Lesson 3 (free backend alternative) or Lesson 04 (first conversation)
