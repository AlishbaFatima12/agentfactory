### Core Concept
PRIMM-AI+ extends the five-stage PRIMM framework (Predict, Run, Investigate, Modify, Make) with structural safeguards that prevent AI from becoming a crutch: AI-free checkpoints reveal whether you truly understand or merely recognize explanations, mastery gates require artifacts before advancing (written predictions, recorded comparisons, how-not-what explanations, specifications), and stage-specific AI permissions define exactly when AI may generate, explain, or execute versus when it must stay silent to preserve the learning that each stage produces.

### Key Mental Models
- **AI Permissions Table**: Explicit rules for what AI may and must not do at each PRIMM stage to distinguish partner interactions (student learns something new) from crutch interactions (student produces output without understanding).
- **Mastery Gates**: Formal transition requirements between stages that prevent skipping ahead before readiness—written prediction before Run, recorded comparison before Investigate, how-explanation before Modify, written spec before Make.
- **Mandatory Trace Artifacts**: Investigation must produce something visible (trace table, plain-English explanation, or failure note documenting confusion) to convert vague "I think I understand" into demonstrable comprehension.
- **AI-Free Checkpoints**: Diagnostic moments where AI is closed to reveal whether understanding has been internalized—Predict is always AI-free, Make begins AI-free, other stages allow AI only after first independent attempt.
- **Confidence Scoring**: Rating prediction certainty 1-5 before each Predict stage reveals false confidence and calibrates self-awareness.

### Key Facts
- **Predict stage AI restriction**: AI may generate code samples but must not explain the code before student predicts—explanations destroy the mental model building that prediction creates.
- **Investigate verification rule**: Every AI explanation must be tested by running code yourself—AI can be confident and wrong, verification instinct transfers directly to professional practice.
- **Modify before Make principle**: Modification is easier on the brain than creation because it provides working reference, known structure, and safety net that creation lacks.
- **Three trace artifact options**: Trace table showing variable values after every line, plain-English explanation in own words, or failure note documenting where comprehension broke down.
- **PRIMM-AI+ is tool-agnostic**: Works the same with Claude Code, Cursor, GitHub Copilot, or any AI coding assistant—the method is constant, the tool is variable.

### Critical Patterns
- Rephrase Wrong column prompts from AI Permissions Table into Right column versions when you catch yourself—"What will this code print?" becomes "Generate a short Python program. Do not explain the code."
- Write your own explanation first before asking AI investigation questions—without this AI-free first attempt, you skip the comparison step that builds understanding.
- After any AI interaction, apply Rule 5 test: Do you understand more than before (partner) or have working code but same understanding (crutch)?
- When stuck during Modify, ask for minimal hint pointing to specific lines, not complete rewrite—"What am I missing?" not "Add this feature for me."
- Produce Make specification without AI, then bring AI back only for spec review and completed code review—AI writing the solution produces output without learning.

### Common Mistakes
- Asking AI to explain code during Predict stage destroys the mental model building—you are reading an explanation, not constructing understanding.
- Proceeding to next stage without meeting mastery gate—vague "I get it" without written artifact means confusion carries silently into later stages.
- Trusting AI explanations without testing them by running code yourself—AI can be confident and wrong, verification must become instinct.
- Letting AI write modifications or Make solutions—the moment AI writes the code, you are producing output without doing the thinking the stage requires.
- Skipping confidence scoring on predictions—false confidence goes undetected without numerical self-assessment before each Predict.

### Connections
- **Builds on**: PRIMM five-stage framework from Lesson 1 (Predict, Run, Investigate, Modify, Make), Spec-Driven Development from Chapter 5 (spec before code principle), and recognition that AI assistants change the partner but not the method.
- **Leads to**: Lesson 3 introduces self-assessment tools (verification ladder, error taxonomy, chapter-end rubric) and professional connections showing how predict-then-verify habits scale from exercises to production systems.
