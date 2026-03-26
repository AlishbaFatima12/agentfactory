

**TutorClaw**

Architecture 4: The OpenClaw-Native Design

MCP Server \+ Cloudflare R2 \+ Shim Skill

*If OpenClaw is the New OS, TutorClaw is Just an App*

**Zia Khan**  
CEO, Panaversity | COO, PIAIC  
agentfactory.panaversity.org  
March 2026

# **Abstract**

This paper presents the final recommended architecture for TutorClaw: an MCP-first design where TutorClaw is a remote Model Context Protocol server that OpenClaw agents connect to natively. The architecture has three components: (1) a TutorClaw MCP server hosting all pedagogical intelligence, learner state management, code execution, assessment logic, and monetization gating; (2) Cloudflare R2 with Workers for gated content delivery at zero egress cost; and (3) a thin Markdown shim skill installed in the learner’s OpenClaw that provides offline free-tier PRIMM-Lite fallback when the MCP server is unreachable. Total infrastructure cost: approximately $40–60/month. LLM cost to Panaversity: $0 (each learner uses their own API key). This paper documents the paradigm shift, evaluates five IP protection strategies in detail, presents the recommended MCP-first architecture with complete tool specifications and implementation code, and explains how Cloudflare R2 with Workers provides the gated content layer.

# **1\. The Paradigm Shift: OpenClaw as Operating System**

Architectures 1 through 3 all assumed Panaversity must build and operate the infrastructure that delivers TutorClaw to learners. Architecture 4 inverts this. If Jensen Huang is correct that OpenClaw is “the operating system for personal AI”—and the evidence supports this (NVIDIA backing, OpenAI foundation, Tencent integration, 400,000+ GitHub stars, NemoClaw for enterprise)—then within 6–12 months, having OpenClaw installed will be as normal as having a browser.

PIAIC makes OpenClaw installation a course prerequisite. The learner runs npx openclaw@latest, scans a QR code for WhatsApp, and has a personal AI agent platform running. Then TutorClaw is not a platform to build—it is an application to publish. The learner runs clawhub install tutorclaw, and their personal tutor comes alive.

This eliminates everything that made previous architectures expensive: no centralized servers for messaging, no container orchestration, no WhatsApp Business API, no Kubernetes, no Pod Snapshots, no per-learner compute. Panaversity publishes an MCP server and maintains a content store. That is the entire operational footprint.

# **2\. Installation: The Complete Learner Experience**

Before discussing architecture internals, we must design the experience from the learner’s perspective. A PIAIC student who has never used OpenClaw should go from zero to learning within minutes. There are three installation paths, and TutorClaw must support all of them.

## **2.1 Prerequisites: OpenClaw Installation**

OpenClaw installation is a course prerequisite, just as courses require Python or VS Code. PIAIC students install OpenClaw during their first week:

\# Step 1: Install OpenClaw (one-time)

npx openclaw@latest

\# Step 2: Follow the onboarding wizard

openclaw onboard

  → Select LLM provider (Anthropic, OpenAI, or local via Ollama)

  → Enter API key

  → Connect WhatsApp (scan QR code)

  → Connect Telegram (optional, via BotFather token)

\# Step 3: Verify OpenClaw is running

openclaw status

  → Gateway: running

  → WhatsApp: connected

  → Model: anthropic/claude-sonnet-4-5

At this point the student has a working personal AI assistant accessible via WhatsApp. TutorClaw builds on top of this foundation.

## **2.2 Path A: One-Command ClawHub Installation (Recommended)**

ClawHub is OpenClaw’s public skill registry—a marketplace of 3,200+ skills that can be installed with a single command. Panaversity publishes TutorClaw on ClawHub as a skill bundle containing the shim skill (SKILL.md) and the MCP server configuration. The learner runs:

\# Install TutorClaw from ClawHub

clawhub install panaversity/tutorclaw

This single command does three things:

**1\. Installs the shim skill.** ClawHub downloads the TutorClaw SKILL.md file into the learner’s OpenClaw workspace at \~/.openclaw/workspace/skills/tutorclaw/SKILL.md. OpenClaw discovers it automatically on the next session. The skill contains PRIMM-Lite (the free-tier offline fallback framework) and the MCP server connection URL.

**2\. Configures the MCP server connection.** The skill bundle includes MCP server metadata that ClawHub writes into the learner’s \~/.openclaw/openclaw.json configuration:

// Added to \~/.openclaw/openclaw.json by clawhub install

{

  "mcpServers": {

    "tutorclaw": {

      "url": "https://mcp.tutorclaw.panaversity.org/sse",

      "transport": "sse",

      "status": "active",

      "env": {}

    }

  }

}

**3\. Triggers first-run registration.** On the learner’s next WhatsApp message, OpenClaw connects to the TutorClaw MCP server, discovers its tools, and the agent automatically calls the register\_learner tool. The MCP server creates a learner record, issues an API key, and returns a welcome message. The API key is stored in OpenClaw’s persistent memory for subsequent sessions.

The learner’s experience from their perspective:

Terminal:   clawhub install panaversity/tutorclaw

           → ✔ Installed tutorclaw (skill \+ MCP server)

WhatsApp:  "Hi, I want to start learning AI development"

           → "🦞 Welcome to TutorClaw\! I’m your personal AI tutor

              for The AI Agent Factory. You’re on the Free tier

              (20 exchanges/day, Chapters 1-5).

              Let’s start with Chapter 1: What is an AI Agent?"

Total time from OpenClaw already running to TutorClaw active: **under 60 seconds.**

## **2.3 Path B: OpenClaw Launch Visual Installation**

For learners who prefer a graphical interface, OpenClaw Launch provides a visual skills browser. OpenClaw Launch is a companion app that lets users browse, search, and toggle skills without touching the command line.

\# Open OpenClaw Launch (visual skill browser)

openclaw launch

  → Browser opens at http://localhost:18790

  → Search: "tutorclaw"

  → Click "Install" on panaversity/tutorclaw

  → Toggle: ON

  → Done. TutorClaw is active.

OpenClaw Launch handles the same three steps as clawhub install (skill download, MCP config, and first-run registration) but through a point-and-click interface. No terminal required. This is the recommended path for PIAIC beginners who are not yet comfortable with CLI commands.

## **2.4 Path C: Manual Configuration (Advanced/Custom)**

For advanced students or developers who want to understand exactly what TutorClaw installs, or who want to customize the configuration (e.g., pointing to a self-hosted MCP server for development):

\# Step 1: Create the skill directory

mkdir \-p \~/.openclaw/workspace/skills/tutorclaw

\# Step 2: Download the shim skill

curl \-o \~/.openclaw/workspace/skills/tutorclaw/SKILL.md \\

  https://raw.githubusercontent.com/panaversity/tutorclaw/main/SKILL.md

\# Step 3: Add MCP server to openclaw.json

openclaw config set mcpServers.tutorclaw.url \\

  "https://mcp.tutorclaw.panaversity.org/sse"

openclaw config set mcpServers.tutorclaw.transport "sse"

openclaw config set mcpServers.tutorclaw.status "active"

\# Step 4: Verify MCP tools are discovered

openclaw tools list

  → tutorclaw:register\_learner

  → tutorclaw:get\_learner\_state

  → tutorclaw:get\_chapter\_content

  → tutorclaw:get\_pedagogical\_guidance

  → tutorclaw:submit\_code

  → tutorclaw:assess\_progress

  → tutorclaw:get\_next\_exercise

  → tutorclaw:update\_progress

  → tutorclaw:get\_upgrade\_url

This is also the path used in the book’s chapters where students build their understanding step by step—they see exactly what gets installed, where files go, and how OpenClaw discovers MCP tools.

## **2.5 Post-Installation: The Registration Flow**

Regardless of installation path, the first WhatsApp message triggers a registration flow:

1\. Learner sends first message to their OpenClaw via WhatsApp

2\. OpenClaw’s agent detects TutorClaw MCP tools are available

3\. Agent calls MCP: register\_learner(whatsapp, name)

   → MCP server creates learner record in PostgreSQL

   → Returns: { learner\_id, api\_key, tier: "free" }

4\. Agent stores api\_key in OpenClaw’s persistent memory

   → Key persists across sessions, no re-registration needed

5\. Agent calls MCP: get\_learner\_state(learner\_id, api\_key)

   → Returns: { chapter: 1, stage: "predict", exchanges\_remaining: 20 }

6\. Agent calls MCP: get\_chapter\_content(1, "intro", api\_key)

   → MCP server fetches from R2, returns Chapter 1 intro

7\. Agent assembles context and generates welcome \+ first lesson

8\. Learner receives personalized welcome via WhatsApp

From the learner’s perspective, they typed one message and received a personalized tutoring response. From the system’s perspective, five MCP tool calls happened behind the scenes in under 2 seconds.

## **2.6 Upgrading Tiers**

When a free-tier learner hits their 20 exchanges/day limit, or attempts to access Chapter 6+, the MCP server returns an upgrade prompt. The agent displays it naturally:

WhatsApp:  "Can you teach me about async/await from Chapter 12?"

TutorClaw: "🔒 Chapter 12 is available on the Paid plan.

           You’ve been doing great with Chapters 1-5\!

           

           Upgrade to TutorClaw Paid (PKR 500/month) to unlock:

           • All 30 chapters

           • Full PRIMM-AI+ personalized tutoring

           • Code execution (paste your code, I’ll run it\!)

           • 50 exchanges/day

           

           Upgrade here: https://panaversity.org/tutorclaw/upgrade?key=tc\_xxx"

The link opens a Stripe Checkout page. On successful payment, Stripe’s webhook updates the learner’s tier in PostgreSQL. The next MCP tool call returns tier: “paid” and all premium features unlock instantly—no reinstallation, no configuration change.

## **2.7 Updating TutorClaw**

Because most of TutorClaw’s intelligence lives in the MCP server (server-side, updated by Panaversity) and content lives in R2 (updated by uploading new files), most updates require zero learner action. The MCP server’s tools automatically expose new capabilities when Panaversity deploys them.

Only changes to the shim skill itself (rare—the PRIMM-Lite fallback framework or the MCP endpoint URL) require a learner-side update:

\# Update TutorClaw shim skill from ClawHub

clawhub update panaversity/tutorclaw

\# Or update all installed skills at once

clawhub update \--all

The expectation is that 95%+ of updates are server-side (MCP server code or R2 content) and require no learner action. This is a core advantage of the MCP-first architecture over a Markdown-only skill: the skill is a thin, stable shim while the intelligence evolves server-side.

# **3\. Five IP Protection Strategies Evaluated**

The central challenge with OpenClaw-native distribution: OpenClaw skills are Markdown files that anyone can read, copy, and redistribute. TutorClaw’s core IP—the PRIMM-AI+ framework, Verification Ladder, Error Taxonomy, confidence scoring, and 30 chapters of curriculum—must be protected. Five strategies were evaluated.

## **3.1 Strategy 1: Full Open Source**

Publish everything freely. Monetize through brand, certification, and support. Precedent: Red Hat built a multi-billion-dollar business on free Linux. The PRIMM-AI+ framework, all prompts, all chapter content—everything is open.

**Strengths:** Maximum distribution. Community contributions improve the skill. Maximum book alignment (readers see exactly how the skill works). No technical complexity around IP protection.

**Weaknesses:** Competitors can clone and rebrand. The pedagogical framework becomes a commodity. No recurring software revenue.

**Assessment:** Viable if PIAIC’s certification carries sufficient value in Pakistan’s market to sustain the organization without software revenue. Appropriate for an educational nonprofit, less appropriate for a product business.

## **3.2 Strategy 2: Server-Side Brain (Pure SaaS Skill)**

The skill installed in OpenClaw is a thin API client. It sends every learner message to Panaversity’s server and displays the response. All intelligence is server-side.

**Strengths:** Strongest IP protection through obscurity—nothing exists locally. Full control over the learner experience.

**Weaknesses:** Reintroduces server costs. Creates a single point of failure (API downtime \= all tutoring stops). Every interaction requires a network round-trip. The skill is useless offline. LLM calls are prompt-instructed HTTP requests from Markdown, which unreliable with weak models.

**Assessment:** Strong IP protection but fragile architecture. Superseded by Strategy 5 (MCP Server), which provides the same server-side IP protection with native agent integration rather than prompt-instructed HTTP calls.

## **3.3 Strategy 3: Encrypted Skill with License Key**

Distribute the skill encrypted. On installation, the learner enters a license key. The skill decrypts and becomes active.

**Strengths:** Conceptually simple access control.

**Weaknesses:** Technically near-impossible. OpenClaw skills are Markdown files loaded into the LLM’s context window—they must be plain text for the LLM to read them. Decrypted content is visible in session logs, memory files, and LLM API calls. Any technical user can extract the plain text. Security through obscurity that will be cracked within hours.

**Assessment:** Not viable. Rejected.

## **3.4 Strategy 4: Tiered Skill (Free Core \+ Premium Server API)**

A hybrid with two layers: a free layer (open-source Markdown skill with PRIMM-Lite and chapters 1–5) and a premium layer (server-side REST API with full PRIMM-AI+, chapters 6–30, and assessment logic). The skill embeds REST API calls that the LLM executes when the learner has a premium key.

**The Detailed Flow for Strategy 4:**

The Markdown skill contains the PRIMM-Lite framework directly as text—a simplified three-stage pedagogical approach (Predict → Run → brief Investigate) that works with any LLM, including weak local models. For free-tier learners, the entire tutoring experience is local: OpenClaw’s agent reads the skill’s Markdown instructions, fetches chapter content from Cloudflare R2 (chapters 1–5 are ungated), and generates responses using the learner’s own API key. No Panaversity server is involved.

For paid-tier learners, the skill instructs the LLM to make REST API calls to Panaversity’s server: POST to /tutorclaw/pedagogy with the learner’s message and state, receiving back PRIMM-AI+ guidance; GET from /tutorclaw/learner/{id}/state for progress data; and POST to /tutorclaw/learner/{id}/state/update after each interaction. The skill also instructs the LLM to include the API key in request headers for authentication.

Chapter content for paid tiers is also gated: a Cloudflare Worker validates the learner’s API key before returning chapters 6–30 from R2. The Worker checks the key against Panaversity’s database and returns the content or a 403 with an upgrade prompt.

**Strengths of Strategy 4:**

Genuinely useful free tier that works offline—PRIMM-Lite \+ chapters 1–5 operate entirely locally. Ships in hours (it is just a Markdown file). IP is protected for the premium tier (PRIMM-AI+, Verification Ladder, Error Taxonomy, and chapters 6–30 never leave the server). Natural upgrade funnel from free to paid.

**Weaknesses of Strategy 4:**

**The REST-from-Markdown reliability problem.** The skill instructs the LLM to format and execute HTTP requests by interpreting Markdown instructions. This is prompt engineering, not structured tool use. With Claude Sonnet or GPT-5.4, this works well. With weaker or local models (DeepSeek, Ollama-hosted Qwen, Llama), the LLM frequently misformats the JSON body, forgets the authentication header, fails to parse the response, or hallucinates the API URL. The success rate of REST calls from Markdown skills on non-frontier models can be as low as 60–70%, which means 30–40% of premium interactions fail silently.

**No code execution.** The REST API can return pedagogical guidance, but it cannot execute learner code. If a student pastes a Python function and says “run this,” the tutor can only read the code and guess at errors. For an AI-native development curriculum, this is a significant pedagogical limitation.

**No automatic tool discovery.** When Panaversity adds a new feature (study plan generator, peer comparison, chapter quiz), the Markdown skill must be manually updated with new REST call instructions, published to ClawHub, and each learner must update. This is slow and friction-heavy.

**Static schema.** REST calls from Markdown have no type validation. The LLM can send a chapter number as a string instead of an integer, or omit required fields, and the skill has no way to catch this before the request fails.

**Assessment:** Strategy 4 is the correct MVP—it ships immediately and the free tier is resilient. But its premium tier’s reliance on prompt-instructed HTTP calls creates a fragile, model-dependent experience that degrades significantly on non-frontier models. Strategy 5 resolves every weakness while preserving Strategy 4’s free-tier strengths.

# **4\. Recommended Architecture: Strategy 5 (TutorClaw as MCP Server)**

The Model Context Protocol (MCP) is an open standard created by Anthropic that defines how AI models discover and call external tools. It is the universal interface between AI agents and external capabilities—what USB is to hardware, MCP is to AI tools. Every skill on OpenClaw’s ClawHub is already an MCP server. Over 65% of active OpenClaw skills wrap MCP servers.

Strategy 5 makes TutorClaw a remote MCP server that OpenClaw agents connect to natively over SSE (Server-Sent Events). The learner’s agent discovers TutorClaw’s tools through the MCP protocol and calls them as naturally as it calls any other tool—file system access, web search, calendar—but the “tool” is a pedagogical engine running on Panaversity’s server.

**Everything goes into the MCP server:** learner registration, state management, pedagogical guidance (PRIMM-AI+), code execution, assessment, progress tracking, and monetization gating. **Content delivery stays on Cloudflare R2 with Workers** for zero-egress global distribution with access control. **A thin Markdown shim skill** provides offline PRIMM-Lite fallback for the free tier.

## **4.1 The Three Components**

| Component | What It Contains | Where It Runs | IP Exposure |
| :---- | :---- | :---- | :---- |
| TutorClaw MCP Server | All APIs, PRIMM-AI+ engine, code sandbox, Verification Ladder, Error Taxonomy, scoring, monetization gate | Panaversity VPS ($40–60/mo) | Zero—server-side only |
| Cloudflare R2 \+ Workers | 30 chapters, exercises, rubrics. Worker gates Ch. 6–30 by API key | Cloudflare edge (330+ DCs, free tier) | Ch. 1–5 open, Ch. 6–30 key-gated |
| Shim Skill (Markdown) | PRIMM-Lite (3-stage), MCP config, offline fallback logic | Learner’s OpenClaw (local) | Open (low-value, intentional) |

## **4.2 The MCP Tool Surface**

The TutorClaw MCP server exposes structured tools that OpenClaw discovers and invokes natively:

| MCP Tool | Purpose | Tier Access | Returns |
| :---- | :---- | :---- | :---- |
| register\_learner | Onboard new learner, issue API key | All (once) | learner\_id \+ api\_key \+ tier |
| get\_learner\_state | Fetch chapter, stage, confidence, exchanges remaining | All | JSON learner state |
| get\_chapter\_content | Fetch chapter content from R2 via Worker | Free: Ch.1–5, Paid: All | Markdown content chunk |
| get\_pedagogical\_guidance | Run PRIMM-AI+ decision engine | Paid \+ Premium | System prompt addition \+ instruction |
| submit\_code | Execute learner code in server-side sandbox | Paid \+ Premium | stdout \+ stderr \+ error analysis |
| assess\_progress | Run Verification Ladder assessment | Paid \+ Premium | Rubric scores \+ recommendations |
| get\_next\_exercise | Generate Parsons problem or coding challenge | Paid \+ Premium | Exercise JSON with scaffolding |
| update\_progress | Record interaction outcome, update confidence scores | All | Updated state confirmation |
| get\_upgrade\_url | Return Stripe checkout URL for tier upgrade | Free | Stripe checkout URL |

Note that the Panaversity REST API endpoints from Strategy 4 (/register, /learner/{id}/state, /pedagogy, etc.) have collapsed entirely into MCP tools. There is no separate REST API. The MCP server IS the API. This simplifies the architecture: one server, one protocol, one authentication mechanism.

The get\_chapter\_content tool is special: it calls Cloudflare R2 internally (server-to-R2), not the learner’s OpenClaw. The MCP server validates the learner’s tier, fetches the appropriate content from R2, and returns it as an MCP tool response. The learner’s machine never directly contacts R2 for premium content—all access control is enforced server-side inside the MCP tool.

## **4.3 Cloudflare R2 \+ Workers: The Content Layer**

Cloudflare R2 provides S3-compatible object storage with zero egress fees. The free tier includes 10 GB storage, 1 million writes, and 10 million reads per month. TutorClaw’s 30 chapters total approximately 5–10 MB—entirely within the free tier.

Content is organized in an R2 bucket:

tutorclaw-content/

├── chapters/

│   ├── 1/ (intro.md, concepts.md, exercises.json)

│   ├── 2/ through 30/

├── exercises/parsons/

├── assessments/rubrics/

└── meta/chapter-index.json, version.json

A Cloudflare Worker sits at content.tutorclaw.panaversity.org and enforces two-tier access:

// Cloudflare Worker (content gating)

export default {

  async fetch(request, env) {

    const url \= new URL(request.url);

    const chapterNum \= parseInt(url.pathname.split('/')\[2\]);

    // Chapters 1-5: open access (free tier \+ shim skill)

    if (chapterNum \<= 5\) {

      const obj \= await env.R2\_BUCKET.get(url.pathname.slice(1));

      return new Response(obj.body);

    }

    // Chapters 6-30: require valid API key (MCP server calls this)

    const apiKey \= request.headers.get('X-TutorClaw-Key');

    const tier \= await validateKeyWithDB(apiKey, env);

    if (tier \!== 'paid' && tier \!== 'premium')

      return new Response('Upgrade required', { status: 403 });

    const obj \= await env.R2\_BUCKET.get(url.pathname.slice(1));

    return new Response(obj.body);

  }

}

**Two access paths exist:**

**Path A (MCP server → R2 Worker):** The get\_chapter\_content MCP tool runs server-side. It calls the R2 Worker with the learner’s API key, receives the content, and returns it as an MCP tool response. The learner’s OpenClaw only sees the content returned by the tool—it never contacts R2 directly. This is the primary path for all premium content.

**Path B (Shim skill → R2 Worker directly):** When the MCP server is unreachable (offline mode), the shim skill instructs the LLM to fetch chapters 1–5 directly from R2 (ungated). This is the fallback path for the free tier only.

**Instant content updates:** Uploading a revised chapter to R2 instantly updates it for every TutorClaw instance worldwide. No skill update. No learner action. Panaversity can A/B test content by routing different learner segments to different R2 paths based on API key metadata.

## **4.4 The Shim Skill: Offline Fallback for Free Tier**

The shim skill is a minimal Markdown file (\~50 lines) installed in the learner’s OpenClaw. It serves two purposes:

**Purpose 1: MCP server configuration.** The skill configures the TutorClaw MCP server connection so that OpenClaw discovers and connects to it automatically:

\# TutorClaw Skill

\#\# MCP Server Configuration

Connect to the TutorClaw MCP server for personalized AI tutoring.

MCP endpoint: https://mcp.tutorclaw.panaversity.org/sse

\#\# Offline Fallback (when MCP server is unreachable)

If the TutorClaw MCP tools are unavailable, use this simplified

PRIMM-Lite framework for chapters 1-5:

\#\#\# PRIMM-Lite: Three-Stage Pedagogical Framework

Stage 1 \- PREDICT: Ask the learner what they think the code will do

Stage 2 \- RUN: Have the learner run the code and compare with prediction

Stage 3 \- INVESTIGATE: Guide the learner to explore why the result occurred

For chapter content, fetch from:

https://content.tutorclaw.panaversity.org/chapters/{number}/

Chapters 1-5 are freely accessible.

**Purpose 2: Resilient free-tier fallback.** When the MCP server is unreachable (downtime, network issues, or the learner is offline), OpenClaw’s agent falls back to the Markdown instructions. The PRIMM-Lite framework embedded in the skill provides a genuinely useful—if simplified—tutoring experience using only the learner’s local LLM and the ungated chapters 1–5 from R2. This means the free tier never goes completely dark.

**What the shim skill does NOT contain:** Full PRIMM-AI+ framework, Verification Ladder, Error Taxonomy, confidence scoring, assessment logic, chapters 6–30 content, or any premium pedagogical logic. All of that lives exclusively in the MCP server.

## **4.5 The MCP Server Implementation**

The TutorClaw MCP server is built using the official Python MCP SDK and runs as a persistent process exposed via SSE transport:

\# tutorclaw\_mcp\_server.py (core structure)

from mcp.server import Server

from mcp.types import Tool, TextContent

import httpx, json

server \= Server("tutorclaw")

@server.tool("register\_learner")

async def register(whatsapp: str, name: str):

    """Register a new learner and issue an API key."""

    learner \= await db.create\_learner(whatsapp, name)

    return TextContent(text=json.dumps({

        "learner\_id": learner.id,

        "api\_key": learner.api\_key,

        "tier": "free",

        "message": "Welcome to TutorClaw\! You have 20 free exchanges/day."

    }))

@server.tool("get\_learner\_state")

async def get\_state(learner\_id: str, api\_key: str):

    """Retrieve learner’s current chapter, PRIMM stage, confidence,

    and exchanges remaining."""

    await validate\_key(api\_key, learner\_id)

    state \= await db.get\_learner\_state(learner\_id)

    return TextContent(text=json.dumps(state))

@server.tool("get\_chapter\_content")

async def get\_chapter(chapter: int, section: str, api\_key: str):

    """Fetch chapter content. Calls Cloudflare R2 Worker internally."""

    tier \= await get\_tier(api\_key)

    if chapter \> 5 and tier \== "free":

        return TextContent(text=json.dumps({

            "error": "upgrade\_required",

            "message": "Upgrade to access Chapter " \+ str(chapter),

            "upgrade\_url": await get\_stripe\_url(api\_key)

        }))

    \# Fetch from R2 via Worker (server-to-R2, not client-to-R2)

    async with httpx.AsyncClient() as client:

        resp \= await client.get(

            f"https://content.tutorclaw.panaversity.org/chapters/{chapter}/{section}.md",

            headers={"X-TutorClaw-Key": api\_key}

        )

    return TextContent(text=resp.text)

@server.tool("get\_pedagogical\_guidance")

async def get\_guidance(message: str, learner\_id: str,

                       chapter\_content: str, api\_key: str):

    """Run the full PRIMM-AI+ decision engine. Returns pedagogical

    guidance tailored to this learner at this moment."""

    tier \= await get\_tier(api\_key)

    if tier \== "free":

        return TextContent(text="Use PRIMM-Lite from the skill file.")

    state \= await db.get\_learner\_state(learner\_id)

    \# Core IP: PRIMM-AI+ engine runs here, server-side only

    guidance \= await primm\_ai\_plus\_engine(

        message=message, state=state, content=chapter\_content

    )

    return TextContent(text=json.dumps(guidance))

    \# Returns: { system\_prompt\_addition, pedagogical\_instruction,

    \#            verification\_ladder\_step, error\_taxonomy\_match,

    \#            confidence\_adjustment, next\_exercise }

@server.tool("submit\_code")

async def submit\_code(code: str, language: str, api\_key: str):

    """Execute learner’s code in a server-side sandbox."""

    tier \= await get\_tier(api\_key)

    if tier \== "free":

        return TextContent(text="Code execution requires a paid plan.")

    result \= await sandbox\_execute(code, language, timeout=10)

    analysis \= await analyze\_error(result, language)

    return TextContent(text=json.dumps({

        "stdout": result.stdout,

        "stderr": result.stderr,

        "exit\_code": result.exit\_code,

        "error\_analysis": analysis

    }))

@server.tool("get\_upgrade\_url")

async def get\_upgrade(api\_key: str, target\_tier: str):

    """Return a Stripe checkout URL for tier upgrade."""

    url \= await create\_stripe\_checkout(api\_key, target\_tier)

    return TextContent(text=json.dumps({

        "url": url,

        "message": f"Visit this link to upgrade to {target\_tier}"

    }))

The server runs on a $40–60/month VPS (e.g., Hetzner, DigitalOcean), exposed via SSE at mcp.tutorclaw.panaversity.org. Cloudflare proxies the endpoint for global edge performance and DDoS protection. Authentication uses the learner’s TutorClaw API key, passed as a parameter in every tool call.

## **4.6 SSE Transport: Why Remote, Not Local**

MCP supports two transports: SSE (remote, over HTTPS) and Stdio (local, spawned as child process). TutorClaw uses SSE exclusively for the production server because all IP stays server-side, content gating is enforced by the server, and there is no local code to reverse-engineer. The tradeoff is \~50–100ms latency per tool call, which is imperceptible in a WhatsApp conversation where LLM response times are 3–10 seconds.

Stdio transport would require distributing the server binary to learners’ machines, where it would be inspectable and copyable. This defeats IP protection entirely. Stdio is appropriate for local development skills (file system access, git integration) but not for proprietary pedagogical logic.

# **5\. Why MCP Server Is Superior to REST API Calls from Markdown**

This section explains why Strategy 5 resolves every weakness of Strategy 4:

**Agent-native tool use vs. prompt-instructed HTTP.** In Strategy 4, the Markdown skill instructs the LLM to format and execute HTTP requests. The LLM must interpret the instruction, format JSON, include headers, parse responses, and handle errors—all through prompt engineering. With non-frontier models, this fails 30–40% of the time. In Strategy 5, OpenClaw’s agent runtime handles MCP tool calls directly. The LLM outputs “call get\_chapter\_content with chapter=12, section=async-await” and the runtime handles transport, serialization, validation, and error handling. This works reliably even with weak local models.

**Structured schemas with validation.** MCP tools have typed schemas (chapter: integer, section: string, api\_key: string). OpenClaw validates arguments before sending the request. Malformed calls are caught at the runtime level, not after a failed HTTP request.

**Server-side code execution.** The submit\_code tool executes learner code in a sandboxed environment on Panaversity’s server. This is the pedagogical feature that Strategy 4 could not provide. A tutor that can run code, see errors, and explain them is fundamentally more powerful than one that reads code and guesses.

**Automatic tool discovery.** When Panaversity adds a new tool (get\_study\_plan, compare\_with\_peers, generate\_flashcards), every connected OpenClaw discovers it automatically at the next connection. No skill file update. No learner action. The agent simply has a new capability.

**Single protocol.** Strategy 4 has two protocols: MCP/Markdown for the skill \+ REST HTTP for the premium API. Strategy 5 has one: MCP for everything. One authentication mechanism, one transport, one error handling pattern.

# **6\. The Complete Message Flow**

When a learner sends a WhatsApp message:

ONLINE (MCP server reachable):

1\. Learner sends WhatsApp message

   → OpenClaw Gateway receives it

   → Routes to TutorClaw (MCP tools available)

2\. Agent calls MCP: get\_learner\_state(learner\_id, api\_key)

   → Server returns: chapter, stage, confidence, tier,

     exchanges\_remaining, weak\_areas

3\. If exchanges\_remaining \> 0:

   a. Agent calls MCP: get\_chapter\_content(chapter, section, api\_key)

      → Server fetches from R2 Worker (gated), returns content

   b. If tier \== paid/premium:

      Agent calls MCP: get\_pedagogical\_guidance(

        message, learner\_id, chapter\_content, api\_key)

      → Server runs PRIMM-AI+ engine, returns guidance

   c. Agent assembles context and calls LLM (learner’s API key)

   d. Agent calls MCP: update\_progress(learner\_id, results, api\_key)

      → Server updates PostgreSQL

   e. Response displayed to learner via WhatsApp

4\. If exchanges\_remaining \== 0:

   Agent calls MCP: get\_upgrade\_url(api\_key, "paid")

   → Displays Stripe checkout link to learner

OFFLINE (MCP server unreachable — fallback to shim skill):

1\. Learner sends WhatsApp message

   → OpenClaw detects MCP tools unavailable

   → Falls back to shim skill Markdown instructions

2\. Agent reads PRIMM-Lite from skill file

   → Fetches chapters 1-5 from R2 (ungated, direct)

   → Uses learner’s LLM to generate response

   → No progress tracking, no premium features

# **7\. IP Protection Analysis**

| Layer | Contents | Location | Visibility | Copyable? |
| :---- | :---- | :---- | :---- | :---- |
| Shim Skill | PRIMM-Lite (3-stage), MCP config URL | Learner’s machine | Everyone | Yes (low value) |
| R2 Content (free) | Chapters 1–5 | Cloudflare R2 | Ungated | Yes (marketing material) |
| R2 Content (paid) | Chapters 6–30, exercises, rubrics | Cloudflare R2 | Key-gated via Worker | Only via valid API key |
| MCP Server | PRIMM-AI+ engine, Verification Ladder, Error Taxonomy, scoring, code sandbox | Panaversity VPS | Nobody | Impossible (server-side) |
| Learner Data | Progress, confidence, history, tier | PostgreSQL | Authenticated MCP only | No |

The MCP server is a black box to the learner. OpenClaw sees only the tool names, their typed schemas (input parameters and output format), and the returned values. It never sees the implementation: the PRIMM-AI+ decision engine, the Verification Ladder state machine, the Error Taxonomy classifier, or the confidence scoring algorithm. A competitor could observe individual outputs over many sessions, but not reverse-engineer the algorithms that produce them.

# **8\. Economics**

| Component | Service | Monthly Cost |
| :---- | :---- | :---- |
| MCP Server | VPS (Hetzner/DigitalOcean) \+ SSE persistent connections | $40–60 |
| Content storage | Cloudflare R2 (10GB free, zero egress) | $0 |
| Content access control | Cloudflare Workers (100K req/day free) | $0 |
| Learner database | Managed PostgreSQL | $10 |
| Code sandbox | Docker containers on same VPS | Included in VPS |
| Payment processing | Stripe (% per transaction) | Variable |
| LLM tokens | Learner’s own API key via OpenClaw | $0 |
| WhatsApp | OpenClaw (learner’s instance) | $0 |
| TOTAL infrastructure |  | $50–70/month |

Revenue at conservative adoption (12,000 free, 3,000 paid at PKR 500, 1,000 premium at PKR 3,000): **$15,750/month revenue on $50–70/month operating cost. Gross margin on infrastructure: 99.5%.**

|  | Arch 1 Custom Brain | Arch 2 NanoClaw | Arch 3 Hybrid | Arch 4 MCP-First |
| :---- | :---- | :---- | :---- | :---- |
| Monthly infra | $200–300 | $575–1,600 | $200→1,600 | $50–70 |
| Monthly LLM | $12,000 (you) | $12,000 (you) | $12,000 (you) | $0 (learner) |
| Total cost | \~$12,300 | \~$12,700 | \~$12,300→13,600 | \~$50–70 |
| Revenue | $15,750 | $15,750 | $15,750 | $15,750 |
| Gross margin | \~22% | \~17–19% | \~14–22% | \~99.5% |
| Code execution | No | Yes | No (Phase 1\) | Yes (MCP submit\_code) |
| Time to ship | 2–3 weeks | 2–4 months | 2–3 weeks | 2–4 weeks |

# **9\. Risks and Mitigations**

**Risk: MCP server downtime breaks all tutoring.** Mitigation: The shim skill provides offline PRIMM-Lite for free-tier users. Premium users experience degraded service (no code execution, no full PRIMM-AI+) but basic tutoring continues via the local skill. Deploy the MCP server behind Cloudflare for DDoS protection and use a process manager (systemd/pm2) with auto-restart.

**Risk: The “everyone has OpenClaw” assumption is premature.** Mitigation: Maintain Architecture 1 (Custom Brain) as the “TutorClaw Web” onramp for learners without OpenClaw. As they progress through the book and install OpenClaw, they migrate to the MCP-based TutorClaw.

**Risk: Learners use weak models that produce poor tutoring.** Mitigation: MCP tool calls are handled by the runtime, not the LLM, so tool reliability is not model-dependent. The LLM’s role is to interpret tool results and generate natural language—even weak models can do this when given structured data from MCP tools.

**Risk: SSE connection limits under load.** Mitigation: At 1,600 peak concurrent learners, the server handles 1,600 SSE connections. Each is lightweight (\~4KB memory). A $60/month VPS with 4GB RAM can handle 10,000+ concurrent SSE connections. Horizontal scaling (multiple VPS behind a load balancer) is straightforward if needed.

**Risk: Someone reverse-engineers MCP tool outputs.** Mitigation: The server returns contextual guidance (“apply Verification Ladder Step 3 for async/await weakness”), not the algorithm. Reverse-engineering requires thousands of systematic queries across all chapters, stages, and learner profiles—and yields only outputs, not logic. Rate limiting and anomaly detection on the MCP server protect against extraction attempts.

**Risk: OpenClaw MCP remote SSE transport is immature.** Mitigation: SSE is a well-established web standard. OpenClaw’s MCP implementation has been battle-tested with 3,200+ skills. If edge cases surface in reconnection or auth refresh, they affect the entire OpenClaw ecosystem and will be fixed upstream.

# **10\. Conclusion: The MCP-First Architecture**

Architecture 4 in its MCP-first form is the purest expression of the Agent Factory thesis. OpenClaw is the operating system. The TutorClaw MCP server is the intelligence. Cloudflare R2 is the content layer. The shim skill is the resilient fallback. Stripe is the wallet. The learner provides compute, messaging, and LLM. Panaversity provides pedagogy, content, and brand.

The MCP server consolidates everything that was previously spread across separate REST APIs, Markdown instructions, and prompt-engineered HTTP calls into a single, protocol-native, agent-integrated service. Code execution—the key pedagogical feature—is now possible through the submit\_code tool without containers on either side. IP protection is absolute: the PRIMM-AI+ engine, Verification Ladder, Error Taxonomy, and scoring algorithms never leave the server.

Total infrastructure cost: $50–70/month. Revenue potential: $15,750/month. Gross margin: 99.5%. Time to ship: 2–4 weeks.

The shim skill ensures the free tier never goes dark. The MCP server ensures the premium tier is worth paying for. Cloudflare R2 ensures content delivery is global, instant, and free. From one thin skill to a thousand learners to a global educational platform—on $70/month of infrastructure.

*Ship the skill. Serve the content. Protect the intelligence. Let the ecosystem do the rest.*