### Core Concept

The daily digest compresses 30-60 minutes of manual morning information gathering into a 5-minute read by assembling a structured briefing from your calendar, project memory, delegation log, and external sources — the difference between starting the day with clarity and spending the first hour catching up.

### Key Mental Models

- **Briefing vs Status Report**: A digest selects the 5 most important things you need to know today; a status report covers everything happening. Length is a failure mode — if it exceeds one page, items are being included that belong in the dashboard or task list, not the morning brief.
- **Tone as Cognitive Work**: Briefing voice ("Nighthawk has been quiet for 10 days — escalation today, not tomorrow") delivers interpretation ready to act on. System voice ("Status: no update. Action: escalate.") forces the reader to decode, interpret, and then decide. The format determines how much work the reader has to do.
- **Day-of-Week Variants**: Monday is planning mode (add This Week's Critical Path and Open from Last Week); Friday is closing mode (replace week-at-a-glance with Week Close: completed, carries forward, set up for Monday). Different cognitive states require different digest structures.

### Critical Patterns

- Configure the digest in `work.local.md` with schedule, sections, `critical_path_items` limit, and `escalation_threshold` before generating
- Pull from a priority-ordered source stack: `work.local.md` is always available; calendar, email, and Slack require MCP configuration and are optional — the digest works without them
- Apply a hard limit of 5 items in the critical path section; more than 5 means priorities need reclassifying, not listing
- Generate with `/agentic-office:digest`; review against the one-page quality check before treating the output as production-ready

### Common Mistakes

- Including everything due this week in the critical path — only items where a slip today has downstream consequences belong there; the rest go in "This Week at a Glance"
- Treating a longer digest as more thorough — length signals misconfiguration; items exceeding one page belong elsewhere in the system
- Skipping the weekly priorities reminder — daily urgency reliably hijacks weekly importance; the reminder is what keeps the digest anchored to what actually matters

### Connections

- **Builds on**: work.local.md configuration (Lesson 3), delegation tracking (Lesson 7), task intelligence priorities (Lesson 6)
- **Leads to**: Meeting Intelligence (Lesson 9), Executive Dashboard (Lesson 10)
