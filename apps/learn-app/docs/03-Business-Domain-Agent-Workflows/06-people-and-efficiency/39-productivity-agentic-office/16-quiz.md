---
sidebar_position: 16
title: "Chapter 39: Productivity & The Agentic Office Quiz"
description: "Test your understanding of workplace memory architecture, task intelligence, delegation discipline, daily digests, meeting intelligence, executive dashboards, cross-domain coordination, and the four persistent agents."
chapter: 39
---

# Chapter 39 Quiz

Test your understanding of the Agentic Office, from the Context Problem and four-layer memory architecture through task intelligence, delegation discipline, meeting intelligence, and the four persistent agents that keep the system running.

<Quiz
  title="Chapter 39: Productivity & The Agentic Office"
  questions={[    {
      question: "A professional asks Claude to draft a project update for 'the Boulders review' and Claude responds with clarifying questions about what 'Boulders' means. Which context failure mode does this illustrate?",
      options: [
        "Project Amnesia; no project history",
        "Priority Blindness, equal urgency applied",
        "Terminology Blindness, unknown internal vocabulary",
        "People Anonymity, unknown stakeholders"
      ],
      correctOption: 2,
      explanation: "Terminology Blindness occurs when an AI uses generic vocabulary because it lacks the organisation's specific internal terms, here, 'Boulders' meaning quarterly strategic priorities. The AI is not failing due to lack of intelligence; it simply lacks the vocabulary context that any experienced colleague would possess. Project Amnesia involves missing project history and decisions. Priority Blindness means treating all requests as equally urgent. People Anonymity means not knowing who stakeholders are or how to work with them. The fix, encoding 'Boulders' in Layer 4 of work.local.md, eliminates this failure without changing Claude's reasoning capability.",
      source: "Lesson 1: The Context Problem"
    },
    {
      question: "Zia asks Claude to help draft a message to a stakeholder and has to spend four minutes re-explaining that person's communication preferences. Which failure mode is this costing him?",
      options: [
        "People Anonymity; no stakeholder profiles",
        "Project Amnesia, decisions forgotten",
        "Terminology Blindness, wrong vocabulary used",
        "Priority Blindness, urgency misjudged"
      ],
      correctOption: 0,
      explanation: "People Anonymity is the failure mode where the AI has no knowledge of who stakeholders are, how they communicate, or what they prioritise. Without a Layer 2 person entry for this stakeholder, every session starts from scratch, requiring re-briefing on communication style, channel preferences, and sensitivities. This is described as the most operationally expensive failure mode for anyone who communicates frequently on behalf of their organisation. Terminology Blindness relates to vocabulary, not people knowledge. Project Amnesia is about project history and status. Priority Blindness affects task urgency judgment.",
      source: "Lesson 1: The Context Problem"
    },
    {
      question: "The lesson states that the Context Problem is 'an information architecture problem, not an intelligence problem.' What is the practical implication of this framing?",
      options: [
        "Claude needs more training data before it works well",
        "The problem requires better prompt engineering alone",
        "Users must switch to a smarter AI model instead",
        "Providing structured context closes the performance gap"
      ],
      correctOption: 3,
      explanation: "Framing the Context Problem as architectural rather than intellectual shifts the solution from waiting for a smarter model to actively building structured context. Claude's reasoning capability is not the constraint: the absence of organisational context is. When work.local.md provides that context, Claude produces colleague-quality outputs because the information gap is closed. Switching models does not solve the problem; the issue is missing context, not insufficient reasoning. Better prompts help for one-off requests but do not solve the structural re-briefing problem, persistent memory (work.local.md) is required. This architectural framing motivates the investment in Lessons 3–5.",
      source: "Lesson 1: The Context Problem"
    },
    {
      question: "Priority Blindness leads an AI to treat all tasks as equally important. Which work.local.md layer most directly addresses this failure mode?",
      options: [
        "Layer 2 (Team), stakeholder profiles loaded",
        "Layer 3 (Projects), P1/P2/P3 project priorities set",
        "Layer 4 (Organisational), terminology dictionary built",
        "Digest configuration, critical path defined"
      ],
      correctOption: 1,
      explanation: "Layer 3 (Projects) stores the P1/P2/P3 priority classification for each active project, which is what the task-intelligence skill reads when determining whether a task inherits elevated urgency. When AgentFactory is marked P1 in Layer 3, any task connected to it is treated with elevated priority by default, solving Priority Blindness. Layer 2 addresses People Anonymity through stakeholder profiles. Layer 4 addresses Terminology Blindness through the vocabulary dictionary. Digest configuration helps surface priorities but relies on Layer 3 data being present first. The architectural fix to Priority Blindness is encoding project priorities persistently.",
      source: "Lesson 1: The Context Problem"
    },
    {
      question: "The official Productivity plugin and the custom Agentic Office plugin are described as having 'zero trigger overlap.' Why is this design principle important?",
      options: [
        "It prevents both plugins from charging credits simultaneously",
        "It forces users to remember which plugin handles each task",
        "It ensures each plugin activates only on its intended inputs",
        "It reduces the total number of skills available in the session"
      ],
      correctOption: 2,
      explanation: "Zero trigger overlap ensures that when a user says 'add a task,' only the official plugin's task-management skill activates, and when a user says 'brain dump,' only the custom plugin's task-intelligence skill activates. Without this separation, both plugins might compete to handle the same input, producing conflicting or redundant outputs. The design is intentional, official plugin owns 'task,' 'remember,' 'start,' 'update,' 'sync'; custom plugin owns 'brain dump,' 'prioritise,' 'delegate,' 'daily digest,' 'meeting prep.' This is not about billing, user memorisation, or reducing skill count; it is about clean responsibility boundaries that make the system predictable.",
      source: "Lesson 2: Two Plugins, One System"
    },
    {
      question: "After running /productivity:start, a user finds TASKS.md, CLAUDE.md, memory/, and dashboard.html have been created. Which plugin created these files, and what is their primary purpose?",
      options: [
        "Official plugin, task and memory infrastructure",
        "Custom plugin, professional intelligence layer",
        "Both plugins jointly, shared storage system",
        "Custom plugin, agent orchestration scaffolding"
      ],
      correctOption: 0,
      explanation: "The official Productivity plugin (Anthropic's) creates these four infrastructure files when /productivity:start is run. TASKS.md is the task list storage; CLAUDE.md is the hot cache for recent session context; memory/ is deep storage for longer-form reference; dashboard.html is the visual task board. The custom Agentic Office plugin creates work.local.md and provides nine skills and four agents: the professional intelligence layer. This distinction matters: the official plugin is infrastructure (storage, CRUD), the custom plugin is intelligence (prioritisation, delegation, digests, agents). Neither plugin creates all files, and they are not a joint or shared system.",
      source: "Lesson 2: Two Plugins, One System"
    },
    {
      question: "A user populates work.local.md with how they wish they worked rather than how they actually work. What is the most direct consequence of this error?",
      options: [
        "The terminology dictionary fails to load on session start",
        "AI outputs are calibrated to a person who does not show up at work",
        "Layer 2 person entries become inaccessible to the skill",
        "The delegation log records incorrect ownership information"
      ],
      correctOption: 1,
      explanation: "The lesson explicitly warns: 'Work.local.md that describes how you wish you worked is useless. Describe how you actually work.' Aspirational entries in Layer 1 calibrate Claude to an idealised version of the user: a person who may prefer narrative output when the real user actually prefers bullets, or who prefers email when WhatsApp is what they actually check. Every subsequent output from every skill that reads Layer 1 will be miscalibrated. The terminology dictionary (Layer 4) and person entries (Layer 2) function based on their own data, not Layer 1. The delegation log uses names and tasks, not personal working-style data.",
      source: "Lesson 3: Workplace Memory Architecture"
    },
    {
      question: "Which component of Layer 4's culture section is described as 'consistently the highest-value, most underfilled section' in work.local.md?",
      options: [
        "The stated organisational values (CLEAR framework)",
        "The meeting rhythm with recurring schedules",
        "The decision-making protocols and norms",
        "The unwritten rules that insiders know implicitly"
      ],
      correctOption: 3,
      explanation: "The unwritten rules section is described as the highest-value, most underfilled section because it encodes implicit organisational norms, things every experienced colleague knows but that are never formally documented. Examples include 'Let's take this offline' meaning politically sensitive and not to be minuted, or that data requests to a specific person require three business days' lead time. An AI without these rules will violate them in its first week of use, potentially causing serious professional embarrassment. Stated values, meeting rhythms, and decision-making protocols are also important but tend to be filled in because they are explicit; unwritten rules are omitted precisely because they feel obvious to insiders.",
      source: "Lesson 3: Workplace Memory Architecture"
    },
    {
      question: "How does work.local.md differ functionally from the CLAUDE.md file created by the official Productivity plugin?",
      options: [
        "work.local.md stores tasks; CLAUDE.md stores project memory",
        "work.local.md is temporary per session; CLAUDE.md is permanent",
        "work.local.md is enduring professional context; CLAUDE.md is recent session cache",
        "work.local.md handles terminology; CLAUDE.md handles people entries"
      ],
      correctOption: 2,
      explanation: "CLAUDE.md is the official plugin's hot cache, optimised for fast retrieval of what happened in recent sessions, recent task updates, temporary working state. work.local.md is the structured professional memory layer: the enduring organisational context that does not change session-to-session: terminology, stakeholder profiles, project priorities, cultural norms. The chapter uses this distinction: 'CLAUDE.md: Hot cache, recent session context, temporary state. work.local.md: Professional memory, enduring organisational context.' Neither file stores tasks exclusively (that is TASKS.md), and neither is limited to terminology or people alone, both serve broader purposes in their respective domains.",
      source: "Lesson 3: Workplace Memory Architecture"
    },
    {
      question: "The terminology dictionary in Layer 4 requires four pieces of information for each entry. Which element is most critical for preventing AI outputs from embarrassing the sender in external communications?",
      options: [
        "The 'when NOT to use it' guidance for each term",
        "The related terms or historical synonyms used",
        "The internal definition of the term in plain language",
        "The team or initiative that originated the term"
      ],
      correctOption: 0,
      explanation: "The 'when NOT to use it' guidance prevents internal vocabulary from appearing in external-facing communications where it would confuse or reveal sensitive information. For example, 'Project Nighthawk' carries 'Not: any external communication; do not use externally under any circumstances.' Without this field, Claude might use an internal codename in a client email or board document. The internal definition is necessary but not sufficient, knowing what a term means does not prevent misuse in wrong contexts. Related terms help with search but do not prevent external leakage. The originating team adds context but does not constrain output scope.",
      source: "Lesson 3: Workplace Memory Architecture"
    },
    {
      question: "A Layer 2 person entry's communication field reads: 'Prefers clear communication.' Why does this entry fail the quality standard for work.local.md?",
      options: [
        "It is too long for the memory system to process efficiently",
        "It would apply to virtually any professional, making it useless for calibration",
        "It should be placed in Layer 4 under cultural norms instead",
        "It lacks the sensitivity flag required for all person entries"
      ],
      correctOption: 1,
      explanation: "The lesson provides this exact test: 'Would this observation apply to 80% of professionals?' Generic descriptions like 'prefers clear communication' fail because they describe almost everyone; they provide no calibration signal. A useful communication entry describes specific behaviours: channel preference (Slack DM for routine, email for formal), response patterns (needs two business days' lead time for data pulls), and how to handle scope (be hyper-specific to avoid push-back). The entry length is not the issue. Communication preferences belong in Layer 2, not Layer 4. The sensitivity field (RESTRICTED flag) is optional, not required for all entries.",
      source: "Lesson 4: Building Your People Memory"
    },
    {
      question: "A person entry carries a RESTRICTED sensitivity flag. In which scenario should this information be surfaced by the workplace-context skill?",
      options: [
        "In group meeting prep briefs for meetings the person attends",
        "In delegation handoff messages sent to the person",
        "In the daily digest when that person is mentioned",
        "In one-to-one preparation for a private management conversation"
      ],
      correctOption: 3,
      explanation: "RESTRICTED entries are applied only when directly relevant to a one-to-one task where the subject of the entry is not the audience, for example, Zia preparing for a private conversation with a person's manager about that person's succession. The rule explicitly states: 'They are never surfaced in people briefs shared with a group, delegation messages, meeting prep documents where the subject is an attendee, or any output that could be seen by the person the entry concerns.' The sensitivity flag controls when information surfaces, not whether it is stored ; it has value in appropriate private contexts.",
      source: "Lesson 4: Building Your People Memory"
    },
    {
      question: "The people brief sample shows the skill surfacing 'Today's context' and 'Current mood' for a stakeholder even though these are not explicit fields in the person entry format. How is this possible?",
      options: [
        "The skill synthesises person entries with delegation logs and project context",
        "The skill invents plausible information to fill gaps automatically",
        "The skill accesses external CRM data connected via MCP",
        "The skill generates probabilistic personality profiles from prior sessions"
      ],
      correctOption: 0,
      explanation: "The skill synthesises data from multiple layers: the person entry in Layer 2, open delegation records (is a task awaiting confirmation from this person?), project context from Layer 3 (what is in flight that involves this person?), and meeting notes. 'The analytics brief request was delegated yesterday; has not confirmed receipt' comes from the delegation log, not the person entry itself. This cross-layer synthesis is what makes the people brief more useful than a raw memory lookup. The skill does not invent information, access external CRMs unprompted, or generate personality profiles ; it surfaces structured data you have provided across multiple layers.",
      source: "Lesson 4: Building Your People Memory"
    },
    {
      question: "Layer 3's at_risk field for Project Nighthawk reads: 'Facility agreement negotiations stalled, 10+ days with no update, blocking Q3 target.' Why is this entry more useful than 'Some scheduling challenges'?",
      options: [
        "It uses more technical vocabulary that the skill understands better",
        "It is shorter and therefore faster for the skill to retrieve and process",
        "It names the specific constraint, duration, and downstream impact",
        "It references a named layer that the search command can index directly"
      ],
      correctOption: 2,
      explanation: "A useful at_risk entry names the specific risk (facility agreement stalled), quantifies its duration (10+ days), and identifies the downstream consequence (blocking Q3 target). This specificity enables the skill to surface an actionable picture: not just 'there is some risk' but 'this specific thing has been stuck for this long and it is causing this downstream problem.' Generic entries like 'some scheduling challenges' tell neither the skill nor the reader what to do. Technical vocabulary, entry length, and indexing efficiency are not what differentiates useful from useless risk entries, specificity is the differentiator.",
      source: "Lesson 5: Projects and Priorities"
    },
    {
      question: "A professional classifies six of their active projects as P1. According to the chapter's priority framework, what does this indicate?",
      options: [
        "They are managing an unusually demanding portfolio this quarter",
        "They have not actually prioritised; everything being critical means nothing is",
        "They should immediately escalate to a manager for workload reduction",
        "Their work.local.md Layer 3 configuration is structurally incorrect"
      ],
      correctOption: 1,
      explanation: "The chapter states explicitly: 'If you classify more than three projects as P1, you have not prioritised; you have listed.' The word 'critical' loses meaning when applied uniformly. The three P1 rule is a forced-choice discipline: classifying a fourth project as P1 should require explicitly demoting one of the existing three. This is not about workload management or escalation; it is about the cognitive discipline of distinguishing genuinely critical from important-but-not-existential. Six P1s means the classification system has broken down, not that the portfolio is legitimately extraordinary. The structure of work.local.md is not the issue; the judgment applied to it is.",
      source: "Lesson 5: Projects and Priorities"
    },
    {
      question: "The /agentic-office:workplace-search command returns 'Not in workplace memory' for a query about a recent decision. According to the lesson, what does this result indicate?",
      options: [
        "The decision log feature is not yet available in this plugin version",
        "The search encountered an error and should be retried with different phrasing",
        "The information exists but is marked RESTRICTED and therefore hidden",
        "The information was not recorded and should be added to work.local.md"
      ],
      correctOption: 3,
      explanation: "The lesson describes 'not in workplace memory' as 'a valid and useful answer' ; it tells you one of three things: the event has not happened yet, the information exists but was not recorded (a gap to fill), or the information lives elsewhere (Notion, email, Slack) and needs to be added. The search makes memory gaps visible, which is a feature not a failure. There is no indication this is a plugin version limitation. The search command is designed to handle gaps gracefully, not require rephrasing. RESTRICTED entries are not hidden entirely; they are surfaced only in appropriate one-to-one contexts, not returned as 'not in memory.'",
      source: "Lesson 5: Projects and Priorities"
    },
    {
      question: "The task-intelligence skill classifies a task as P2 despite it belonging to a P1 project. What is the most likely explanation for this classification?",
      options: [
        "The skill cannot read project priority from work.local.md correctly",
        "The skill defaults all new tasks to P2 until manually overridden",
        "The task has no hard deadline today and is not currently blocking anyone",
        "The P1 project has not yet been confirmed as active by the user"
      ],
      correctOption: 2,
      explanation: "The five priority sorting criteria are applied in order: hard deadline, blocking someone, P1 project, consequence of slipping, urgency vs importance. A task on a P1 project (criterion 3) is likely P1 , but only if it also has urgency characteristics. In the lesson's worked example, Chapter 28 draft is classified P2 despite being part of P1 AgentFactory because the deadline is Thursday (not today) and it is not currently blocking anyone. The skill correctly flags it: 'treat as high priority despite P2 urgency rating.' The skill reads project priority correctly; classification depends on the full five-criterion evaluation, not just project affiliation.",
      source: "Lesson 6: Task Intelligence"
    },
    {
      question: "The brain dump pattern deliberately separates capture from classification. Which cognitive problem does this separation solve?",
      options: [
        "Users forget tasks when forced to evaluate importance during capture",
        "The skill cannot process tasks that arrive in evaluation mode",
        "Simultaneous capture and filtering violates the P1 five-item rule",
        "Classification requires Layer 3 context that is only loaded after capture"
      ],
      correctOption: 0,
      explanation: "The lesson states that capture and classification 'use different cognitive modes, capture requires openness (write everything, filter nothing), while classification requires judgment (evaluate, compare, decide). Trying to do both simultaneously causes tasks to be forgotten or misclassified.' The brain dump pattern solves this by separating the two modes: dump everything first without evaluation, then let the skill apply structured classification. The skill can process tasks regardless of how they arrive. The P1 five-item rule is about classification output, not process. Layer 3 context is loaded as part of the skill's enrichment step, not as a precondition for capture.",
      source: "Lesson 6: Task Intelligence"
    },
    {
      question: "The critical path for Monday is: Nighthawk status check → investor deck deadline clarification → Ayesha review → Executive Weekly prep. Chapter 28 draft (due Thursday) is not on the critical path. Why?",
      options: [
        "Chapter 28 is a P3 task and excluded from critical path analysis",
        "Chapter 28 does not block any of the Monday tasks in the identified sequence",
        "The critical path only includes delegated tasks, not direct owner tasks",
        "Chapter 28 belongs to a different project layer and is tracked separately"
      ],
      correctOption: 1,
      explanation: "The critical path identifies the sequence of tasks where a slip on any one delays everything downstream. Chapter 28 draft is due Thursday ; it does not block any Monday tasks in the sequence, and no Monday task depends on Chapter 28 being complete first. P1/P2 priority and critical path are different concepts: critical path is about sequence and dependencies, priority is about importance and urgency. A P2 task can be on the critical path if it blocks a P1 task later in the week; a P1 task may not be on today's critical path if it has no current dependencies. The critical path is not limited to delegated tasks or any particular layer.",
      source: "Lesson 6: Task Intelligence"
    },
    {
      question: "A delegation reads: 'Can you handle the analytics thing?' According to the delegation quality checklist, which is the single most critical missing element?",
      options: [
        "The delegatee's communication style preference",
        "The formal delegation record entry in work.local.md",
        "The follow-up mechanism and confirmation window",
        "A specific, measurable deliverable description"
      ],
      correctOption: 3,
      explanation: "The lesson's first checklist item is a specific deliverable , not an activity ('work on the analysis') but an output ('2-page investor-facing analytics summary, slides-ready format'). Without a specific deliverable, the delegatee cannot know what they are producing, in what format, to what length, or for what audience. Every other checklist item (named person, deadline, context, format, calibrated message, follow-up) depends on first knowing what is being delegated. While communication style, follow-up mechanisms, and formal records are all required checklist items, the fundamental ambiguity of 'the analytics thing' makes the deliverable the most critical gap; everything else collapses without it.",
      source: "Lesson 7: Delegation as a Discipline"
    },
    {
      question: "The same analytics brief task is delegated to Omar Farooq and then hypothetically to Ayesha Raza. Which element of the delegation record would differ most between the two?",
      options: [
        "The handoff communication message and channel",
        "The deadline and due date for the output",
        "The deliverable specification (what, format, length)",
        "The context section (purpose and audience)"
      ],
      correctOption: 0,
      explanation: "The task (analytics brief), deadline (22 March), format (slides-ready, charts), and context (investor deck, sophisticated investors) are identical regardless of delegatee: these are determined by the task and its purpose, not the person. What changes is the handoff communication: Omar gets a Slack DM with hyper-specific scope, lead time acknowledgment, and a confirmation request, because his profile shows he dislikes last-minute asks and pushes back on scope creep. Ayesha gets more background context, a more structured written brief, and more explicit audience framing, because she is new, prefers detail, and is still building mental models of the organisation. The calibration changes the wrapper, not the task.",
      source: "Lesson 7: Delegation as a Discipline"
    },
    {
      question: "A delegation has been in PENDING CONFIRMATION status for 36 hours with no response. What does the follow-up protocol prescribe at this point?",
      options: [
        "Flag it RED in the digest and wait for the user to decide next steps",
        "Mark it OVERDUE and begin the three-day late overdue protocol",
        "Send a polite follow-up and escalate to RED if still unconfirmed at 48 hours",
        "Re-delegate to an alternative person from Layer 2"
      ],
      correctOption: 2,
      explanation: "The confirmation window for same-week tasks is 24 hours. At 36 hours, the first follow-up should have already been sent (at the 24-hour mark). The prescription at this stage is: if no confirmation after the second contact (around 48 hours), flag it RED in the digest and prompt the user to decide. Between 24 and 48 hours, the correct action is a single gentle follow-up. The task is still PENDING CONFIRMATION, not OVERDUE (that status applies to the deliverable deadline, not the confirmation window). Re-delegating is not an automatic protocol step that is a user decision prompted only after RED flagging.",
      source: "Lesson 7: Delegation as a Discipline"
    },
    {
      question: "The daily digest has a non-negotiable constraint: it must fit on one page. What happens to items that exceed this limit?",
      options: [
        "They trigger a secondary digest sent later in the day",
        "They are dropped entirely from the current day's output",
        "They are consolidated into a single 'overflow' section at the bottom",
        "They are automatically moved to the executive dashboard or full task list"
      ],
      correctOption: 3,
      explanation: "The lesson states: 'if it exceeds this, items are being included that do not belong in the morning brief. They belong in the dashboard (for weekly review) or the task list (for full inventory).' The digest is a selection tool, not a comprehensive catalogue. Items beyond its scope move to the appropriate containing system: the executive dashboard for project status items, TASKS.md for full task inventory. Items are not dropped (they exist elsewhere), consolidated into overflow (which defeats the purpose), or deferred to a second digest (which defeats the 5-minute read constraint). The one-page rule is about discipline of omission, not compression.",
      source: "Lesson 8: The Daily Digest"
    },
    {
      question: "The digest rule distinguishes 'briefing voice' from 'system voice.' Which example demonstrates correct briefing voice?",
      options: [
        "Project Nighthawk status: no update for 10 days. Action: escalate.",
        "Nighthawk has been quiet for 10 days, escalation today, not tomorrow.",
        "Nighthawk facility update: requires review. Assignee: Zia. Due: today.",
        "Nighthawk stall duration: 10 days. Risk level: HIGH. Next step: TBD."
      ],
      correctOption: 1,
      explanation: "Briefing voice delivers the interpretation ready to act on ; it sounds like a knowledgeable colleague who understands context and urgency, not a system generating a status report. 'Nighthawk has been quiet for 10 days, escalation today, not tomorrow' combines the fact (10 days), the implication (it is already overdue), and the action ('today, not tomorrow') in natural language. The other options are system voice: they label statuses, assign codes (HIGH, TBD), use colon-separated fields, or reduce human judgment to database fields. Briefing voice reduces cognitive load because it tells the reader what to do, not just what the system knows.",
      source: "Lesson 8: The Daily Digest"
    },
    {
      question: "The Monday digest variant adds two sections not present in the standard Tuesday-Thursday digest. What are these sections, and why are they structurally different from the daily critical path?",
      options: [
        "This Week's Critical Path and Open from Last Week, framing the full week, not today",
        "Week-ahead milestones and delegation audit, replacing the flagged items section",
        "Weekly priorities reminder and domain agent metrics, adding external data sources",
        "Decision log review and meeting efficiency audit, drawn from Friday's close output"
      ],
      correctOption: 0,
      explanation: "The Monday variant adds 'This Week's Critical Path' (the 3-5 things that, if done this week, make it a success: a week-level frame, not a day-level sequence) and 'Open from Last Week' (what carried over from Friday and why, provided as context not judgment). The daily critical path is the sequence for today; the weekly critical path is the frame for the full week: a different planning horizon. Monday is planning mode, not execution mode, which justifies the structural expansion. The other options describe content from other lessons (domain agent metrics, delegation audits, decision log reviews) but are not the two sections added specifically for the Monday variant.",
      source: "Lesson 8: The Daily Digest"
    },
    {
      question: "The three-phase meeting model assigns the highest leverage to the preparation phase. What specific capability does the prep brief provide that generic agenda review does not?",
      options: [
        "A full transcript of the previous meeting's discussion to review",
        "A pre-generated set of minutes ready to distribute after the meeting",
        "Stakeholder notes showing how each attendee will likely respond to each agenda item",
        "An automated summary of decisions made in prior meetings on the same topic"
      ],
      correctOption: 2,
      explanation: "The prep brief's highest-value element is stakeholder notes: per-person guidance on how each attendee is likely to receive each agenda item, based on their Layer 2 person entry. 'Omar will have data; do not pre-empt it. Let him present, then ask one clarifying question about ERP compatibility' is an example. This changes how Zia participates in the meeting in ways that a simple agenda review cannot. The prep brief does not provide full transcripts of prior meetings (it provides summaries of key decisions). Minutes are produced in the after phase, not prepared before. Decision summaries appear in the 'Last Time This Group Met' section but are not the primary differentiator.",
      source: "Lesson 9: Meeting Intelligence"
    },
    {
      question: "A meeting note reads: 'Omar said the analytics timeline might slip due to the ERP migration.' Using D/A/F/Q/R coding, what code should this note receive?",
      options: [
        "D: a decision was made about the analytics timeline",
        "A: an action item was assigned to Omar",
        "F: a fact or contextual piece of information to remember",
        "R: a risk or concern raised during the meeting"
      ],
      correctOption: 3,
      explanation: "The note describes a concern raised during the meeting that the ERP migration might cause a timeline slip for the analytics work. This matches the R (Risk) code: 'A concern or risk raised.' It is not a Decision (nothing was decided, 'might slip' is a possibility, not a conclusion). It is not an Action (no one was assigned to do something). It is a Fact in the loose sense (it is information), but the D/A/F/Q/R system uses F for factual context like 'ERP migration in Q2,' not for risk assessments. If the note had said 'decided to extend the analytics deadline by one week,' that would be a D. Identifying the correct code during the meeting prevents synthesis ambiguity.",
      source: "Lesson 9: Meeting Intelligence"
    },
    {
      question: "A meeting synthesis produces the action item: 'The team will follow up on the Islamabad workshop expansion.' Why does this fail the synthesis quality standard?",
      options: [
        "The action references a deferred decision rather than a current deliverable",
        "It has no single named owner and no specific deadline",
        "The Islamabad topic belongs in the decision log, not the action log",
        "The action was not captured using D/A/F/Q/R coding during the meeting"
      ],
      correctOption: 1,
      explanation: "The synthesis quality standard for actions has two non-negotiable requirements: one named owner and a specific date. 'The team will follow up' violates both, 'the team' is a shared owner (which guarantees nothing happens) and 'follow up' has no deadline. The correct format is: 'Zia Khan to quantify Nighthawk Q3→Q4 cost, due Monday 24 March.' The action's reference to a deferred topic is not the problem (actions can follow from deferred decisions, e.g., tracking when the trigger occurs). Whether it belongs in the decision log is separate. The coding failure is a capture quality issue, not a synthesis quality issue.",
      source: "Lesson 9: Meeting Intelligence"
    },
    {
      question: "The D-YYYY-NNN decision numbering convention serves three purposes. Which purpose is most directly relevant to preventing organisational decisions from being relitigated?",
      options: [
        "It enables pattern analysis of how many decisions were reversed quarterly",
        "It creates a numbered chain linking each action to its originating decision",
        "It makes decisions searchable by date and number across all sessions",
        "It triggers automatic work.local.md updates after each meeting synthesis"
      ],
      correctOption: 2,
      explanation: "The searchability purpose is most directly relevant to preventing reli­tigation: 'When did we decide X?' returns D-2026-003 and its context from the Executive Weekly. Without the numbered, searchable decision log, answering this question requires hunting through meeting notes, assuming anyone kept them. When D-2026-003 clearly records 'Islamabad expansion DEFERRED; trigger: Nighthawk resolved,' the decision cannot be revisited without consciously acknowledging it was previously made. The action-to-decision chain (A links to D) is a related purpose but not the primary one for preventing relitigation. Pattern analysis is a third purpose (long-term governance). Work.local.md updates are proposed by the synthesis skill, not automatically triggered by numbering.",
      source: "Lesson 9: Meeting Intelligence"
    },
    {
      question: "Project Nighthawk is RED on the executive dashboard. AgentFactory is AMBER. BankersAI is GREEN. What is the correct headline status for the executive dashboard?",
      options: [
        "RED, because the worst-case RAG status across all projects is red",
        "AMBER, because the majority of projects are not red",
        "AMBER, because only one of three projects is in a critical state",
        "GREEN, because BankersAI is on track and highest-priority"
      ],
      correctOption: 0,
      explanation: "The executive dashboard headline aggregates the worst-case RAG status across all tracked projects: 'If any project is RED, the headline is RED.' Project Nighthawk's hard blocker (facility stall, stale 10+ days) drives the headline to RED regardless of AgentFactory's AMBER or BankersAI's GREEN status. This design ensures that executives cannot overlook a critical item because it is numerically outnumbered by lower-severity projects. The headline does not average, vote, or weight by project priority ; it surfaces the floor. One RED project always produces a RED headline, forcing attention to the most critical situation in the portfolio.",
      source: "Lesson 10: The Executive Dashboard"
    },
    {
      question: "Project Nighthawk has not received a status update in 10 days. Under the RAG status rules, what is the correct classification and why?",
      options: [
        "AMBER, because it is a P2 project and not existentially critical",
        "GREEN, because the team is working on a facility letter as a recovery plan",
        "AMBER, because the milestone has not yet officially missed its deadline",
        "RED, because a hard blocker exists and progress cannot continue without resolution"
      ],
      correctOption: 3,
      explanation: "Nighthawk's facility agreement stall is explicitly classified as a hard blocker, progress cannot continue on Q3 planning without the facility agreement. RED status applies when 'at least one of: a milestone missed, a hard blocker, or a decision overdue' is present. The project priority (P2) does not prevent RED status, RAG rules are about current state, not strategic importance. Showing GREEN because a recovery plan (the formal letter) is in progress violates the milestone-slip rule: 'Never show GREEN for a project where a milestone has slipped without explicit acknowledgement, even if the team is working on a fix.' The Q3 commitment has slipped its implicit deadline.",
      source: "Lesson 10: The Executive Dashboard"
    },
    {
      question: "A blocker has been open for 12 days without movement. According to the blocker classification system, what type is this and what is the prescribed escalation action?",
      options: [
        "Hard blocker; escalate immediately to the named owner with a deadline",
        "Stale blocker; escalate to the next level because the current handling failed",
        "Soft blocker, apply a workaround and note it for monitoring",
        "Hard blocker, re-classify as soft once a workaround is identified"
      ],
      correctOption: 1,
      explanation: "A stale blocker is defined as one that 'has been open >7 days without movement.' At 12 days, this blocker is stale: the prescribed response is to 'escalate to next level; flag in digest; the owner has failed to resolve.' A hard blocker that appeared today warrants 'escalate immediately; name who must resolve; set deadline.' The stale classification signals that the prior escalation attempt has failed and a different approach is needed. A soft blocker (slowing progress but with a workaround) requires only noting and monitoring. The re-classification option is not part of the framework: a stale blocker remains a blocker until resolved, not until a workaround appears.",
      source: "Lesson 10: The Executive Dashboard"
    },
    {
      question: "The executive dashboard passes the '5-minute test' when a colleague can understand the week's overall picture without follow-up questions. What most directly determines whether this test passes?",
      options: [
        "The number of domain agent feeds connected to the dashboard",
        "The RAG threshold values configured in the dashboard section",
        "The specificity and currency of the underlying work.local.md content",
        "Whether the official plugin's dashboard.html is also open simultaneously"
      ],
      correctOption: 2,
      explanation: "The 5-minute test asks: could a colleague tell from this dashboard what the week looks like without asking a follow-up question? The answer depends on whether work.local.md has specific, current information about each project's status, risks, and actions. The lesson states: 'The quality of the brief is a direct function of the quality of the entries' , and the same principle applies to the dashboard. More domain agent feeds add breadth but do not compensate for vague or stale project entries. RAG thresholds affect when projects change colour but not the richness of the contextual narrative. The official plugin's dashboard.html is a separate individual task tool and is irrelevant to the executive dashboard's 5-minute test.",
      source: "Lesson 10: The Executive Dashboard"
    },
    {
      question: "The context-loader command supports five context types. When preparing for a new hire's first week, which type should be used, and why?",
      options: [
        "Cross-domain, onboarding genuinely touches HR, Finance, and Operations simultaneously",
        "Person: the new hire's profile contains all cross-functional needs",
        "Single-domain, HR owns onboarding and all relevant context lives there",
        "Project: the onboarding should be tracked as a project with milestones"
      ],
      correctOption: 0,
      explanation: "The Dr. Sana Mirza onboarding scenario illustrates precisely why cross-domain is the correct type: 'Her onboarding is not a single-domain task ; it genuinely touches HR (onboarding protocol), Finance (headcount budget), and Operations (system access).' Using single-domain HR would miss Operations system access timelines and Finance tooling implications. Person context loads what is known about the individual but not the functional cross-domain dependencies. Project type is for working on a project (like Nighthawk) not preparing for a new hire. Only cross-domain type correctly loads the integrated picture across all three relevant functions simultaneously.",
      source: "Lesson 11: Cross-Domain Intelligence"
    },
    {
      question: "The 'gaps in context' section of a cross-domain context brief shows: 'The specific tooling Omar is proposing is not in work.local.md.' How should the user interpret this gap?",
      options: [
        "The context-loader skill failed to access the finance domain agent correctly",
        "This information needs to be added to work.local.md before the conversation",
        "The gap is acceptable because tool names are too technical for memory systems",
        "The skill is indicating that the finance domain configuration is incomplete"
      ],
      correctOption: 1,
      explanation: "The lesson states: 'The gaps section is a deliberate feature. It tells you what context would be useful but is not in work.local.md, meaning the next action is to add it.' 'Review the ROI brief for the tool names before the conversation' is the specific advice. This is not a skill failure: the skill is correctly identifying an information gap. The gap is actionable: check the ROI brief, note the tool name, and optionally add it to work.local.md so future searches surface it. The finance domain configuration is not implicated: the gap is in work.local.md, not in the domain agent. Technical details can and should be stored in work.local.md when they are relevant to professional decisions.",
      source: "Lesson 11: Cross-Domain Intelligence"
    },
    {
      question: "The /agentic-office:workplace-search result for 'Islamabad expansion' returns 'No active tasks related to Islamabad expansion.' The chapter describes this as 'as informative as a positive result.' Why?",
      options: [
        "It confirms the search engine is functioning correctly with no false negatives",
        "It reveals that all Islamabad work was archived rather than completed",
        "It indicates the Islamabad project should be promoted to P2 status immediately",
        "It confirms the deferral decision was correctly implemented with no action taken"
      ],
      correctOption: 3,
      explanation: "D-2026-003 deferred the Islamabad expansion with a trigger (Nighthawk facility resolved) and no timeline, meaning no one should have been assigned to Islamabad work. 'No active tasks' in the task/delegation log confirms exactly this: 'This is correct, as D-2026-003 set no timeline.' An absence of tasks is informative because it validates that the deferral decision was honoured. The search is not testing itself; it is surfacing a meaningful data point about organisational follow-through. No promotion to P2 is implied: the decision to defer stands until the trigger fires. No archiving has occurred; the project simply has no active tasks because the decision said there should not be.",
      source: "Lesson 11: Cross-Domain Intelligence"
    },
    {
      question: "An integration protocol triggers on 'new hire approved' and checks Finance, Operations, and HR. What transformation does this protocol represent relative to manual cross-domain context loading?",
      options: [
        "It shifts the system from reactive (I need context now) to proactive (surface it automatically)",
        "It replaces manual loading entirely, eliminating the need for work.local.md updates",
        "It enables the context-loader to access live HR systems without MCP configuration",
        "It converts integration from a plugin feature to a standalone workflow"
      ],
      correctOption: 0,
      explanation: "The lesson describes integration protocols as the evolution 'from manual cross-domain context loading (this lesson) to automated integration protocols (ongoing configuration) to a system that proactively surfaces cross-domain context before you need to ask for it.' When a new hire is approved, the protocol automatically checks Finance (budget impact?), Operations (system access?), and HR (onboarding protocol?), without the user having to think to run context-loader first. This is the shift from reactive to proactive. Integration protocols do not replace work.local.md updates; they trigger them. They do not bypass MCP configuration. They are a feature of the agentic-office plugin, not a standalone workflow.",
      source: "Lesson 11: Cross-Domain Intelligence"
    },
    {
      question: "The Digital Chief of Staff has three categories of daily tasks. Which category is described as 'invisible' until an item falls through the cracks?",
      options: [
        "Digest delivery: the 07:00 scheduled morning briefing assembly",
        "Real-time intelligence, answering workplace questions on demand",
        "Threshold monitoring, watching for items that breach configured thresholds"
      ],
      correctOption: 2,
      explanation: "The lesson states: 'The daily digest is visible; threshold monitoring is invisible, until an item falls through the cracks.' Threshold monitoring fires when the system detects that an item has crossed its configured threshold (e.g. 7 days without a project update): the user does not see it working, only the alert it produces when something is wrong. The digest is delivered at a fixed time every morning and is inherently visible. Real-time intelligence responds to explicit questions from the user, also visible. Threshold monitoring is the background process that catches what neither the digest nor the user has noticed, making it the safety net for operational blind spots.",
      source: "Lesson 12: The Digital Chief of Staff"
    },
    {
      question: "The Chief of Staff's real-time intelligence operates on the rule: 'answer as a knowledgeable colleague would, not as a system returning a database query.' What distinguishes the colleague-quality answer from the database query answer?",
      options: [
        "The colleague answer is shorter because it omits supporting data",
        "The colleague answer summarises the decision log entries verbatim",
        "The colleague answer always defers to the user rather than making recommendations",
        "The colleague answer includes organisational context, implications, and recommended action"
      ],
      correctOption: 3,
      explanation: "A database query answers: 'What is Project Nighthawk's current status?' A knowledgeable colleague answers: 'Nighthawk is ten days stalled on the facility agreement. Omar is not directly involved, but the Q3 plan depends on this resolving before end of month. You may need to escalate directly to the COO.' The colleague answer adds who is involved, what depends on what, what the cultural norms are around escalation, and what action to consider, all drawn from work.local.md context. The colleague answer is typically longer and richer, not shorter. It makes recommendations, not deferrals. It synthesises context, not verbatim retrieval.",
      source: "Lesson 12: The Digital Chief of Staff"
    },
    {
      question: "The Monday week-ahead brief arrives at 06:45, fifteen minutes before the 07:00 digest. Why is this sequencing important?",
      options: [
        "The brief must finish processing before the digest can pull task data",
        "The brief sets the week's strategic frame before operational detail arrives",
        "The digest requires the brief's output to generate the critical path section",
        "The 06:45 window allows MCP calendar sources to fully synchronise"
      ],
      correctOption: 1,
      explanation: "The lesson states the brief arrives 'fifteen minutes before the digest. So you have the week's framing before you see the operational detail.' The week-ahead brief is planning-mode output: Boulders, critical milestones, decisions needed, what would make the week a success. The digest is operational-mode output: today's tasks, delegation statuses, meeting prep. Reading the frame (what matters this week) before the operational detail (what needs to happen today) is a cognitive sequencing choice ; it prevents the day's urgency from hijacking weekly importance. The two outputs are not technically dependent on each other; the sequencing is about the user's cognitive state, not system processing requirements.",
      source: "Lesson 12: The Digital Chief of Staff"
    },
    {
      question: "Project Nighthawk has triggered a Level 1 digest flag (yellow, 7+ days stalled) two days ago and has not been actioned. According to the three-level escalation protocol, what happens next?",
      options: [
        "The item remains at Level 1 until the user explicitly dismisses it",
        "The item automatically escalates to COO-level notification",
        "The Chief of Staff sends a direct explicit message via the configured channel",
        "The Work Tracker takes ownership and contacts the facility liaison directly"
      ],
      correctOption: 2,
      explanation: "The three-level protocol: Level 1 (digest flag, yellow) → if not actioned within 2 days → Level 2 (explicit message via configured channel, e.g. Slack DM or email). Level 2 is a direct, specific notification: 'Project Nighthawk has been blocked/unactioned for 10 days. This is affecting the Q3 facility plan. Recommended action: send formal escalation letter by Wednesday.' Level 3 (COO-level) only triggers if a Level 2 item remains unresolved for 14 total days. Items do not self-dismiss or stay permanently at Level 1. The agents do not take action on behalf of the user (like contacting external parties); they surface situations and offer to prepare materials.",
      source: "Lesson 12: The Digital Chief of Staff"
    },
    {
      question: "The chief_of_staff configuration block uses an escalation_threshold_days value of 7. A team working in government on multi-month projects considers reducing this to 3. According to the lesson, what risk does this create?",
      options: [
        "Alerts will fire on normal operational pauses, causing users to ignore them",
        "The Memory Keeper will trigger too frequently and degrade work.local.md accuracy",
        "The digest will exceed its one-page constraint from excessive alert volume",
        "The official plugin's task-management skill will conflict with the escalation logic"
      ],
      correctOption: 0,
      explanation: "The lesson warns: 'thresholds too low create noise: every normal pause generates an alert, causing the user to ignore them. Thresholds too high let real problems fester.' In a government or large enterprise context where turnarounds legitimately take longer, a 3-day threshold would generate alerts for items that are simply in normal processing cycles, not stalled. Once users learn that alerts fire constantly on non-issues, they stop responding to them, defeating the entire purpose of threshold monitoring. The Memory Keeper operates on separate triggers. The one-page constraint applies to the digest content, not alert volume per se. Plugin conflicts are not part of the threshold calibration discussion.",
      source: "Lesson 12: The Digital Chief of Staff"
    },
    {
      question: "The Memory Keeper triggers on 'new person mentioned in conversation' and proposes a work.local.md entry. Why does it propose rather than apply changes automatically?",
      options: [
        "Automatic updates would exceed the plugin's file write permissions",
        "The skill cannot determine which memory layer the person belongs in",
        "Automatic updates would conflict with the official plugin's CLAUDE.md management",
        "Wrong context produces wrong outputs from every downstream agent, confirmation is the quality gate"
      ],
      correctOption: 3,
      explanation: "The lesson states: 'The Memory Keeper NEVER applies updates to work.local.md without user confirmation. This rule is absolute. An agent that modifies organisational memory autonomously is a liability, wrong context produces wrong outputs from every downstream agent.' If the Memory Keeper incorrectly captures a person's role, communication style, or relationship sensitivity, every subsequent output from every skill that reads Layer 2 will be miscalibrated. The confirmation step lets the user verify accuracy before it propagates. This is not a file permission limitation (the agent has write access; the rule is by design). The skill knows which layer, people go in Layer 2. Plugin conflict is not the rationale.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "A delegation was created (T+0) and has received no confirmation at T+48 hours. According to the Work Tracker's delegation lifecycle, what is the current status and prescribed action?",
      options: [
        "PENDING CONFIRMATION, send the second follow-up message at T+48",
        "UNCONFIRMED, flag as RED in the digest; prompt user to follow up directly or re-route",
        "IN PROGRESS, assume the delegatee accepted and monitor for midpoint check-in",
        "OVERDUE, begin the Day 1 late overdue protocol message sequence"
      ],
      correctOption: 1,
      explanation: "The lifecycle: T+0 delegation created → confirmation window set (24 hours) → T+24: if no confirmation, send polite follow-up → T+48: if still no confirmation, flag as RED in digest and prompt user to decide (follow up directly or re-route). At T+48, the delegation is flagged RED, not PENDING (that expires at T+24 when the first follow-up was sent) and not IN PROGRESS (no confirmation means no acceptance assumed). OVERDUE applies to the deliverable deadline, not the confirmation window: the delivery date has not yet passed. The T+48 flag is a user decision point: the agent surfaces the situation but the user decides whether to re-route.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "The weekly delegation audit shows: 'Omar Farooq, 3 delegations this quarter, 2/3 on time. Pattern: confirms quickly, delivers slightly late when scope is unclear.' What is the prescribed use of this information?",
      options: [
        "Inform better delegation briefs by clarifying scope upfront before sending",
        "Initiate a formal performance discussion with Omar about delivery reliability",
        "Reduce the number of delegations sent to Omar this quarter to improve statistics",
        "Update Omar's person entry with a RESTRICTED reliability flag"
      ],
      correctOption: 0,
      explanation: "The lesson is explicit: 'The Work Tracker surfaces reliability patterns that inform better delegation practice, not individual performance assessments.' Omar's pattern ('delivery lateness correlates with scope ambiguity, not capacity or reliability') points directly to a specific fix: write clearer scope in the delegation brief before sending. This is actionable information about the delegation process, not about Omar's performance. A performance discussion would misuse operational data as a management instrument. Reducing delegations punishes the delegator, not addresses the root cause. The person entry should not receive a reliability flag that misuses the sensitivity mechanism for behavioural observations.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "The Meeting Intelligence Agent's weekly audit flagged a recurring meeting as potentially replaceable with an async digest. What specific pattern triggers this recommendation?",
      options: [
        "The meeting has more than eight attendees regularly and runs over time",
        "The meeting prep brief is longer than the actual meeting duration",
        "Fewer than two decisions were made in the last four occurrences",
        "Two or more attendees have RESTRICTED sensitivity entries in Layer 2"
      ],
      correctOption: 2,
      explanation: "The lesson states: 'The Meeting Intelligence Agent flags any recurring meeting where fewer than 2 decisions were made in the last 4 occurrences, or where the meeting primarily delivers status updates.' The BankersAI workshop prep call was recommended for replacement with a written brief because 'no decisions made in last 4 occurrences, primarily status updates.' Status-only meetings that produce no decisions are candidates for async replacement. Attendee count, prep brief length, and participant sensitivity entries are not the criteria: the decision-to-meeting ratio is the diagnostic signal. The lesson also notes this is a recommendation, not a directive, relationship maintenance value must be considered.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "The weekly maintenance cadence runs Memory Keeper at 06:30 on Monday, Chief of Staff brief at 06:45, and digest at 07:00. Why must Memory Keeper run before the Chief of Staff brief?",
      options: [
        "The Memory Keeper's output is required to authenticate the Chief of Staff's session",
        "The Chief of Staff brief depends on current work.local.md context to be accurate",
        "The 06:45 brief will conflict with Memory Keeper's file write operations if simultaneous",
        "The digest at 07:00 requires the Memory Keeper to have cleared any stale terms first"
      ],
      correctOption: 1,
      explanation: "The lesson states the sequence 'is ordered by dependency, Memory Keeper runs first because the Chief of Staff's brief depends on current memory.' The week-ahead brief draws from work.local.md to surface Boulders, project priorities, stale delegations, and relationship considerations. If Memory Keeper maintenance has not run (flagging stale entries, proposing updates), the brief works from potentially outdated context. The sequencing is about data currency, not authentication, file conflict, or stale term clearing. If the order were reversed, brief before maintenance: the brief might miss that Dr. Sana Mirza's person entry needs updating or that a project status has not been refreshed in 10 days.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "The lesson describes the four agents as forming 'an information flow, not four independent systems.' Which agent is the final synthesis layer that produces the user-visible output?",
      options: [
        "Memory Keeper, because it maintains the source of truth for all other agents",
        "Work Tracker, because it owns the complete task and delegation lifecycle",
        "Meeting Intelligence Agent, because it captures decisions and actions",
        "Chief of Staff, because it synthesises all feeds into the digest and briefs"
      ],
      correctOption: 3,
      explanation: "The information flow diagram in the lesson shows: Work Tracker (06:50) → task snapshot → Chief of Staff. Meeting Intelligence → decisions + actions → Memory Keeper → Chief of Staff. Memory Keeper → updated work.local.md → Chief of Staff. The Chief of Staff is the synthesis layer at the end of every flow ; it consumes outputs from all three supporting agents and produces the user-visible artefacts (digest, week-ahead brief, week-close summary). The other agents are intelligence feeds, not output surfaces. Memory Keeper maintains context, Work Tracker tracks tasks, Meeting Intelligence captures meeting outputs, all feeding into Chief of Staff for synthesis and delivery.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "During the Lesson 14 smoke test, the executive dashboard output is graded C (needs significant work). What is the most likely source of this gap?",
      options: [
        "Layer 3 (projects) has vague or incomplete status entries",
        "The /agentic-office:schedule command has not been activated in this session",
        "The official plugin's dashboard.html is out of sync with TASKS.md",
        "The digest configuration section is missing from work.local.md"
      ],
      correctOption: 0,
      explanation: "The lesson identifies the most common C-grade sources for the executive dashboard: 'Layer 3 (projects not fully populated), agent_integrations.chief_of_staff.feeds_from (domain agents not listed), or digest/dashboard configuration (incomplete threshold or section settings).' A C-grade executive dashboard most directly traces to incomplete project entries, vague at_risk fields, missing milestone dates, unspecified RAG status rationale. The schedule command affects timing of automatic delivery, not the content quality of a manually triggered test. The official plugin's dashboard.html is a separate tool that does not feed the executive dashboard. The digest configuration affects digest output, not the progress-tracker dashboard.",
      source: "Lesson 14: The Complete Agentic Office"
    },
    {
      question: "The Lesson 14 completeness checklist requires at least 15 terminology entries in Layer 4. Why is this threshold higher than the 10-entry minimum recommended in Lesson 3?",
      options: [
        "The Chief of Staff's digest assembly fails below 15 terminology entries",
        "The smoke test commands require 15 entries to function without error",
        "Lesson 14 is a capstone exercise requiring higher standard for full integration testing",
        "The workplace-search command only indexes terminology sections with 15+ entries"
      ],
      correctOption: 2,
      explanation: "Lesson 3 recommends 'at least 10 entries to start' because it is the initial build lesson, enough to demonstrate the before/after improvement in output quality. Lesson 14 sets 15 as the completeness bar because it is the capstone integration exercise designed to test whether the full system works at a professional standard. By Chapter 39 Lesson 14, the user has had lessons 3-13 to accumulate terminology, and a well-configured agentic office should have substantially more than the initial minimum. The smoke test commands do not have technical minimums; they work on whatever is present. The Chief of Staff and workplace-search do not have entry count requirements; their output quality scales with content richness.",
      source: "Lesson 14: The Complete Agentic Office"
    },
    {
      question: "The four-frequency maintenance cadence distinguishes daily (automatic), weekly (manual review), monthly (audit), and quarterly (restructure). What is the user's primary role in the daily frequency?",
      options: [
        "Configuring new domain agent feeds and updating trigger event definitions",
        "Confirming Memory Keeper proposals and reviewing the digest and acting on flags",
        "Running the workplace-search command to check for new cross-domain risks",
        "Updating the chief_of_staff escalation_threshold_days based on recent patterns"
      ],
      correctOption: 1,
      explanation: "The daily cadence section states: 'Your role: confirm Memory Keeper proposals. Review digest. Act on flags.' The automatic operations (Work Tracker pull, digest delivery, Memory Keeper triggers, Meeting Intelligence prep) happen without intervention: the user's role is to confirm the proposals that require human judgment (Memory Keeper update accuracy), read the digest, and act on the flags it surfaces. Configuring agent feeds and triggers happens at the weekly or quarterly level, not daily. Running workplace-search is on-demand, not a scheduled daily activity. Threshold calibration is a quarterly restructure task.",
      source: "Lesson 14: The Complete Agentic Office"
    },
    {
      question: "The chapter's closing insight states: 'The intelligence is not in the agent. The intelligence is in the context the agent has access to.' What does this imply for practitioners who receive poor outputs from the agentic office?",
      options: [
        "They should switch to a more capable AI model with better reasoning",
        "They should add more skills to the agentic-office plugin for better coverage",
        "They should improve the specificity and currency of their work.local.md content",
        "They should increase the agent_integrations.chief_of_staff.feeds_from count"
      ],
      correctOption: 2,
      explanation: "The insight reframes where to invest when outputs are poor: not in the model or plugin, but in the context (work.local.md). 'The agent is the synthesiser; work.local.md is the memory.' A skilled synthesiser cannot produce a useful output from vague, stale, or incomplete input. Poor outputs trace to vague at_risk fields in Layer 3, generic communication notes in Layer 2, or missing terminology in Layer 4, not to insufficient AI capability. Switching models addresses reasoning capacity, not information gaps. Adding more skills changes the command surface, not the underlying context quality. Adding more feeds_from sources adds breadth but does not compensate for depth gaps in existing layers.",
      source: "Lesson 14: The Complete Agentic Office"
    },
    {
      question: "A professional sets up their agentic office completely in one day and never updates it again. After three months, what failure mode is most likely to emerge?",
      options: [
        "The plugins will require re-installation due to session expiry",
        "The agents will produce confidently wrong outputs from stale context",
        "The official plugin's TASKS.md will conflict with work.local.md project entries",
        "The escalation threshold will automatically reset to default values"
      ],
      correctOption: 1,
      explanation: "The lesson warns: 'An outdated work.local.md does not just produce less useful outputs ; it produces confidently wrong outputs, which are worse than no output at all.' After three months without updates, people's roles and priorities will have shifted, projects will have changed status or closed, and decisions will have been made that contradict recorded states. The system will continue to synthesise from this stale data with full confidence, producing authoritative-sounding but inaccurate digests, dashboards, and briefs. This is why the monthly audit and quarterly restructure are prescribed. Plugins do not expire. TASKS.md and work.local.md serve different layers and do not conflict by design. Escalation thresholds are YAML configuration and do not auto-reset.",
      source: "Lesson 14: The Complete Agentic Office"
    },
    {
      question: "The quick reference table maps /agentic-office:workplace-context to Lessons 3-5 and /agentic-office:workplace-search to Lessons 5 and 11. What is the functional distinction between these two commands?",
      options: [
        "workplace-context adds and queries individual layers; workplace-search searches across all four layers simultaneously",
        "workplace-context handles terminology; workplace-search handles people and projects",
        "workplace-context is read-only; workplace-search can write new entries to work.local.md",
        "workplace-context serves the custom plugin; workplace-search serves the official plugin"
      ],
      correctOption: 0,
      explanation: "workplace-context is the interface for adding, updating, or querying specific elements of work.local.md, adding a person entry, looking up a terminology definition, describing the organisation using what is known. workplace-search performs a cross-context search across all four memory layers simultaneously, returning results grouped by layer (project memory, meeting notes, people memory, terminology, task log). The distinction is point-query vs. cross-layer retrieval. Both commands handle all content types (terminology, people, projects); they are not domain-split. Neither is strictly read-only (workplace-context can write via natural language). Both belong to the custom agentic-office plugin.",
      source: "Lesson 15: Summary and Quick Reference"
    },
    {
      question: "The quick reference lists /agentic-office:executive-brief under Lessons 9, 11, and 12. What does this command's multi-lesson attribution indicate about its scope?",
      options: [
        "The command was introduced three times because it was redesigned between lessons",
        "It produces different output types depending on context: meeting prep, person/project context, and situation briefs",
        "It is a deprecated command that was replaced by more specific commands in later lessons",
        "It serves as the backup command when workplace-context is unavailable"
      ],
      correctOption: 1,
      explanation: "The executive-brief command appears across three lessons because it handles situation briefs of different types: in Lesson 9 (Meeting Intelligence) it generates meeting-specific pre-briefings; in Lesson 11 (Cross-Domain Intelligence) it supports person, project, and decision context briefs; in Lesson 12 (Chief of Staff) it is used for situation briefs that the Chief of Staff might prepare before escalation conversations. The multi-lesson attribution reflects the command's breadth; it is a general-purpose briefing tool whose application varies by context. It was not redesigned (the command was planned with this scope from the start), is not deprecated, and is not a fallback for workplace-context.",
      source: "Lesson 15: Summary and Quick Reference"
    },
    {
      question: "The chapter closes with: 'The goal was never to replace the people in your organisation. It was to give the people in your organisation an AI that actually knows where they work.' What design principle in Chapter 39 most directly embodies this goal?",
      options: [
        "The four-plugin architecture that separates domain agents from productivity agents",
        "The Memory Keeper's propose-then-confirm rule that keeps humans in the decision loop",
        "The work.local.md file that encodes organisational context as persistent structured memory",
        "The three-level escalation protocol that automates COO-level notifications"
      ],
      correctOption: 2,
      explanation: "The quote's core claim is that AI becomes useful when it 'knows where you work', meaning it has the organisational context that transforms generic output into colleague-quality output. work.local.md is the architectural embodiment of this: it encodes people, projects, terminology, culture, and priorities as persistent structured memory, making every subsequent AI output contextually grounded. The propose-then-confirm rule keeps humans in the loop on accuracy, important, but a safeguard rather than the primary embodiment. The escalation protocol automates escalation paths, useful but a specific feature. Chapter 39 uses two plugins (official + custom), not four. The central design principle is the persistent context architecture.",
      source: "Lesson 15: Summary and Quick Reference"
    },
    {
      question: "A user configures work.local.md's Layer 1 current_focus field as: 'AgentFactory (P1), Project Nighthawk (P2), BankersAI (P2).' How does the task-intelligence skill use this information when processing a brain dump?",
      options: [
        "It displays these projects as a header section above the task list",
        "It uses P1/P2 project status to elevate urgency of tasks connected to those projects",
        "It prevents tasks unrelated to these projects from appearing in the output",
        "It automatically marks tasks connected to BankersAI as P3 since it is listed last"
      ],
      correctOption: 1,
      explanation: "When the task-intelligence skill processes a brain dump, it reads project context from work.local.md and uses the P1/P2/P3 project priority to inform task classification. A task connected to AgentFactory (P1) inherits elevated urgency through criterion 3 of the five priority sorting criteria ('Does this task belong to a P1 project?'). In the worked example, Chapter 28 draft is flagged as high priority despite P2 task urgency 'because AgentFactory is the organisation's primary initiative.' Non-project tasks are not suppressed: the brain dump captures everything. BankersAI's P2 status comes from its explicit Layer 3 priority field, not from its listing position in Layer 1's current_focus.",
      source: "Lesson 6: Task Intelligence"
    },
    {
      question: "A delegation confirmation arrives within the 24-hour window but with a clarifying question about format. According to the quality checklist, which item was missing from the original brief?",
      options: [
        "Item 2, named person with single accountability",
        "Item 3, specific deadline (date and time)",
        "Item 5, format specified precisely",
        "Item 7, follow-up mechanism defined"
      ],
      correctOption: 2,
      explanation: "Checklist Item 5 requires that the format be specified precisely: 'Slides/doc/data/email/verbal, specific. Data file and slides-ready charts are different deliverables.' A clarifying question about format means the original brief did not tell the delegatee whether to produce a slides deck, a data table, a written document, or raw exports. The delegatee confirmed they received the task (so Item 2, named person, and Item 7, follow-up, are satisfied: a confirmation was sent). The deadline is presumably specified since no date question was raised. The confirmation itself satisfies Item 7's first step. Format ambiguity is the specific gap that generated the unnecessary clarification cycle.",
      source: "Lesson 7: Delegation as a Discipline"
    },
    {
      question: "Omar's analytics ROI brief is due Monday 24 March. Today is Wednesday 19 March. Under the Work Tracker's in-progress check-in schedule for tasks under five days, when should the midpoint check-in message be sent?",
      options: [
        "Friday 21 March (midpoint between 17 March delegation and 24 March deadline)",
        "Thursday 20 March (one day after midpoint to account for weekend)",
        "Monday 24 March morning (same day as delivery to confirm status)",
        "Wednesday 19 March (immediately after delegation was confirmed)"
      ],
      correctOption: 0,
      explanation: "The check-in schedule for tasks under five days is 'once, at midpoint.' The delegation was confirmed (T+0 approximately 17 March), and the deadline is 24 March: a 7-day window, which is technically under the 5-14 day bracket for weekly check-ins, but the lesson's worked example places the midpoint check-in on 20 March (Wednesday midpoint of the 17-24 March span). Friday 21 March represents the midpoint between confirmed start (17 March) and deadline (24 March). The work-sample language says 'midpoint check-in due Tuesday' in the week-ahead brief context, which reflects the specific delegation date. The key principle is midpoint, not day-before, not same-day, not immediate post-confirmation.",
      source: "Lesson 13: The Supporting Agents"
    },
    {
      question: "The chapter describes the agentic office as producing 'the emergent result of four agents working together with a comprehensive work.local.md.' What does 'emergent' mean in this architectural context?",
      options: [
        "The system produces outputs that exceed what any single agent could produce alone",
        "The agents can self-modify their configuration based on usage patterns",
        "The plugins install automatically when work.local.md reaches a critical size",
        "The Chief of Staff spawns new sub-agents as task complexity increases"
      ],
      correctOption: 0,
      explanation: "Emergence in this context means the whole is greater than the sum of parts: the Digital Chief of Staff is not a single configured agent but the result of four agents, Chief of Staff, Memory Keeper, Meeting Intelligence, Work Tracker: each specialising in a function, collectively producing an operational intelligence that none could produce alone. Work Tracker provides real-time task data. Memory Keeper keeps context current. Meeting Intelligence captures decisions. Chief of Staff synthesises all three into a coherent briefing. The emergent property is colleague-quality operational awareness. Agents do not self-modify their configuration, auto-install, or spawn sub-agents: the architecture is defined by the user through work.local.md.",
      source: "Lesson 15: Summary and Quick Reference"
    },
    {
      question: "Project Nighthawk's escalation letter was sent Wednesday 19 March. Should the project's RAG status change from RED to AMBER on Thursday, before any facility response is received?",
      options: [
        "Yes, sending the letter constitutes a meaningful action that reduces the risk level",
        "Yes: the hard blocker is resolved once the escalation letter is dispatched",
        "No: the status stays RED until the facility responds and the stall is resolved",
        "No: the status should move to GREEN because all available action has been taken"
      ],
      correctOption: 2,
      explanation: "The milestone-slip rule states: 'Never show GREEN for a project where a milestone has slipped without explicit acknowledgement, even if the team is working on a recovery plan.' Sending a letter is a recovery action, not a resolution. The facility agreement stall remains a hard blocker until the facility responds and negotiations resume. Moving to AMBER would misrepresent the project's actual state: the Q3 risk still exists because the facility has not responded. Sending a letter is action, not outcome. The project moves from RED (hard blocker) toward AMBER (risk being addressed) only when the blocker is genuinely resolved or a concrete positive response is received, and only toward GREEN when milestones are back on track.",
      source: "Lesson 10: The Executive Dashboard"
    },
    {
      question: "The /agentic-office:setup command creates work.local.md as an 'empty four-layer configuration file structured for your professional context.' Why is the template structure valuable even when all fields are blank?",
      options: [
        "The empty template allows the official plugin's /productivity:start to read the file structure",
        "The field structure tells the user exactly what information to gather before Lessons 3-5",
        "The empty file prevents the custom plugin from generating errors on first activation",
        "The template automatically generates Layer 1 content from the session's CLAUDE.md"
      ],
      correctOption: 1,
      explanation: "The lesson describes the empty template as a 'preview of the next three lessons': a map that shows the reader exactly what information they need to gather and organise in Lessons 3, 4, and 5. Fields like working_style, decision_making, communication_preference, and current_focus in Layer 1 tell the user precisely what to write down; person entry fields like communication and sensitivity tell them what to observe about colleagues. The structure is the instruction set for building the intelligence layer. The empty file does not interact with the official plugin (different plugins, different files). The template does not prevent errors from blank content, skills simply return limited results when context is absent. Layer 1 is not auto-generated from CLAUDE.md.",
      source: "Lesson 2: Two Plugins, One System"
    }
  ]}
  questionsPerBatch={18}
/>
