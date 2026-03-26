<!-- Narrative fragment: Multi-Exchange Disagreement — Inheritance vs. Composition for Permissions -->
<!-- Chapter 21 | Part 2 (45% density) | Mentor Phase: Collaborator | Emotional arc: Grit/determination -->

James had been staring at the class hierarchy for ten minutes. He turned his laptop toward Emma. "I think inheritance is the right call here. Look: `class Admin(User)`, `class Viewer(User)`. Clean, simple, one line each."

Emma leaned back. "Okay. Add a `TeamLead` that can edit their own team's projects but not anyone else's."

James typed for a minute. He added `class TeamLead(User)` and started overriding the `can_edit` method. "Done. I check if the project belongs to their team inside the override. Works fine."

"Now add an `ExternalAuditor`. They can view financial reports but nothing else. No editing, no creating, no deleting."

James frowned but kept typing. `class ExternalAuditor(User)`, then he started overriding methods: `can_create` returns `False`, `can_delete` returns `False`, `can_edit` returns `False`, and a custom `can_view_financials`. He paused. "Okay, so I'm overriding four methods just to shut off things the base class assumes everyone can do. That feels backwards, like I'm starting with full access and then ripping pieces out."

"What happens if you add a `can_export` method to `User` next month?"

"Every subclass that shouldn't export needs another override." James sat with that for a second. "So every new capability means I have to touch every restricted role. That's like my old company's org chart: every time they added a new approval step, they had to update the permissions for thirty different job titles. It took weeks."

"Draw it," Emma said. "Two boxes. One is the inheritance tree. One is a permissions object."

James pulled out a notebook. On the left he sketched the tree: `User` at the top, five subclasses branching down, each with a growing list of overrides. On the right he drew a single `Role` box containing a set of permission flags: `can_edit`, `can_view`, `can_export`, each just `True` or `False`.

"Hang on. If I give each user a permissions object instead, then `TeamLead` doesn't inherit from `User` at all. It just holds a permissions set that says what it can do. Adding `can_export` means I update the permissions definition in one place, and every role already has a default."

"And removing a permission?"

"Same thing. One place." He looked at the inheritance tree he'd drawn. Five classes, each coupled to every method on the base. Then at the composition sketch. One flat structure, each role defined by what it holds, not what it overrides. "The inheritance version works for two roles. It falls apart at five. Composition scales because you're assembling capabilities, not subtracting them."

Emma nodded. "I'll be honest: I built an inheritance-based permissions system at my last job. Worked great for three months. By month six we had nine role subclasses and a two-page spreadsheet tracking which overrides belonged to which class." She shrugged. "That's when we rewrote it with composition."

James closed the inheritance file. "I wouldn't have believed you if I hadn't watched it break in front of me. The hierarchy felt so clean at the start."

"It always does. That's what makes it a trap."
