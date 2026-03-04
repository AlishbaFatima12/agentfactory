### Core Concept

Three exercises apply AI agents to assurance services: building a full external audit programme (converting SOX-oriented plugin output to ISA-compliant substantive procedures), deploying continuous fraud detection monitoring (designing rules, calibrating escalation thresholds, scheduling automated scans), and producing an internal audit report from working papers (classifying findings using the 5-C structure and evaluating management response adequacy).

### Key Mental Models

- **SOX Control Tests vs ISA Substantive Procedures**: SOX control tests evaluate whether a specific internal control is operating effectively; ISA substantive procedures test whether a financial statement balance is materially correct -- the /sox-testing command produces control tests, and the professional must convert these to the correct framework for their engagement.
- **Detection Sensitivity vs Alert Fatigue**: Fraud detection rules must balance catching genuine fraud against generating so many false positives that reviewers stop paying attention -- threshold calibration is a professional judgment requiring business context, not a technical setting.

### Critical Patterns

- The /sox-testing command produces technically competent output for the wrong framework when applied to an ISA external audit -- recognising this mismatch and directing the agent to produce substantive procedures instead is the core professional skill tested in Exercise 15.
- The 5-C finding structure (Condition, Criteria, Cause, Consequence, Corrective action) is the industry standard for internal audit reporting -- the agent can draft findings reliably, but risk classification (Critical/High/Medium/Low) and management response adequacy assessment require professional judgment.
- Evaluating whether a management response actually addresses the root cause -- rather than accepting it at face value -- is where the internal auditor adds the most value beyond what the agent can produce.

### Common Mistakes

- Assuming SOX testing and ISA external audit procedures are interchangeable -- they serve fundamentally different purposes (management's internal assessment vs independent external assurance) and produce different types of evidence.
- Accepting the agent's risk classification as final without applying professional judgment -- borderline cases between High and Critical require understanding the organisation's risk appetite and the specific consequences of each finding.

### Connections

- **Builds on**: Lesson 4's assurance domain analysis, Lesson 7's /sox-testing command, and Lesson 10's audit methodology extension.
- **Leads to**: Lesson 15's annual audit cycle capstone that runs planning, fieldwork, and completion across three sessions.
