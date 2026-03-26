## Inheritance vs. Composition: The Permissions Problem

James had the class hierarchy sketched on a napkin before Emma sat down. Three boxes, two arrows, clean lines. `User` at the top. `Admin` and `Editor` underneath, each inheriting everything from `User` and adding their own methods.

"Inheritance," he said, sliding the napkin across the table. "One line per role. `class Admin(User)`. Done. The permissions live on each subclass."

Emma looked at the napkin. She didn't pick up her pen. "Add a `Viewer` role. Can see dashboards but can't change anything."

"Easy." James pulled the napkin back and drew a third arrow. `Viewer(User)`. He overrode `can_edit` to return `False` and `can_delete` to return `False`. "Three overrides. Still clean."

"Now add an `Auditor`. Can see dashboards, can export reports, but can't edit or delete. And they need access to the audit log, which no other role has."

James drew the fourth arrow. `Auditor(User)`. Override `can_edit`, override `can_delete`, add `can_export` and `can_view_audit_log`. He paused. "Okay, four overrides and two new methods. That's more, but the hierarchy still holds."

"Does it?" Emma set her coffee down. "What does `Auditor` inherit from `User` that it actually uses?"

James traced the arrows. `User` had `can_edit`, `can_delete`, `can_create`, and `can_view`. The `Auditor` overrode two of those to `False`, ignored one, and only kept `can_view`. Plus two methods that didn't exist on `User` at all.

"Hang on. The Auditor is inheriting four methods and throwing away three of them. That's like my old company giving every new hire a master key card and then individually revoking the rooms they shouldn't access." He frowned. "We stopped doing that after someone walked into the server closet."

"What happened next at your company?"

"We flipped it. New hires got a blank card. Their manager activated only the rooms they needed." James stopped. He looked at the napkin again. "You're saying I should flip the permissions model. Start with nothing and compose in what each role needs."

"I'm not saying anything yet. Try it both ways. I need to check on a deployment. Back in ten."

Emma left. James stared at the napkin, then opened his editor.

He built the inheritance version first. It worked for `Admin` and `Editor`. When he added `Viewer`, the overrides were annoying but manageable. When he added `Auditor`, the cracks showed: `Auditor` inherited a `can_create` method that made no sense for the role, and he had to override it to raise a `NotImplementedError`. When he added a `TemporaryContractor` with time-limited access to two specific features, he needed a mixin or multiple inheritance, and suddenly `TemporaryContractor` was pulling in methods from two parent classes that conflicted with each other.

He deleted the hierarchy. Started fresh. A `Permissions` dataclass with boolean fields: `view`, `edit`, `delete`, `create`, `export`, `audit_log`. Each role got a `Permissions` object configured for exactly what it needed. `Auditor` got `view=True, export=True, audit_log=True`, everything else `False`. `TemporaryContractor` got a `Permissions` with an `expires_at` field. No overrides. No inheritance chain. No methods inherited and then revoked.

When Emma came back, James had both versions side by side on his screen.

"Inheritance worked for two roles," he said. "Maybe three. By the fourth, I was overriding more methods than I was using. The hierarchy was technically correct, but it was doing the opposite of what inheritance is supposed to do. I was inheriting things just to turn them off."

"What did composition change?"

"Each role declares exactly what it can do. Nothing inherited, nothing revoked. When I added the contractor, it was four lines instead of a new class with six overrides." He sat back. "It's like the key card thing. Composition is the blank card. You grant access. Inheritance is the master key. You revoke access. Granting is safer than revoking because you can't forget to remove something that was never there."

Emma nodded. "The principle has a name: **favor composition over inheritance**. Not because inheritance is broken. It works fine when the hierarchy is stable and shallow. Two levels, maybe three."

"But permissions aren't stable," James said. "Every time a new role shows up, the hierarchy has to absorb it. And every new role inherits baggage from every role above it."

"That's the test. If new requirements force you to override more than you keep, the hierarchy is working against you." Emma picked up the napkin and drew a single box with a dotted border. "Composition means the pieces are independent. You can rearrange them without breaking the container."

James looked at the two versions on his screen. The inheritance tree had taken forty-five minutes and collapsed under its own weight. The composition version had taken fifteen and handled every role he threw at it. He wasn't going to forget this one. Some lessons only land after you build the wrong thing first.
