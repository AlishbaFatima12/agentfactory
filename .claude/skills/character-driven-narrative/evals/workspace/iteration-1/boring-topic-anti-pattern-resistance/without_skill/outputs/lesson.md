# Who Gets the Keys? File Permissions as Access Control

James stared at the terminal output, three columns of cryptic letters where he expected something readable.

```
-rwxr-xr-- 1 emma dev-team 4096 Mar 12 09:14 deploy.sh
```

"Every file on a Linux system has an owner, a group, and a set of permissions," Emma said, pulling up a chair. "Think of it like a corporate document. Who created it, which department can see it, and what about everyone else in the company?"

James leaned back. "So it's an access control matrix. When I ran finance at Kendrick & Associates, we had three tiers: the author of a report, the finance team, and the rest of the firm. Each tier had different privileges: edit, comment, or view-only."

"That's almost exactly how Linux does it." Emma pointed at the letters on screen. "Those nine characters after the first dash? They're three groups of three. Owner permissions, group permissions, then everyone else. Each group gets three possible rights: read, write, and execute."

"Read and write are obvious. What does 'execute' mean for a file?"

"Can you run it as a program? A spreadsheet full of revenue data needs to be _read_. A script that generates that spreadsheet needs to be _executed_. The data and the tool that processes it require different permissions." Emma grabbed a marker and wrote on the whiteboard:

```
rwx  r-x  r--
^^^  ^^^  ^^^
 |    |    |
 |    |    └── Others: read only
 |    └── Group: read + execute
 └── Owner: read + write + execute
```

James studied the diagram. "In my old firm, an analyst could open a financial model but not run the macros inside it. The department head could do both. That's the difference between read and execute."

"Exactly. And the _owner_ of a file can change these permissions, the same way a document creator in your firm could adjust sharing settings. But here's where Linux diverges from corporate tools." Emma typed `ls -la /etc/shadow` and hit enter. "Some files are owned by `root`, the system administrator. No regular user can change those permissions, regardless of what group they belong to. Root is the board of directors: they override every access policy in the building."

"So when a new developer joins the team, someone with root access has to grant them the right group membership before they can touch project files?"

"Now you're thinking in Linux."
