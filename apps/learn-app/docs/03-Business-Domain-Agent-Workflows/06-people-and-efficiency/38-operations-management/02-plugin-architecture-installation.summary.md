# Summary: Plugin Architecture and Installation

**Lesson 2 of Chapter 38, Operations Management**

## Core Purpose

This lesson establishes the operational foundation for the entire chapter. It installs two plugins, explains the architecture design decision, and creates the configuration file that calibrates all subsequent plugin output. Without completing this lesson, no subsequent exercise works correctly.

## The Two-Plugin Architecture

Chapter 38 uses two plugins with zero capability overlap:

**Official Operations plugin** (Anthropic, `knowledge-work-plugins/operations`) covers the standard operational workflows: `/vendor-review` for vendor portfolio audits and SLA scorecards; `/process-doc` and `/runbook` for process documentation and SOPs; `/change-request` for change impact assessment and rollback planning; `/status-report` for leadership reporting. Three auto-skills (`compliance-tracking`, `risk-assessment`, `process-optimization`) activate from keyword patterns in natural prompts; they are never invoked as slash commands.

**Custom Operations Intelligence plugin** (Panaversity, `agentfactory-business-plugins/operations-intelligence`) covers the gaps: `/audit` for audit preparation and evidence packaging; `/contract` for obligation extraction and risk flagging; `/incident` for post-mortems and Five Whys analysis; `/metrics` for metrics framework design. Four persistent agents (vendor-watchdog, process-health, compliance-monitor, change-tracker) monitor the operations portfolio continuously between manual exercises.

## ops.local.md

The configuration file that transforms generic plugin output into organisation-specific operations intelligence. It has seven sections built progressively across the chapter: Organisation Context (Lesson 2), Vendor Portfolio (Lesson 3), Process Library (Lesson 5), Change Management (Lesson 6), Regulatory Frameworks (Lesson 7), Risk Configuration (Lesson 9), Operational Metrics (Lesson 11). Completing only Organisation Context is sufficient to begin Lesson 3.

## Installation Sequence

1. Install the official Operations plugin via Cowork sidebar → Customize → Browse plugins → Operations → Install.
2. Install the custom plugin via Cowork sidebar → Customize → Browse plugins → Personal → + → Add marketplace from GitHub → `https://github.com/panaversity/agentfactory-business-plugins` → Operations Intelligence → Install.
3. Verify both plugins with test commands before proceeding.
4. Create `ops.local.md` and populate Organisation Context.

## Critical Rule

Never type `/compliance-tracking`, `/risk-assessment`, or `/process-optimization` as slash commands. These are auto-skills that activate from natural language keywords in your prompts. Subsequent lessons (7, 9, 5) explain how to craft prompts that trigger each reliably.
