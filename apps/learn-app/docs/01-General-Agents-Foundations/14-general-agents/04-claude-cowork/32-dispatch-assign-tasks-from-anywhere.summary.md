### Core Concept

Dispatch is a persistent conversation thread in the Cowork tab that lets you assign tasks to Claude from your phone (or any device) and have them execute autonomously on your desktop computer, turning Claude into an AI employee you can direct from anywhere.

### Key Mental Models

- **Fire-and-Forget Delegation**: Dispatch is not a remote desktop; it is task delegation. You describe the outcome, and Claude handles the implementation on your desktop while you do something else.
- **Persistent Thread, Not Sessions**: Unlike regular Cowork sessions that start fresh, Dispatch maintains a single continuous conversation. Claude remembers prior tasks, file locations, and your preferences across interactions.
- **Automatic Task Routing**: Claude decides whether a task is development work (routes to a Code session) or knowledge work (stays in Cowork). You describe what you want; Claude picks the right environment.
- **Mobile as Command Channel**: Your phone becomes the interface for directing desktop work. Push notifications close the loop: you send a task, get notified when it finishes or needs approval.

### Critical Patterns

- Always include specific input sources, output format, and save location in Dispatch messages so Claude can execute without follow-up questions.
- Test with low-stakes tasks (creating a text file) before sending tasks that modify important data.
- Use the approval workflow: keep permissions set so Claude asks before destructive operations like deletion.
- Dispatch inherits all your Cowork capabilities: plugins, connectors, file access, and computer use (if enabled).

### Common Mistakes

- Assuming Dispatch works when the desktop is asleep or the Claude app is closed (the desktop must be awake and running).
- Sending vague tasks ("handle my emails") instead of specific ones ("summarize unread emails from this week and list action items in a file called email-summary.md").
- Expecting multiple parallel Dispatch threads; there is only one continuous conversation.
- Forgetting that Dispatch actions are real: files created, moved, or deleted from your phone affect your actual file system.

### Connections

- **Builds on**: Cowork setup and file access (Lesson 26), plugins and connectors (Lesson 29), practical workflow design (Lesson 27)
- **Leads to**: Computer Use in Cowork (Lesson 33), where Claude interacts with your screen directly
