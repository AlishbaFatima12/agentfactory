# NotebookLM Prompt — Chapter 37: People & HR

## Instructions

1. Go to notebooklm.google.com
2. Create a new notebook: "Chapter 37: People & HR"
3. Upload ALL 15 lesson `.md` files + `README.md` from `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/`
4. Click "Slide Deck" in the Studio panel
5. Select "Presenter Slides" format
6. Paste the prompt below
7. Click "Generate" (wait 5-30 min)
8. Download PDF
9. Run: `/upload-chapter-slides /path/to/downloaded.pdf 37 --title "AI-Native People Operations" --name ai-native-people-operations`

## Prompt to Paste

```
Create a comprehensive slide deck for intermediate HR practitioners (B1/B2 proficiency).

AUDIENCE: HR professionals and business domain experts who understand HR operations but are new to deploying AI agents for people management. They have completed earlier chapters on AI agent fundamentals and Cowork plugin usage.

FRAMEWORK TO EMPHASIZE:
• The Institutional Memory Problem: Organisations accumulate knowledge in two forms — explicit (written, findable) and tacit (in people's heads, invisible until lost). HR operations fail because explicit knowledge is inaccessible and tacit knowledge evaporates when people leave.
• The 60/40 Split: 60% of HR time is spent on information routing and repetitive process execution (AI handles this). 40% is high-judgment work — difficult conversations, sensitive investigations, ethical decisions (humans must handle this). AI eliminates the 60% so HR can do the 40% better.
• Two-Plugin Architecture: Official human-resources plugin (9 skills from Anthropic) + custom hr-operations plugin (5 skills + 4 persistent agents from Panaversity) = 14 distinct commands with zero naming collisions.
• Three HR Functions AI Transforms: Information routing (answering questions with written answers), Process execution (generating documents that follow standard structures), and Knowledge capture (turning tacit knowledge into explicit, searchable documentation).
• Sensitivity Labels: Every AI output carries ROUTINE, CONFIDENTIAL, or SENSITIVE PERSONAL DATA classification — the boundary between what AI handles and what must always go to a human.

THEMES (with specific frameworks and data from the chapter):
1. THE INSTITUTIONAL MEMORY PROBLEM: Explicit vs tacit knowledge. The "60/40 tragedy" — HR teams are simultaneously under-resourced and drowning in repetitive work. Three structural failures: information routing burden, process repetition, knowledge evaporation. The knowledge risk classification (5-factor scoring model: tenure, role criticality, documentation level, successor readiness, client/revenue impact).

2. TWO-PLUGIN ARCHITECTURE: 9 official skills (/policy-lookup, /onboarding, /draft-offer, /interview-prep, /performance-review, /comp-analysis, /org-planning, /people-report, /recruiting-pipeline) + 5 custom skills (/jd, /match, /knowledge, /reference, /offboard) + 4 persistent agents (knowledge-base-agent, onboarding-orchestrator, policy-maintenance-agent, offboarding-knowledge-agent). Configured via hr.local.md (8 sections making every output organisation-specific).

3. KEY FRAMEWORKS:
   - 30-60-90 Onboarding with three failure modes (Information Dump, Administrative Bottleneck, Invisible Ramp) and strong vs weak success criteria
   - Warm Handoff Protocol: Type 1 queries (policy — answer directly with citation) vs Type 2 queries (individual situation — warm handoff to named HR contact, every time, without exception)
   - Knowledge Risk Classification: HIGH (11-15) = full capture programme, MEDIUM (8-10) = 2 sessions, LOW (5-7) = standard handover. Five-factor scoring.
   - Sensitivity Labels: ROUTINE (policy summaries, JDs), CONFIDENTIAL (offer letters, reviews, assessments), SENSITIVE PERSONAL DATA (medical, disciplinary, grievance — NEVER auto-generated)
   - Four JD Principles: candidate perspective first, lead with work, calibrate requirements (max 5 essential), inclusive language by default
   - Six-Dimension Talent Assessment: critical skills, experience, performance trajectory, readiness indicators, development areas (experience/skill/mindset gap types), motivation and career intent
   - Four Offboarding Principles: protect the organisation, preserve knowledge, positive experience, support the team

4. THE FULL EMPLOYEE LIFECYCLE: Six stages — HIRE (JD + interview + comp + offer) → ONBOARD (30-60-90 plan + orchestrator) → DEVELOP (performance review + comp analysis) → RETAIN/PROMOTE (talent match + succession conversation + org planning) → OFFBOARD (knowledge capture + offboarding plan) → CONTINUOUS (people analytics + agent operations). All 14 skills and 4 agents mapped to specific lifecycle stages.

5. PERSISTENT AGENTS AS SENSORS: The four agents are not just automation — they are operational intelligence sensors. The knowledge-base-agent's weekly report reveals where HR knowledge infrastructure is failing. The onboarding orchestrator catches what humans miss (T-3 laptop alert). The policy maintenance agent detects statutory rate changes and policy inconsistencies. The offboarding-knowledge-agent ensures knowledge capture actually happens. Together they form an HR intelligence dashboard.

TONE:
• Professional and practitioner-oriented — written for HR professionals, not technologists
• Balance between operational detail and strategic insight
• Practical — every concept connects to a specific skill or agent they will deploy
• Honest about AI boundaries — explicit about what AI cannot do (the 40%)
• Empathetic — HR deals with people's careers, compensation, and dignity

<slide_format_requirements>
Generate 18-22 slides. Each slide: 4-6 bullet points as sentences, NOT paragraphs. Clear headings. Cover all 5 themes. Include specific numbers, frameworks, and command names where relevant.
</slide_format_requirements>

NARRATIVE ARC:
1. The Problem: HR teams drowning in repetitive work; knowledge walking out the door
2. The Architecture: Two plugins, 14 skills, 4 agents, hr.local.md configuration
3. The Lifecycle: How the tools work together across the full employee journey
4. The Intelligence Layer: Agents as sensors, not just automation
5. The Boundary: What stays with humans — the 40% that requires judgment, empathy, and presence

END WITH: Three concrete next steps for deploying AI-native HR operations:
1. Install both plugins and configure hr.local.md for your organisation
2. Build your 20-question FAQ knowledge base and deploy the knowledge-base-agent
3. Identify your three highest-risk knowledge holders and run a proactive capture session

Do NOT end with generic "Keep learning!" — end with specific, actionable deployment steps.
```
