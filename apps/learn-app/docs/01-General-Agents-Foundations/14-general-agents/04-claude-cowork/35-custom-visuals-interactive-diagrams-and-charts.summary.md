### Core Concept

Custom visuals let Claude generate interactive diagrams, charts, and visual elements directly in web or desktop chat conversations; the output is live HTML you can click, hover, and manipulate, not a static image.

### Key Mental Models

- **Generate, Interact, Iterate, Export**: The core workflow is a cycle. Generate a visual from a natural-language prompt, interact with it to verify correctness, iterate with follow-up prompts to refine, and export before closing the conversation.
- **Ephemeral by Default, Persistent by Choice**: Custom visuals live only inside the conversation unless you explicitly download (SVG/HTML) or save as a persistent artifact. Forgetting to export means losing the work.
- **Chat for Visuals, Cowork for Files**: Custom visuals do not render in Cowork sessions. The practical pattern is to generate and refine visuals in Claude chat, then export the files and use them as inputs for Cowork file operations.
- **Specificity Drives Quality**: Vague visual requests ("make it interactive") produce unpredictable results. Naming exact behaviors ("clickable nodes revealing 2-sentence descriptions"), color hex codes, and layout preferences gives Claude clear targets to build toward.

### Critical Patterns

- Always export visuals before iterating further; if a refinement goes wrong, you can revert to the exported version.
- Use Claude Opus for complex multi-component visualizations; Sonnet handles simpler diagrams well.
- Iterate in small steps (one or two changes per prompt) rather than requesting five changes simultaneously.
- Ask Claude to explain its visual after generation to catch misinterpretations before investing in refinement.

### Common Mistakes

- Assuming custom visuals work in Cowork sessions, mobile apps, or API responses (they render only in web chat and Claude Desktop).
- Treating the first generated visual as final instead of refining through follow-up prompts.
- Confusing custom visuals (ephemeral, inline) with artifacts (persistent, shareable from the start).
- Closing a conversation without downloading or saving the visual.

### Connections

- **Builds on**: Cowork practical workflows (Lesson 27), understanding of chat vs. Cowork capabilities
- **Leads to**: Strategy and assessment section (Section E), where students evaluate when AI tools are the right choice
