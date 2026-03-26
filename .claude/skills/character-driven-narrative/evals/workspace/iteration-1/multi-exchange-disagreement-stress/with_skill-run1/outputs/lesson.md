<!-- Narrative fragment: Multi-exchange disagreement (inheritance vs. composition for permissions) -->
<!-- Chapter 21, Part 2 | Density: 45% | Mentor phase: Collaborator | Emotional arc: Grit/Determination -->
<!-- Pattern 6 (Multi-Exchange Disagreement): 5 exchanges before resolution -->

James had the class hierarchy sketched on paper before Emma sat down. Three boxes, two arrows, clean lines. "I think inheritance is the way to go for the permissions system," he said, sliding the notebook across the table. "`User` at the top. `Admin` and `Viewer` extend it. One line each."

Emma studied the diagram. "What happens when you need a `Contributor` who can edit documents but not manage users?"

"Third subclass. `Contributor` extends `User`, gets an `edit_documents` method." He was already typing. "Look, it's three classes, barely twenty lines. This is the simplest approach."

"Try it." Emma leaned back. "Add a `Guest` role while you're at it. View-only, no account required."

James typed for two minutes. `Guest` inherited from `User`, but `User` had `change_password` and `update_profile` baked in. He overrode both to raise `NotImplementedError`. Then `Admin` needed everything `User` had plus `manage_users`, but `Contributor` needed `edit_documents` without `manage_users`, and both shared `view_dashboard`, which `Guest` also needed but through a completely different authentication path.

"Okay, I have four overrides in `Guest` just to disable things it should never have had." He frowned at the screen. "But that's just because I designed the base class wrong. If I move the shared stuff into `User` and keep `Guest` thinner..."

"So redesign it. I'll grab coffee." Emma picked up her mug and left.

James restructured. He pulled `change_password` and `update_profile` out of `User` into `AuthenticatedUser`, then had `Admin` and `Contributor` extend `AuthenticatedUser` while `Guest` extended `User` directly. Cleaner. He added `edit_documents` to `Contributor`. Then he realized `Admin` also needed `edit_documents`. He pulled it up into `AuthenticatedUser`, but now `Viewer`, who was supposed to be read-only, inherited editing capability.

He stared at the screen. Four classes, two layers of inheritance, methods leaking into roles that should never have them. Every fix created a new leak somewhere else.

When Emma came back, James had his arms crossed. "I know what you're going to say."

"What am I going to say?"

"That inheritance is wrong here." He exhaled. "But I still don't see why. The concept makes sense: an Admin IS a User. That's textbook."

Emma sat down. "Draw me the permissions as a grid. Roles on one axis, capabilities on the other."

James sketched it out. Admin: manage users, edit documents, view dashboard. Contributor: edit documents, view dashboard. Viewer: view dashboard. Guest: view dashboard, limited.

"Hang on." He looked at his grid, then back at his class hierarchy. "The grid is flat. Every role is just a different combination of the same capabilities. But my class tree forces a parent-child relationship where there isn't one. A `Contributor` isn't a kind of `Admin` with fewer powers. They're just... different bundles."

"So what holds the bundle?"

"Wait, so basically..." James paused. "Each role gets a `permissions` object. A set, or a list. `Admin` gets `{manage_users, edit_documents, view_dashboard}`. `Contributor` gets `{edit_documents, view_dashboard}`. No inheritance at all. Just data."

He rebuilt it. A `Role` class with a `permissions` attribute. Four instances, each with a different set. Checking access was one line: `if "edit_documents" in user.role.permissions`. Adding a new role meant adding a new set, not redesigning a class hierarchy.

"That took me three minutes," James said. "The inheritance version took twenty and it was still broken."

Emma almost smiled. "The hierarchy looked simpler at the start."

"It was simpler at the start. It fell apart the moment I had more than two roles." He looked at the composition version. "I wouldn't have trusted this approach if I hadn't watched inheritance collapse first. It felt like giving up. Turns out it was just picking the right tool."

"That's a pattern worth remembering. IS-A relationships map to inheritance. HAS-A relationships, where objects combine capabilities, map to composition." Emma pointed at his permissions grid. "Your grid told you the answer before your code did. Flat combinations, not nested hierarchies."

James pinned the grid next to his monitor. He had a feeling he would need it again.
