### Core Concept

The capstone applies all chapter patterns at once. The Candidate Summarizer skill calls four MCP tools in sequence, guards every call, and returns a structured summary regardless of how many tools fail. Building the spec before any code forces explicit thinking about tool dependencies, failure branches, and recommendation thresholds. The completed checkpoint inventory closes Phase 2: Incubate.

### What the Build Requires

The summarizer assembles four data sources into one decision-ready output. `parse_cv` provides the candidate profile. `score_candidate` produces the match score (normalized to 0-100). `extract_skills` delivers the normalized skills list for alignment comparison. `get_template` supplies the job template's competency areas to identify gaps. The recommendation (`proceed`/`hold`/`reject`) is derived from score and alignment data, not from a tool call.

### The Graceful Degradation Matrix

The spec requires explicit planning for each single-tool failure. If `parse_cv` fails, the summary cannot populate profile, score (which depends on `cv_data`), or skill alignment; only a generic template can be returned. If `extract_skills` fails but the other three succeed, the summary includes profile and score but marks skill alignment as unavailable. The graceful degradation matrix in the spec becomes the branching logic in the implementation.

### Checkpoint Inventory

All four HireFlow FTE skills now have documented MCP tool access:

- Job Spec Writer: `list_templates`, `get_template`, `validate_job_spec`
- Resume Screener: `parse_cv`, `score_candidate`, `extract_skills`
- Interview Q Generator: `get_template`, `parse_cv`, `extract_experience`
- Candidate Summarizer: `parse_cv`, `score_candidate`, `extract_skills`, `get_template`

A skill is "Connected" when it executes without unhandled exceptions, receives responses from every listed tool, and returns output matching its documented return type.

### Common Mistakes

- Writing the spec after the implementation rather than before (the spec describes the branching logic; writing it after means the implementation defined the behavior instead of the design).
- Returning `{"error": "failed"}` with no other data when a tool fails instead of including data from tools that succeeded.
- Omitting the `isError` guard on any of the four tool calls; one missing guard can collapse the summarizer under load.

### Connections

- **Builds on**: Chapter 67 Candidate Summarizer skill definition; Chapter 68 simulation scenarios become test cases; Chapters 69-70 MCP tools; Lessons 4-7 guard patterns and graceful degradation
- **Leads to**: Chapter 72 Agent SDKs, where the `summarize_candidate` function becomes a tool that an SDK agent orchestrates with memory and planning
