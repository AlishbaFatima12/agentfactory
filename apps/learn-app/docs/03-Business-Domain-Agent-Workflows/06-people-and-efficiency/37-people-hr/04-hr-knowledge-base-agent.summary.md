# The HR Knowledge Base Agent — Summary

## Key Concepts

- **Type 1 query (policy)**: Has a written, policy-governed answer — agent answers directly with source citation and escalation contact
- **Type 2 query (individual situation)**: Requires HR judgment about a specific employee's circumstances — agent escalates immediately to named HR contact
- **Warm handoff protocol**: Escalation responses that are empathetic, name a specific person, provide contact details, and encourage the employee to reach out
- **Knowledge base configuration**: The FAQ database from Lesson 3 becomes the agent's knowledge source — accuracy of the FAQ determines accuracy of the agent
- **Weekly report cycle**: The agent generates a report showing query volume, top categories, escalation patterns, and knowledge gaps — the feedback loop that keeps the knowledge base current

## Skills Practised

- `knowledge-base-agent` (deploy from hr-operations plugin): Deploy and configure for 24/7 employee self-service with query classification and escalation

## Key Takeaway

The most important design decision for an HR knowledge base agent is not what it answers — it is what it refuses to answer. Every individual situation gets a warm handoff to a named HR contact, every time, without exception. This boundary is what makes the agent safe to deploy.

## Next

→ [Lesson 5: Onboarding — The First 90 Days](./05-onboarding-first-90-days.md)
