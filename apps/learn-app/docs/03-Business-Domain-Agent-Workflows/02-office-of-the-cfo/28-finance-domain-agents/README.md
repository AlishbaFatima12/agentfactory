---
slug: /Business-Domain-Agent-Workflows/finance-domain-agents
sidebar_position: 17
title: "Chapter 17: Finance Domain Agents"
description: "Learn to deploy Claude as a financial analysis assistant inside Excel, orchestrate multi-application finance workflows through Cowork plugins, and build enterprise extensions that encode your organisation's specific financial expertise into production-ready SKILL.md files"
chapter_number: 17
part_number: 3
version: 1.0
status: draft
slides:
  source: "https://pub-80f166e40b854371ac7b05053b435162.r2.dev/books/ai-native-dev/static/slides/part-3/chapter-17/finance-agent-architecture.pdf"
  title: "Finance Agent Architecture"
  height: 700
---

# Chapter 17: Finance Domain Agents

> _"Excel is not a spreadsheet application. It is the operating system of the financial profession. Everything else — the presentations, the memos, the reports — is built from what lives in a spreadsheet first."_

Chapter 16 gave you the Knowledge Extraction Method — the structured process for surfacing tacit professional knowledge and translating it into SKILL.md files that produce agents genuinely useful in production contexts. This chapter applies that methodology to the first domain: finance.

Finance is distinctive because a single application — Excel — sits at the centre of almost everything professionals do. This creates a natural two-layer teaching structure. First, you learn what Claude can do inside the workbook: understanding inherited models, testing scenarios, debugging formula errors, and building model structures from plain-language descriptions. Second, you learn what Claude can do across applications: the Cowork finance plugins that orchestrate multi-step workflows spanning Excel, PowerPoint, and connected enterprise systems — from the corporate finance plugin through the investment professional suite with its 39 commands, 42 skills, and 11 data integrations. Third, you apply the Knowledge Extraction Method to encode your own financial expertise into enterprise extensions that make the generic plugins yours.

## 📚 Teaching Aid

## What You'll Learn

By the end of this chapter, you will be able to:

- Use Claude in Excel to comprehend inherited financial models, test scenarios, debug formula errors, and build new model structures from plain-language descriptions
- Install and operate the Cowork finance plugins — both the corporate finance plugin (`knowledge-work-plugins/finance`) for month-end close and accounting workflows, and the investment professional suite (`financial-services-plugins`) with its core plugin and four domain add-ons
- Use plugin commands (`/comps`, `/dcf`, `/lbo`, `/earnings`, `/cim`, `/source`, and more) to produce professional financial deliverables with live market data from 11 data providers
- Understand why the same data connectors serve both Claude in Excel and Cowork, with the difference being scope (single-workbook assistant vs multi-app agent orchestration)
- Execute cross-application workflows that carry analysis context from Excel to PowerPoint without manual copy-paste
- Apply the Knowledge Extraction Method (Chapter 16) to a finance domain expert, producing a SKILL.md that encodes firm-specific financial judgment
- Design and prioritise enterprise extensions across eleven extension areas covering credit risk, regulatory reporting, treasury, FP&A, and portfolio management

## Lesson Flow

| Lesson                                                       | Title                                           | Duration | What You'll Walk Away With                                                                                                                                              |
| ------------------------------------------------------------ | ----------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [L01](./01-the-assistant-and-the-agent.md)                   | The Assistant and the Agent                     | 20 min   | The core distinction between Claude in Excel (embedded assistant) and Cowork (orchestrating agent), and why it matters for your workflow                                |
| [L02](./02-understanding-workbooks-you-didnt-build.md)       | Understanding Workbooks You Didn't Build        | 25 min   | The ability to use Claude to trace formula dependencies, map model logic, and comprehend inherited workbooks in minutes rather than hours                               |
| [L03](./03-scenarios-errors-and-model-building.md)           | Scenarios, Errors, and Model Building           | 35 min   | Scenario testing without breaking formulas, formula error diagnosis from symptom to source, and building model structures from description                              |
| [L04](./04-from-assistant-to-agent.md)                       | From Assistant to Agent: Cowork Finance Plugins | 45 min   | Install the corporate finance plugin hands-on and run all five commands: `/reconciliation`, `/journal-entry`, `/variance-analysis`, `/income-statement`, `/sox-testing` |
| [L05](./05-financial-analysis-the-core-plugin.md)            | Financial Analysis: The Core Plugin             | 35 min   | Install the core plugin and run `/comps` and `/dcf` hands-on, interpret valuation output, debug models with `/debug-model` and `/check-deck`                            |
| [L06](./06-domain-plugins-from-deals-to-portfolios.md)       | Domain Plugins: From Deals to Portfolios        | 45 min   | Install and exercise four domain add-ons (IB, ER, PE, WM), two partner plugins, and non-negotiable boundaries                                                           |
| [L07](./07-cross-app-orchestration.md)                       | Cross-App Orchestration                         | 25 min   | Excel-to-PowerPoint workflow orchestration and why structural consistency matters more than time savings                                                                |
| [L08](./08-extracting-finance-domain-knowledge.md)           | Extracting Finance Domain Knowledge             | 30 min   | The Knowledge Extraction Method applied to a CFO interview, producing a SKILL.md for a firm-specific finance workflow                                                   |
| [L09](./09-enterprise-extensions-risk-and-compliance.md)     | Enterprise Extensions: Risk and Compliance      | 35 min   | Credit risk, regulatory reporting, IPS compliance, and portfolio attribution extensions with SKILL.md writing guidance                                                  |
| [L10](./10-enterprise-extensions-operations-and-strategy.md) | Enterprise Extensions: Operations and Strategy  | 35 min   | Treasury, FP&A, M&A integration, ESG, fund administration, real estate, and insurance extensions                                                                        |
| [L11](./11-your-extension-roadmap.md)                        | Your Extension Roadmap and Chapter Summary      | 25 min   | A prioritisation framework for choosing which extensions to build first, and a synthesis of the full chapter                                                            |
| [Quiz](./12-chapter-quiz.md)                                 | Chapter Quiz                                    | 50 min   | 50 questions covering all eleven lessons                                                                                                                                |

## Chapter Contract

By the end of this chapter, you should be able to answer these five questions:

1. What is the difference between Claude in Excel (the embedded assistant) and Cowork with Excel (the orchestrating agent), and why does it matter that they share the same data connectors?
2. What are the key plugin commands in the `financial-services-plugins` core plugin, and for each one, what professional deliverable does it produce?
3. How do the two finance plugin repositories — `knowledge-work-plugins/finance` and `financial-services-plugins` — differ in their audience, scope, and the kind of financial workflows they support?
4. How would you apply the Knowledge Extraction Method (Method A) to extract a CFO's tacit knowledge about monthly close judgment, and what would the resulting SKILL.md look like?
5. Given the eleven enterprise extension areas, how do you prioritise which one to build first for your organisation?

## After Chapter 17

When you finish this chapter, your perspective shifts:

1. **You see Excel differently.** It is no longer just a calculation tool — it is the surface through which Claude reads, reasons about, and builds financial models with cell-level transparency.
2. **You understand the assistant-to-agent progression.** Claude in Excel is where you do deep financial work. Cowork is where you orchestrate that work across applications and enterprise systems.
3. **You can extract finance domain knowledge.** The Knowledge Extraction Method applied to your domain produces SKILL.md files that encode judgment no generic plugin can replicate.
4. **You have a roadmap.** The eleven extension areas give you a clear path from generic plugins to enterprise-grade financial agents tuned to your organisation's specific methodologies.

Start with [Lesson 1: The Assistant and the Agent](./01-the-assistant-and-the-agent.md).
