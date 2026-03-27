### Core Concept

Writing a skill and testing a skill are different activities. A skill that reads well may still produce incorrect outputs when given real inputs. James discovers this the hard way: wiring untested skills directly to MCP infrastructure means debugging three failure sources at once (skill logic, MCP configuration, transport layer) with no way to isolate which one broke.

### Key Mental Models

- **Test the intelligence before you build the infrastructure**: Run skills in conversation, in isolation, before a single line of production code exists. Isolation is not optional; it is the only way to debug reliably.
- **Reading vs. execution**: Reading a skill confirms its instructions look right. Running it with real inputs reveals whether those instructions produce correct behavior. These are different questions requiring different methods.
- **The confidence gap**: Skills handle "happy path" inputs (clear matches, clear rejects) adequately. The agent earns its value on messy, edge-case inputs. Those are exactly the inputs untested skills cannot handle.
- **Validation layers in sequence**: The Incubate phase stacks validation: concept paper (knowledge), Domain Mastery Gate (understanding), skill writing (extraction), and simulation (execution). Skipping simulation means the extraction has never been tested.

### Critical Patterns

- Layered infrastructure (skill + MCP + transport) creates tangled failure modes; isolation prevents that tangle
- The boundary between Incubate and Build Specialist requires validated skills, not merely written ones
- The fix-and-retest loop: simulate, find the gap, revise, run again until the skill consistently passes

### Common Mistakes

- James's mistake: assuming well-written skills are validated skills, then wiring them to production infrastructure
- Treating one test run as sufficient; edge cases are where the agent earns its value, and those require deliberate scenario design
- Skipping isolation: testing in a full stack cannot tell you which layer caused the failure

### Connections

- **Builds on**: Ch 67 skill writing, Ch 63 Agent Maturity Model (Incubate phase), Ch 66 Domain Mastery Gate (prior validation layer)
- **Leads to**: The simulation protocol (Lesson 2): a three-step method for systematic skill validation
