# File Permissions and Ownership

James dropped into the chair next to Emma and set his laptop down harder than he meant to. "I just spent forty minutes trying to run a script. Forty minutes. It kept saying 'permission denied.' I wrote the file. It's my file. Why can't I run my own file?"

Emma glanced at his terminal. "Who says it's yours?"

"I created it. I saved it. It's sitting in my home directory."

"On your old team, could anyone walk into the supply closet and grab the petty cash?"

James paused. "No. Only accounting had the key. And even they had to sign a log."

"Three layers," Emma said. "Who can enter the room. Who can take something out. Who can put something back in."

"Okay, let me make sure I have this." James pulled the laptop closer. "So Linux does the same thing, but for files. There's some kind of access list attached to every file that says who can do what."

"Close. But it's simpler than an access list. Run `ls -l` on that script."

James typed. A line of output appeared: `-rw-r--r--`.

"Nine characters after the dash," Emma said. "Three groups of three. Read, write, execute, repeated for three different audiences."

"Wait, so basically every file has three sets of permissions: one for me, one for my group, and one for everyone else?" James squinted at the screen. "That's like how we ran the regional offices. Local managers could approve expenses up to five thousand. Department heads could go higher. Everyone else could only submit requests."

Emma's mouth twitched. "Not bad. The owner is your local manager. The group is the department. 'Other' is everyone walking past in the hallway."

"But my script has `rw-r--r--`. There's no `x` anywhere." James traced the characters with his finger. "So nobody can execute it. Not even me, the owner."

"Now you're reading it."

"Hang on. That means creating a file and being allowed to run it are two separate decisions. The system doesn't assume that because I wrote something, I want it to be executable."

"Right. What's the risk if every new file were executable by default?"

James thought for a moment. "Someone downloads a file, maybe from an email attachment, and it runs automatically before they even look at it." He sat back. "That's a security problem."

"I learned that one the hard way," Emma said, quieter now. "Early in my career, I set a deploy directory to `777` because I was tired of permission errors. Full read, write, execute for everyone. Took two days to figure out why a cron job was picking up and running files that another team was still uploading half-finished." She picked up her coffee. "Permissions feel like friction. They are friction, on purpose."

James stared at the permission string again. `rw-r--r--`. Six characters he could read now. Three audiences. The principle of least privilege, applied to every file on the machine. Not access control as bureaucracy. Access control as architecture.

"So `chmod +x` is me handing out the key to the supply closet," he said. "Deliberately."

"Deliberately," Emma repeated. "Run it now."
