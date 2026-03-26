# Part 8: AI Agent Security — Draft Spec

## Overview

This part teaches developers how to build secure AI agent systems. The reader
has built agents in Parts 5-7 but has NOT thought deeply about adversarial
inputs, data exfiltration, privilege escalation, or compliance requirements.

The transformation: from "my agent works" to "my agent works AND I can
explain to a security team why it's safe to deploy."

## Why This Content Is Hard to Write Well

Agent security is a fast-moving field where the threat model changes quarterly.
The biggest risk is content that:
- Teaches security theater (checkbox compliance without real protection)
- Focuses on threats that don't apply to agents (classic web security ≠ agent security)
- Gives false confidence ("do these 5 things and you're secure")
- Ignores the economic reality (security vs shipping speed tradeoff)

Good content here makes the reader APPROPRIATELY paranoid. Not fearful, but
thoughtful about attack surfaces they didn't know existed.

## Target Audience

Developers who have built working agents but would fail a security review.
They know Python/TypeScript, understand APIs, and have deployed to cloud.
They do NOT know threat modeling, formal verification, or compliance frameworks.

## Chapters

### Chapter 61: Agent Threat Landscape (3 lessons)
- L01: Why agents are different from APIs (autonomous action, tool access, memory)
- L02: The agent attack surface (prompt injection, tool abuse, data leakage,
  identity confusion, memory poisoning)
- L03: Threat modeling for agents (STRIDE adapted for agent architectures)

### Chapter 62: Prompt Injection Defense (4 lessons)
- L01: Direct vs indirect injection (with real examples from production incidents)
- L02: Input sanitization and boundary markers
- L03: Output validation and action gating
- L04: Exercise: Red-team your own agent (attack + defend cycle)

### Chapter 63: Tool Security (4 lessons)
- L01: Principle of least privilege for tool access
- L02: Sandboxing and execution boundaries
- L03: Rate limiting and resource quotas
- L04: Audit logging and anomaly detection

### Chapter 64: Data Protection (3 lessons)
- L01: What agents remember and who can access it
- L02: PII handling and compliance basics (GDPR, CCPA, HIPAA overview)
- L03: Data flow mapping for agent systems

### Chapter 65: Identity and Authorization (3 lessons)
- L01: Who is the agent acting as? (user delegation vs service identity)
- L02: Scope management and consent flows
- L03: Multi-agent trust boundaries

### Chapter 66: Deployment Security (3 lessons)
- L01: Container hardening for agent runtimes
- L02: Secrets management and rotation
- L03: Incident response for agent failures

### Chapter 67: Security Testing (3 lessons)
- L01: Automated security testing for agents
- L02: Red teaming methodology
- L03: Continuous monitoring and alerting

### Chapter 68: Capstone (2 lessons)
- L01: Security review checklist (the deliverable they can use at work)
- L02: Present a security assessment to a simulated CISO

## Cross-References
- Ch 61 builds on Part 5 agent architecture
- Ch 62 references Part 1 prompt engineering (now viewed adversarially)
- Ch 63 references Part 5 tool design
- Ch 66 references Part 6 deployment
- Ch 68 capstone references Part 0 communication skills

## Quality Bar
Every security concept should be taught through a real or realistic incident.
"Here's what happened, here's why, here's how to prevent it." No abstract
threat models without concrete examples. The reader should be able to explain
each threat to their manager in plain language.

## Output Directory
apps/learn-app/docs/08-AI-Agent-Security/

## Special Constraints
- All code examples in Python (primary) and TypeScript (secondary)
- No classified or actual vulnerability details (use synthetic examples)
- Exercises must work offline (no dependency on external vulnerable services)
- Em-dash limit: 0-1 per file
