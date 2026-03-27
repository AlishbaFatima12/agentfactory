### Core Concept

A human-allocated factory scales with human attention: every new capability and every edge case requires a person to configure the system. A self-provisioning factory scales with policy: write one rule covering a category of acquisitions, and every agent that hits that condition resolves it autonomously. This lesson makes the competitive argument concrete. The architectural decision is not about whether your agents will buy things today. It is about whether your factory is structurally capable of adapting without waiting for a human to notice something went wrong.

### Key Mental Models

- **Consuming vs. Sourcing**: Human-allocated factories consume only what humans pre-configure. Self-provisioning factories can source resources dynamically within policy boundaries. The difference is policy-based governance versus per-transaction approval.
- **Outcome Contract**: An agreement that specifies what the factory must deliver, not which resources it must use. It decouples the goal from the implementation, making dynamic resource sourcing possible.
- **Trust Infrastructure**: The three missing systems needed before autonomous economic participation can scale: payment rails (agent-native transaction channels), liability frameworks (who is responsible for a bad purchase), and verification systems (audit logs, receipt validation, anomaly detection). Building blocks exist; standardized systems do not yet.
- **Policy Scales; Per-Transaction Approval Does Not**: One approved policy for translation services under $0.05 per page handles every foreign-language CV forever, without a human in the loop.

### Critical Patterns

- The Resource Manager in diagram two starts in pass-through mode (functionally identical to human allocation) but makes future self-provisioning a one-configuration-change upgrade rather than a rewrite
- An outcome contract shifts governance from resource specification to outcome specification; the factory determines how to achieve the outcome within its resource budget
- All three trust infrastructure components must exist together; without payment rails, liability frameworks, and verification systems simultaneously, autonomous economic participation cannot scale safely

### Common Mistakes

- Treating "impossible for now, and we add it later" as a low-cost decision (see the four-month logging retrofit analogy; adding a Resource Manager later requires rewiring every FTE's resource access)
- Assuming self-provisioning means unlimited agent authority (it means policy-governed authority; the spending envelope is still enforced)
- Conflating the Resource Manager's absence with safety (a factory that goes silent at every edge case is not safer; it is just less useful)

### Connections

- **Builds on**: Ch 61 Two-Layered Model (Factory Layer operates within governance boundaries; self-provisioning extends those boundaries to include resource acquisition)
- **Builds on**: Ch 62 L1 (spending envelope concept)
- **Leads to**: Budgets, Not Permissions (Lesson 3) — the specific components (resource budgets, spending envelopes, audit trails) that make self-provisioning architecturally concrete
