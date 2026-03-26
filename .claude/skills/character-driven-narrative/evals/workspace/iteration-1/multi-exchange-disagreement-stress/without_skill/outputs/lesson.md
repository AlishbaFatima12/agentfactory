## The Permissions Debate

James stared at his class diagram, satisfied. Three levels of user, each inheriting from the one above, each gaining new abilities. It was clean. It was obvious. It was exactly how the org charts at his old consulting firm worked.

"I modeled it after how companies actually think about access," he told Emma during their code review. "You've got `BasicUser`, then `Editor` extends that, then `Admin` extends `Editor`. Each tier inherits everything below it and adds more."

Emma pulled up a blank file. "Makes sense on paper. Let me throw a scenario at you. Your client just asked for a `ContentModerator` role. Moderators can delete posts like admins, but they can't change billing or invite new users. Where does that fit in your hierarchy?"

James paused. "I'd slot it between `Editor` and `Admin`. It gets editor permissions plus delete."

"So now `Admin` extends `ContentModerator` instead of `Editor`?"

"Right. And `ContentModerator` extends `Editor`."

"Okay. Now they also want an `Auditor` role. Auditors can view billing like admins, but they can't edit or delete anything. They're read-only across the board."

James opened his diagram again. The inheritance chain was `BasicUser` to `Editor` to `ContentModerator` to `Admin`. An auditor who could see billing but not edit content didn't belong anywhere in that line. He could branch the hierarchy, but then `Admin` would need to inherit from two parents, and Python's method resolution order was already giving him headaches in simpler cases.

"I could... duplicate the billing-view logic in a separate branch," he said, though the words felt wrong coming out.

"You could. What happens six months from now when billing-view needs an audit trail and you're maintaining that logic in two places?"

James sat with it. He sketched the auditor branch, then a `ReadOnlyAnalyst` role the product team had mentioned wanting eventually. Each new role fractured the tree further. The hierarchy that looked elegant with three roles became a brittle mess at six.

"The problem isn't inheritance itself," he said slowly. "It's that permissions don't actually stack in a straight line. Moderators need _some_ admin powers but not others. Auditors need visibility without any write access. These cut across the hierarchy sideways."

Emma nodded but stayed quiet.

"So instead of 'an admin _is_ an editor with more powers,' I should think of it as 'a user _has_ a set of permissions.' Composition. Each role gets a collection of permission objects, and I can mix and match without forcing everything into a parent-child chain."

He started restructuring. A `Permission` class with concrete instances: `CanEditContent`, `CanDeletePost`, `CanViewBilling`, `CanManageUsers`. Each role held a set of these. Adding `ContentModerator` meant assembling the right permissions. Adding `Auditor` meant a different assembly. No duplication, no diamond inheritance, no reshuffling the tree every time a product manager had a new idea.

"The org chart metaphor tripped me up," James admitted. "Companies have strict hierarchies, but actual permissions are more like a toolbox. You hand people the tools they need for their job."

Emma finally grinned. "That metaphor's better than most textbook explanations. Ship it."
