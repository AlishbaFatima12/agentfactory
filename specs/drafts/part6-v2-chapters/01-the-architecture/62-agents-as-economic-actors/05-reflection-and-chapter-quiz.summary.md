### Core Concept

The chapter's foundational argument is that economic participation infrastructure must be built at the foundation, not added later. The Resource Manager starts in pass-through mode, indistinguishable from a human-allocated factory, but makes future self-provisioning a single configuration change. This lesson crystallizes that argument through James's reflection, then positions Chapter 62 within the three-frame architecture: the Two-Layered Model (Ch 61) governs structure, Economic Actors (Ch 62) governs what infrastructure to build into that structure, and the Agent Maturity Model (Ch 63) governs when each piece gets built.

### Key Mental Models

- **The Three Frames Are Complementary**: They are not alternative architectures. Each frame answers a different question about the same factory: who governs (structure), what to build into it (infrastructure), and what sequence to follow (development roadmap).
- **Invisible Until Needed**: Foundational decisions like resource tracking are invisible in the code until you need them. When you need them and they are not there, you are rewriting.
- **Near-Zero vs. Four Months**: Building the Resource Manager at design time is near-zero cost. Retrofitting it into a running factory (threading it through every component, adding audit logging to every acquisition) is four months of work, validated by James's logging retrofit experience.

### Critical Patterns

- The chapter exists before Chapter 63 because the decision to track resources must be made at the foundation, before the maturity model determines the development sequence
- The three frames are used together in Chapter 64: the Factory Blueprint template includes economic participation points as a design field, making budget infrastructure decisions explicit entries in the architecture
- James completes four lessons without writing a line of code, but makes architectural decisions that affect every chapter from Ch 62 to Ch 90

### Common Mistakes

- Treating the three frames as ranked by importance rather than as complementary lenses (each frame answers a question the others cannot)
- Assuming "close to zero" cost at design time is an exaggeration (the lesson's concrete comparison is four months of engineering work for the retrofit vs. one architectural decision made upfront)

### Connections

- **Synthesizes**: Ch 62 L1-L4 (spending envelope, self-provisioning, budgets-not-permissions, participation points)
- **Positions**: Ch 62 within the three-frame architecture alongside Ch 61 and Ch 63
- **Leads to**: Ch 63 (agent maturity model: five development phases, how factories grow from idea to production)
- **Used in**: Ch 64 (Factory Blueprint includes economic participation as a design field)
