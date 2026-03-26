---
sidebar_position: 12
title: "Permission Modes and Security"
description: "Master the three permission modes in the Claude Agent SDK, apply least-privilege principles to HireFlow agents, and use the cwd parameter as a filesystem sandbox to restrict agent access."
chapter: 73
lesson: 12
duration_minutes: 30
keywords:
  - permission modes
  - agent security
  - least privilege
  - filesystem sandbox
  - cwd parameter
  - bypassPermissions
  - acceptEdits
  - hireflow security
  - tool restriction
skills:
  - name: "Permission Mode Selection"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can select the correct permission mode for a given agent task based on the tool set, risk profile, and operational context"
  - name: "Least Privilege Implementation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information Security"
    measurable_at_this_level: "Can configure an agent with the minimum tools and permissions required for its task, rejecting broader access even when convenient"
  - name: "Filesystem Sandboxing"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Security"
    measurable_at_this_level: "Can explain how the cwd parameter restricts an agent's filesystem scope and identify scenarios where sandboxing prevents accidental damage"
learning_objectives:
  - objective: "Describe the behavior of all three permission modes (default, acceptEdits, bypassPermissions) and their implications for agent autonomy"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Comparison table: for each permission mode, list what is auto-approved, what requires prompting, and when to use it"
  - objective: "Apply the least-privilege principle to design minimal tool and permission configurations for four HireFlow agents"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Configuration exercise: write ClaudeAgentOptions for each HireFlow agent with justification for every included tool"
  - objective: "Use the cwd parameter to sandbox an agent's filesystem access to a specific directory"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Code modification: add cwd restrictions to an existing agent configuration and verify the agent cannot access files outside the sandbox"
  - objective: "Identify security vulnerabilities in over-permissioned agent configurations"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Code review: given a permissive configuration, list three specific risks and propose mitigations"
cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: the cwd sandbox parameter and the systematic application of least privilege to agent configuration. Students already know permission_mode from Lesson 03 and tool restrictions from Lesson 05. This lesson deepens that knowledge with security reasoning and introduces cwd as a new containment mechanism."
differentiation:
  extension_for_advanced: "Design a permission escalation protocol where an agent starts in default mode and can request a temporary upgrade to acceptEdits for a specific operation, then automatically reverts. How would you implement this without giving the agent permanent elevated permissions?"
  remedial_for_struggling: "Focus on one principle: restrict tools first, then choose permission mode. If you can explain why a CV parser does not need the Write tool, you understand least privilege. Everything else follows from that reasoning."
---

# Permission Modes and Security

## James Opens Everything

James had a deadline. The HireFlow pipeline needed to process 50 candidates by Friday, and every permission prompt slowed him down. So he applied the same fix to every agent:

```python
# James's "just make it work" configuration
everything_options = ClaudeAgentOptions(
    allowed_tools=[
        "mcp__hiring__parse_cv",
        "mcp__hiring__score_candidate",
        "mcp__hiring__reject_candidate",
        "mcp__hiring__send_communication",
        "Read",
        "Write",
        "Edit",
        "Bash",
    ],
    permission_mode="bypassPermissions",
    max_turns=20,
)
```

Every agent got every tool. Every agent got unrestricted permissions. Every agent could read, write, edit, and execute bash commands without asking.

"It works," James said. "Pipeline finished in twelve minutes."

Emma looked at the configuration and said nothing for a moment. Then she opened the agent's output log and pointed to a line near the bottom.

```
[Agent] Creating summary report... writing to /hireflow/reports/candidate-summary.md
[Agent] Cleaning up temporary files... executing: rm /hireflow/data/candidates/sarah-chen-cv.pdf
```

The agent had deleted a candidate's CV while "cleaning up." It had Bash access with bypass permissions. Nothing stopped it.

James stared at the log. "That was her original file. Not a copy."

"Your agent had the permissions of a system administrator," Emma said. "It decided that cleaning up temporary files was helpful. It was not wrong about its reasoning. It was wrong about what it was allowed to do. And you gave it permission to do anything."

## The Three Permission Modes

The Claude Agent SDK provides three **permission modes** that control when the system prompts a human before executing an action:

### Mode 1: `"default"`

The most restrictive mode. The system prompts the human before:

- Any file edit or write operation
- Any bash command execution
- Any tool call that modifies state

The system does not prompt for:

- Read-only operations
- Agent reasoning (assistant messages)

**When to use**: Development, experimentation, any context where you want to see what the agent plans to do before it does it. This is the mode you should start with for every new agent.

### Mode 2: `"acceptEdits"`

A middle ground. The system auto-approves:

- File edits and writes
- Read operations

The system still prompts for:

- Bash command execution
- Operations the system classifies as potentially dangerous

**When to use**: Trusted workflows where the agent needs to create files (reports, summaries, structured output) but should not execute arbitrary commands. The report generation agent in HireFlow fits this mode.

### Mode 3: `"bypassPermissions"`

No prompts at all. Every operation proceeds automatically.

**When to use**: Automated pipelines where no human is present to respond to prompts, AND the tool set is already restricted to safe operations. The critical word is "and." Bypass permissions without tool restrictions is the configuration that deleted Sarah Chen's CV.

| Permission Mode       | File Read | File Write/Edit | Bash Commands | MCP Tools |
| :-------------------- | :-------: | :-------------: | :-----------: | :-------: |
| `"default"`           |   Auto    |     Prompt      |    Prompt     |  Prompt   |
| `"acceptEdits"`       |   Auto    |      Auto       |    Prompt     |  Varies   |
| `"bypassPermissions"` |   Auto    |      Auto       |     Auto      |   Auto    |

## The Least Privilege Principle

**Least privilege**: give each agent the minimum set of tools and permissions it needs to complete its specific task. Nothing more.

This principle has two parts:

1. **Restrict tools first.** The `allowed_tools` list is your primary security control. An agent that only has access to `parse_cv` and `Read` cannot delete files, even if `permission_mode` is `bypassPermissions`. The tool list defines capability; the permission mode defines friction.

2. **Choose permission mode second.** Once tools are restricted, the permission mode controls how much human oversight each operation gets. A restricted tool set with bypass permissions is often safer than a broad tool set with default permissions, because the human approving prompts may click "yes" without reading.

Emma drew two configurations on the whiteboard:

```
Config A: All tools + default permissions
  → Agent CAN do anything, but asks first
  → Human must read and approve every action
  → Risk: approval fatigue leads to rubber-stamping

Config B: Minimal tools + bypass permissions
  → Agent can ONLY do what its tool list allows
  → No prompts, but no dangerous capabilities
  → Risk: none, if tool list is correct
```

"Config B is almost always safer," Emma said. "The tool list is a hard boundary. Human approval is a soft boundary that degrades under time pressure."

## HireFlow Security Configurations

Here are the four HireFlow agents with their least-privilege configurations:

### CV Parsing Agent

This agent reads CV files and extracts structured data. It does not make decisions, score candidates, or write files.

```python
from claude_agent_sdk import ClaudeAgentOptions


cv_parser_options = ClaudeAgentOptions(
    allowed_tools=["mcp__hiring__parse_cv", "Read"],
    permission_mode="bypassPermissions",
    max_turns=3,
    cwd="/path/to/hireflow/data/candidates",
)
```

Why `bypassPermissions` is safe here: the only tools available are `parse_cv` (which extracts data) and `Read` (which reads files). Neither tool can modify or delete anything. The `cwd` parameter (explained below) restricts even the Read tool to the candidates directory.

### Scoring Agent

This agent reads parsed candidate data and scores them against a job specification. Scoring involves judgment; the results affect downstream decisions.

```python
scoring_options = ClaudeAgentOptions(
    allowed_tools=["mcp__hiring__score_candidate", "Read"],
    permission_mode="default",
    max_turns=5,
    cwd="/path/to/hireflow/data",
)
```

Why `default` here: scoring produces a number that determines whether a candidate advances. A wrong score has real consequences. The human should see the scoring rationale before it executes. The tools are still restricted (no Write, no Bash), but the permission mode adds a verification step.

### Report Generation Agent

This agent reads scores and candidate data, then writes a summary report. It needs Write access to create the report file.

```python
report_options = ClaudeAgentOptions(
    allowed_tools=["Read", "Write"],
    permission_mode="acceptEdits",
    max_turns=5,
    cwd="/path/to/hireflow/reports",
)
```

Why `acceptEdits` here: the agent needs to create files, and prompting for every write would be impractical when generating a multi-section report. But it should not have Bash access (no executing commands) or access to MCP tools that modify candidate data. The `cwd` sandbox restricts writes to the reports directory only.

### Pipeline Orchestrator

This agent coordinates the other agents using the Task tool. It reads data, delegates work, and monitors results. During development, you want full visibility into its decisions.

```python
orchestrator_options = ClaudeAgentOptions(
    allowed_tools=["Read", "Task"],
    permission_mode="default",
    max_turns=15,
    cwd="/path/to/hireflow",
)
```

Why `default` here: the orchestrator makes coordination decisions that affect the entire pipeline. During development, seeing each delegation before it happens catches logic errors early. Notice that it does not have direct access to any MCP tools; it delegates to sub-agents that have their own restricted configurations.

## The cwd Sandbox

The **`cwd` parameter** sets the agent's working directory, which restricts its filesystem scope. An agent with `cwd="/path/to/hireflow/reports"` can only read and write files within that directory and its subdirectories.

This is a containment boundary. Even if an agent has Write access, it cannot write outside its sandbox. Even if it has Read access, it cannot read sensitive files in other directories.

```python
# This agent can only see the reports directory
sandboxed_options = ClaudeAgentOptions(
    allowed_tools=["Read", "Write"],
    permission_mode="acceptEdits",
    max_turns=5,
    cwd="/path/to/hireflow/reports",
)

# This agent can see all HireFlow data (broader scope)
broader_options = ClaudeAgentOptions(
    allowed_tools=["Read"],
    permission_mode="bypassPermissions",
    max_turns=3,
    cwd="/path/to/hireflow",
)
```

The sandbox works with the tool list:

| Tool  | Without cwd                      | With cwd="/hireflow/reports"               |
| :---- | :------------------------------- | :----------------------------------------- |
| Read  | Can read any accessible file     | Can only read files in /hireflow/reports/  |
| Write | Can write to any accessible path | Can only write to /hireflow/reports/       |
| Bash  | Can execute any command anywhere | Commands run in /hireflow/reports/ context |

"Wait, so basically the cwd is like giving someone an office instead of keys to the building?" James said.

"The office has walls," Emma confirmed. "Even if the person inside has a phone and a keyboard, they can only reach what is in their room."

## The Security Configuration Process

When adding a new agent to your system, follow these four steps in order:

### Step 1: List Required Operations

Write down every operation the agent must perform. Be specific. "Access data" is too vague. "Read parsed candidate JSON from /data/parsed/" is precise.

### Step 2: Map Operations to Minimum Tools

For each operation, identify the minimum tool. If the agent only reads files, it only needs `Read`. If it calls a specific MCP tool, it needs only that tool. Do not add "convenience" tools.

### Step 3: Choose the Narrowest Permission Mode

Start with `"default"`. If prompting creates unacceptable friction (batch processing, automated pipelines), move to `"acceptEdits"`. Only use `"bypassPermissions"` when the tool list is already restricted to safe operations.

### Step 4: Set the cwd Sandbox

Restrict the agent's filesystem scope to the narrowest directory that contains everything it needs. A report writer needs `/reports`. A CV parser needs `/data/candidates`. Do not default to the project root.

:::info Recall: Chapter 72
The principle from Chapter 72 applies here: start deny-all, then allowlist. In concrete terms: begin with zero tools and `"default"` mode, then add exactly what the agent needs. Never start with everything and try to remove what is dangerous. You will miss something.
:::

## Emma's Admission

James had reconfigured all four agents with least-privilege settings. He looked satisfied, then turned to Emma. "So where exactly is the line between `acceptEdits` and `bypassPermissions` in production? The scoring agent uses `default` during development, but what about the nightly batch run?"

Emma paused. "I do not have a clean answer for that one. It depends on your monitoring setup, your error recovery process, and your risk tolerance. A system with excellent logging and automatic rollback can safely use `acceptEdits` or even `bypassPermissions` for more operations. A system without those safeguards needs tighter control."

She added: "The honest answer is that every production deployment I have seen draws that line differently. The principle is stable: minimize capability, minimize permission, sandbox the filesystem. Where exactly the dials land is an engineering judgment, not a formula."

James appreciated the honesty. A framework for thinking was more useful than a prescription that would break in the next deployment context.

## The Danger of Approval Fatigue

One final point. Emma had mentioned it earlier, but it deserves emphasis.

**Approval fatigue** is what happens when an agent in `"default"` mode prompts the human 40 times during a pipeline run. By prompt number 15, the human stops reading and clicks "approve" automatically. At that point, `"default"` mode provides the illusion of oversight without the reality.

This is why tool restriction matters more than permission mode. A restricted tool set protects against mistakes even when the human is not paying attention. The permission mode is a second layer of defense, not the primary one.

| Defense Layer    | Mechanism                                                      |                Resilience to Fatigue                |
| :--------------- | :------------------------------------------------------------- | :-------------------------------------------------: |
| Tool restriction | Hard boundary: agent cannot call tools not in its list         | Complete: cannot be bypassed by clicking "approve"  |
| Permission mode  | Soft boundary: human can approve or deny                       | Degrades: approval fatigue leads to rubber-stamping |
| cwd sandbox      | Hard boundary: agent cannot access files outside its directory | Complete: cannot be bypassed by clicking "approve"  |

Two out of three defenses are hard boundaries. Design your security around them.

## Exercises

### Exercise 1: Security Audit

Review James's original "everything" configuration from the opening of this lesson. List every specific risk it creates. For each risk, propose the minimal change that eliminates it. Your answer should include at least five distinct risks.

### Exercise 2: Configure a New Agent

A new HireFlow feature requires an **Interview Scheduler Agent** that:

- Reads candidate availability from a JSON file
- Reads interviewer calendars from an MCP tool (`mcp__hiring__get_calendars`)
- Writes a proposed schedule to `/hireflow/schedules/`
- Does not send any communications directly

Write the `ClaudeAgentOptions` configuration. Justify every tool in the list, the permission mode, and the cwd setting.

### Exercise 3: Spot the Vulnerability

Examine this configuration:

```python
vulnerable_options = ClaudeAgentOptions(
    allowed_tools=["Read", "Write", "Bash", "mcp__hiring__parse_cv"],
    permission_mode="acceptEdits",
    max_turns=10,
    cwd="/path/to/hireflow",
)
```

Identify at least three security issues. For each, explain the specific attack or accident it enables and propose a fix.

### Exercise 4: Permission Mode Migration

The HireFlow team is moving from development to production. Create a table showing how each agent's permission mode should change:

| Agent         | Development Mode | Production Mode | Justification |
| :------------ | :--------------: | :-------------: | :------------ |
| CV Parser     |        ?         |        ?        |               |
| Scorer        |        ?         |        ?        |               |
| Report Writer |        ?         |        ?        |               |
| Orchestrator  |        ?         |        ?        |               |

For each agent, the production mode should be the least permissive setting that still allows the agent to function in an automated pipeline.

:::tip Verification
After completing Exercise 2, verify your configuration against the four-step security process. Can you answer yes to all of these?

- Does the tool list include only what the agent needs? (Step 2)
- Is the permission mode the narrowest workable option? (Step 3)
- Is cwd set to the narrowest useful directory? (Step 4)
- Would this agent be safe to run at 2 AM with no human watching?
  :::
