# File Permissions and Ownership

James had been staring at the same error for ten minutes. `Permission denied.` He typed the command again, slower this time, as if that would help. Same result.

"I can read this file in my home directory," he said, not looking up. "But the script in `/opt/deploy` won't run. Same command, same user. What's different?"

Emma glanced at his terminal. "Who owns that file?"

"I do. I mean, I created it."

"You created the one in your home directory. Who created the one in `/opt/deploy`?"

James checked. `ls -l /opt/deploy/run.sh`. Owner: `root`. Group: `deploy`. He was neither.

"Okay, so it's someone else's file. But this is my machine. I should be able to run my own scripts."

Emma pulled a chair over. "Think about your old office. Did everyone have a key to the supply closet?"

"No. Facilities kept it locked. You filled out a request or asked someone with a key." He paused. "But that was physical stuff. These are just files."

"Are they?" Emma said. "That deploy script can restart services, overwrite configs, wipe logs. Letting every user on the system run it is like leaving the supply closet open with the petty cash inside."

James looked at the `ls -l` output again. `-rwxr-x---`. Ten characters he'd been ignoring for weeks.

"Okay, let me make sure I have this," he said. "The first part is the owner's permissions. That's `rwx`, so root can read, write, and execute. The middle part is the group. `r-x`, so anyone in the `deploy` group can read and execute but not modify. And the last three dashes mean everyone else gets nothing."

"Close. What's the very first character?"

"The dash? I figured that was just a separator."

"It tells you whether you're looking at a file, a directory, or a link. A regular file is a dash. A directory is `d`. That one character changes how the rest of the permissions behave."

James frowned. "How does a directory's read permission differ from a file's?"

Emma leaned back. "Figure that out. Create a directory, set it to read-only for yourself, and try to list its contents. Then try to create a file inside it. I need to check on a build. I'll be back in fifteen." She stood up and left.

James created a test directory. He set the permissions to `r--------` with `chmod`. He ran `ls` on it. The filenames appeared, but the details were garbled: no sizes, no dates, question marks everywhere. He tried `cd` into it. `Permission denied.`

He sat back. Reading a directory meant you could see the names inside, but you needed something else to actually enter it or get details. That "something else" had to be the execute bit. On a directory, execute didn't mean "run this." It meant "you're allowed to traverse into this space."

It was like the difference between seeing a building's tenant list in the lobby versus having a badge that let you through the door.

When Emma came back, James had a grid drawn on a napkin: rows for files and directories, columns for read, write, and execute, with what each combination actually permitted.

"The execute bit on a directory," he said. "It's not about running anything. It's access. Like the badge system at my old company: you could see the floor directory, but the elevator wouldn't take you there without the right keycard."

Emma looked at the napkin. "I've been explaining this with Venn diagrams for years. The badge analogy is better." She picked up a pen and added one row to his grid: symbolic links. "Now figure out how permissions work when the link points somewhere you can't access."
