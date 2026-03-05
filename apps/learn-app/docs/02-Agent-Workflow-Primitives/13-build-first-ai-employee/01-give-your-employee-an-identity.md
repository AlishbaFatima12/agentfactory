---
sidebar_position: 1
title: "Give Your Employee an Identity"
description: "Configure your AI employee's profession-specific identity, behavioral rules, domain vocabulary, and boundary conditions using NanoClaw's CLAUDE.md system"
keywords: ["NanoClaw", "CLAUDE.md", "agent identity", "behavioral rules", "domain configuration", "AI employee"]
chapter: 13
lesson: 1
duration_minutes: 30

skills:
  - name: "Agent Identity Configuration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can author a complete CLAUDE.md identity file with profession-specific persona, behavioral rules, domain vocabulary, and boundary conditions that produce domain-appropriate responses"

  - name: "Domain Knowledge Encoding"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can translate implicit professional knowledge into explicit written rules that an AI agent follows consistently across conversations"

learning_objectives:
  - objective: "Configure a profession-specific agent identity using NanoClaw's CLAUDE.md file"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student's groups/main/CLAUDE.md contains identity, rules, vocabulary, and boundaries sections that produce domain-appropriate responses when tested"

  - objective: "Define behavioral boundaries that prevent out-of-scope responses"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student sends a deliberately out-of-scope message and the employee refuses or flags it appropriately"

  - objective: "Test identity configuration with real domain queries via WhatsApp"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student documents at least 3 test messages and responses demonstrating domain-appropriate behavior"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (identity sections, behavioral rules, domain vocabulary, boundary conditions, testing protocol) within B1 range of 7-10"

differentiation:
  extension_for_advanced: "Configure groups/global/CLAUDE.md with shared rules that apply across all groups, then test that main-specific rules override global defaults where intended"
  remedial_for_struggling: "Start with just the Identity section, test it, then add Rules, then Vocabulary, then Boundaries one at a time rather than writing all four at once"
---

# Give Your Employee an Identity

In the previous lesson, you chose your tier and set up your project repository. Your NanoClaw instance is running from Chapter 7, and your Layer 3 design identifies the domain expertise your employee needs. There is one problem: right now your employee has no idea who it is.

Send it a message and you get a generic AI response. Ask it about your profession and it gives textbook answers. It does not know your field's terminology, your industry's rules, or the boundaries of what it should and should not do. It is a blank slate with a PhD -- knowledgeable but directionless.

This lesson's challenge: give your employee a professional identity so specific that someone in your field would recognize it as a colleague, not a chatbot.

## The Challenge

Configure your AI employee's identity so it responds like a domain expert in your profession. Your employee should introduce itself appropriately, use your field's terminology naturally, follow your profession's rules and ethics, and refuse or flag requests that fall outside its scope.

## Acceptance Criteria

1. `groups/main/CLAUDE.md` contains a profession-specific identity with four sections: Identity, Rules, Vocabulary, and Boundaries
2. Your employee responds to a test message with domain-appropriate behavior (correct terminology, appropriate tone, relevant follow-up questions)
3. Your employee refuses or flags at least one request that is outside its defined scope

## Use Case Gallery

Here is what a well-configured identity looks like for four different professions. Notice how each one defines not just what the employee IS, but what it DOES and DOES NOT do.

**Accountant**

> I am a financial operations assistant specializing in accounts payable and receivable workflows. I follow GAAP principles in all recommendations. I use accrual-basis accounting unless explicitly told otherwise. I flag any tax advice as requiring CPA review before acting on it. I never file documents with tax authorities. I never provide audit opinions.

**Teacher**

> I am a curriculum planning assistant for elementary education. I align all activity suggestions to state learning standards. I suggest differentiated activities for three proficiency levels by default. I never generate or modify student grades directly. I never contact parents or guardians. I flag any request involving student personal information.

**Real Estate Agent**

> I am a property research assistant focused on residential real estate. I follow fair housing guidelines in all communications. I present market data as historical facts, never as predictions. I never make promises about property values or investment returns. I never draft legally binding documents. I flag any request that could violate fair housing regulations.

**Freelance Designer**

> I am a creative project manager for a freelance design practice. I track briefs, deadlines, revision rounds, and client communications. I categorize incoming requests by urgency and project phase. I never commit to delivery timelines without checking current workload. I never share one client's work or feedback with another client. I flag scope creep when a request falls outside the original brief.

## Hints

<details>
<summary>Level 1: Where to Look</summary>

Check how NanoClaw's default `CLAUDE.md` is structured in the `groups/main/` directory. What sections does it have? How does it define the agent's behavior? Your job is to replace the defaults with profession-specific content.

Also look at `groups/global/CLAUDE.md` -- this is where rules shared across ALL groups go. Think about what belongs in global versus what belongs in main.

</details>

<details>
<summary>Level 2: What to Ask Your AI</summary>

Use this prompt with Claude Code (not your NanoClaw employee):

```
Help me write a CLAUDE.md for a [profession] assistant that includes:
1. Identity: who am I, what is my specialty, what tone do I use
2. Rules: what I always do, what I never do, what I flag for human review
3. Vocabulary: domain terms I understand and use naturally
4. Boundaries: what is outside my scope entirely

My profession's specific constraints are: [list 3-5 things unique to your field]
```

Review what it generates critically. You know your profession better than any AI does. Add rules it missed. Remove rules that do not apply to your specific practice.

</details>

<details>
<summary>Level 3: Structure Guide</summary>

Your `groups/main/CLAUDE.md` needs four sections:

**Identity** -- Who am I? State the profession, specialty area, and communication style. Include how to introduce yourself when someone first messages.

**Rules** -- What do I always and never do? Use "ALWAYS" and "NEVER" lists. Include at least 3 of each. Think about your profession's ethical obligations, common mistakes, and regulatory requirements.

**Vocabulary** -- What terms do I know? List 10-20 domain-specific terms with brief definitions. This helps the agent use terminology correctly rather than defaulting to generic language.

**Boundaries** -- What is outside my scope? List specific request types you refuse or escalate. For each boundary, state what you do instead (refuse, flag, redirect to human, provide disclaimer).

Test by sending three messages: one routine domain question, one that uses specialized vocabulary, and one that deliberately crosses a boundary.

</details>


