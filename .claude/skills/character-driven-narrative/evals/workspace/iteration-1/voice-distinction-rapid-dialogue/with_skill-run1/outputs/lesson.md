# API Rate Limiting — James & Emma Dialogue

"Okay, let me make sure I have this. Every API has a limit on how many times you can call it per minute?"

"Per minute. Per hour. Per day. Depends on the provider."

"So it's like when my old company capped expense reports at five per quarter. Didn't matter how legitimate they were; number six got bounced."

"What happened when someone hit the cap?"

"They waited until next quarter. Or they bundled three small claims into one big one."

"You just described two rate-limiting strategies without knowing it."

"Wait, so basically... I can either slow down my requests or batch them together?"

"Which costs you less?"

"Batching. Fewer round trips. But hang on. If I batch ten requests into one, and that one fails, I lose all ten. With individual calls, I only lose the one that failed."

"Now picture a highway on-ramp. One car at a time, metered by a traffic light. What happens if you remove the light?"

"Gridlock. Everyone floods in at once and nobody moves."

"That's what happens to an API without rate limits. The server chokes."

"Okay, but here's my problem. I don't control the rate limit. The API provider sets it. So what am I supposed to do, just... hope I stay under?"

"Do you hope you stay under the speed limit when you drive?"

"No, I check the speedometer."

"So where's your speedometer?"

"Hang on. If that's true, then I need to track my own request count. Some kind of counter that resets every minute?"

"Or every window. Sliding window versus fixed window. Different tradeoffs."

"What's the minimum viable version? Can I just add a sleep between calls and call it done?"

"You can. What happens when your rate limit is 100 per minute and each call takes 50 milliseconds?"

"That's... 50 milliseconds times 100. Five seconds of actual work. And 55 seconds of sleeping. That's like paying rent on an office you use one hour a day."

"Exactly. Sleep is the brute-force approach. It works. It wastes capacity."

"So what's better?"

"Token bucket. Picture a jar with ten marbles. Every second, one marble drops in. Every request takes one marble out. If the jar is empty..."

"You wait for a marble. Okay, that's cleaner. But who refills the jar? My code or the server?"

"Both. The server enforces its own bucket. You maintain yours to avoid hitting theirs."

"Wait, so I'm building a local copy of their rate limiter? How do I know their bucket size?"

"Read their docs. Or get a 429 and find out the hard way."

"I got a 429 last week. 'Too Many Requests.' I just retried immediately and got another one."

"I did the same thing three years ago. Wrote a retry loop with no backoff. Hammered a payment API so hard they suspended our key for 24 hours. My team lead was not amused."

"So retrying immediately is wrong."

"What would you do differently?"

"Wait longer each time? First retry after one second, then two, then four..."

"Exponential backoff. Add a random jitter so a thousand clients don't all retry at the same second."

"A random jitter. That's like staggering lunch breaks so the cafeteria doesn't get slammed at noon."

"How long will this take to implement?"

"The backoff? Twenty lines. The token bucket? Fifty. Or you use a library that does both."

"Can I skip building it myself and just use the library?"

"You can. But if the library breaks at 2 AM, can you debug it without understanding what it does?"

"...No."

"Then build it once. Use the library after."

"Do I really need both the local bucket and the backoff?"

"Belt and suspenders. The bucket prevents most 429s. The backoff handles the ones that slip through."

"Okay, so basically: track my own rate, use a token bucket to stay under, and if I still hit the wall, back off exponentially with jitter."

"Three sentences. That's the whole strategy."
