# Persistent Agents: Onboarding Orchestrator and Policy Maintenance: Summary

## Key Concepts

- **Event-triggered agents**: Activated by HRIS events (new hire record, resignation): the onboarding orchestrator and offboarding-knowledge-agent
- **Scheduled agents**: Activated on a fixed cadence (monthly, first Monday): the policy maintenance agent
- **Hybrid agents**: Both scheduled and event-triggered: the policy maintenance agent runs monthly AND responds immediately to statutory rate changes
- **Onboarding orchestrator timeline**: T-14 → T-7 → T-3 → Day 1 → Day 10 → Day 30 → Day 60 → Day 90 with three alert triggers (T-3 critical items, Day 10 training, Day 60 satisfaction threshold)
- **Policy maintenance agent**: Five monthly checks (version currency, statutory rates, document consistency, link validity, FAQ gaps) plus immediate statutory rate change alerts

## Skills Practised

- `onboarding-orchestrator` (hr-operations plugin): HRIS-triggered T-14 to Day 90 new hire workflow with alert escalation
- `policy-maintenance-agent` (hr-operations plugin): Monthly policy audit + event-triggered statutory rate monitoring

## Key Takeaway

Persistent agents are the HR equivalent of a continuous audit function; they catch the things humans miss because humans are busy with everything else. The T-3 pre-boarding alert prevents a broken Day 1. The statutory rate alert prevents employees reading incorrect entitlement figures for three months. These agents do not replace human judgment; they ensure that the processes requiring human judgment actually reach a human with enough time to act.

## Next

→ [Lesson 13: People Analytics and Agent Operations](./13-people-analytics-agent-operations.md)
