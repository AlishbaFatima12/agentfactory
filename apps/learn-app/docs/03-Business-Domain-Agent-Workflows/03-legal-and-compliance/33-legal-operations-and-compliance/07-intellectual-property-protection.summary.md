# Intellectual Property Protection — Summary

## Core Concept

IP protection transforms from a reactive, specialist billable-hour function into a continuous, proactive capability using `/brief` for patent landscape research, trademark monitoring, and freedom-to-operate preliminary analysis. The lesson establishes the critical governance boundary: agent-produced IP research is scaffolding for the attorney, never a legal opinion -- FTO preliminary research reduces attorney work from 40+ hours to 10-15 hours but cannot replace the attorney's privileged opinion.

## Key Mental Models

- **FTO preliminary research vs. privileged FTO opinion**: Agent output is research scaffolding (no privilege, no reliance for business decisions); a qualified IP attorney's FTO opinion is a privileged legal document that boards can rely upon
- **Prior art**: Any evidence an invention was already known before a patent filing date -- published patents, academic papers, product manuals, conference presentations, even YouTube videos
- **Nice Classification**: WIPO's 45-class system (34 goods, 11 services) for trademark registration -- Class 9 (software), Class 42 (SaaS), Class 36 (financial services)
- **Patent landscape analysis outputs**: Landscape summary (key filers, trends, white spaces), FTO flags (patents needing attorney review), prior art candidates, competitor monitoring
- **Trademark monitoring dimensions**: Phonetic similarity, visual similarity, conceptual similarity -- each catches different types of potential infringement
- **Open-source licence risk hierarchy**: Low (MIT, BSD, Apache-2.0 -- attribution only), Medium (LGPL, MPL -- modifications shared), High (GPL -- combined work under GPL), Critical (AGPL -- network use triggers distribution obligation)

## Critical Patterns

- Patent landscape research uses `/brief` with parameters: topic, subject, scope (date range), jurisdiction, key competitors
- FTO flags always include the specific patent claims to review and a recommendation for which claims the IP attorney should focus on
- White spaces in the patent landscape represent filing opportunities -- technology areas with no existing patent coverage
- IP configuration persists across Cowork sessions as a skill (`ip-protection-config`) covering registered marks, pending applications, monitoring parameters, and patent portfolio
- GPL/AGPL components in proprietary or SaaS products require immediate escalation to IP counsel -- licence interpretation depends on linking method, distribution model, and jurisdiction

## Common Mistakes

- Treating agent patent landscape analysis as an FTO opinion -- it is research scaffolding, not a privileged legal document
- Registering trademarks in the wrong Nice classes (e.g., Class 9 but not Class 42) -- leaves gaps in protection
- Relying on agent assessment of GPL/AGPL copyleft obligations -- licence interpretation is attorney work
- Skipping the cover memo that scopes agent research for attorney review -- without it, the attorney cannot efficiently determine what requires analysis vs. what is informational
- Launching a product based solely on agent FTO research without attorney review -- no privilege protection if an infringement claim arises

## Connections

- Builds on the `/brief` command introduced in **L01** and applies it to IP-specific use cases
- The governance boundary (research vs. opinion) established here is the same pattern as **L03** (review output requires attorney approval) and **L08** (litigation strategy is exclusively attorney work)
- Patent landscape white spaces identified here inform product strategy and filing decisions -- connecting legal ops to business development
- Open-source licence compliance connects to software development practices in the broader Agent Factory curriculum
- The Cowork skill configuration pattern (Skills > + > Write skill instructions) mirrors the approach used in **L10** and **L11** for Legal Ops Agents
