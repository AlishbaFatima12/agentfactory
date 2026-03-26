# API Rate Limiting

"Okay, let me make sure I have this. The API just... stops answering if you ask too many times?"

"Not stops. Refuses. There's a difference."

"How is that a difference?"

"Stopped might be dead. Refusing is alive and protecting itself."

"So it's like Diane at my old company's reception desk. After five walk-ins before lunch, she'd put up the 'by appointment only' sign. Not gone. Just done with chaos."

"What's the sign in HTTP?"

"Wait, it's a status code. 429?"

"429. Too Many Requests. What do you do when you get one?"

"Try again?"

"When?"

"...Immediately?"

"And what happens if every client retries immediately?"

"Hang on. If that's true, then everyone hammers the server at the same second. It gets worse, not better."

"Thundering herd. Picture a hundred people rushing Diane's desk the instant she takes the sign down."

"She'd put the sign right back up."

"Exactly. So what's the fix?"

"Spread the retries out. Don't all go back at once."

"How?"

"Wait a random amount of time?"

"Close. But not quite. Random helps, but there's a better pattern. What if each retry waits longer than the last?"

"So first retry waits one second, then two, then four... exponential backoff. We did something like that for warehouse delivery scheduling. Full time slot? Don't rebook the same hour. Push to the next window, then a wider one."

"Now add jitter."

"Jitter?"

"Random noise on top of the backoff. Your one-second wait becomes 0.8 or 1.3. Why?"

"Because if two clients both calculate 'wait one second,' they both come back at one second. Jitter breaks the tie."

"Exponential backoff plus jitter. That's the standard."

"Okay, but what about the limit itself? Do I just guess how many requests I get?"

"What would you check first?"

"The API docs?"

"And at runtime?"

"Headers, right? I've seen X-RateLimit-Remaining."

"Three headers. Limit, remaining, reset. Ceiling, how close you are, when the window refills. What's the smart move?"

"Track remaining. When it gets low, slow down before you hit the wall."

"Instead of slamming into 429 and backing off, you..."

"Ease off early. Proactive instead of reactive."

"That's the difference between a client that works and a client that's polite. Servers remember rude clients."

"Diane definitely did. What's that called?"

"Adaptive rate limiting. Token bucket on the client side."

"Wait, so basically the client keeps its own bucket, spends one token per request, and refills based on the headers?"

"Now you're thinking like an engineer."

"Okay, so: 429 means slow down, exponential backoff with jitter for retries, rate-limit headers to stay under the ceiling before you hit it."

"One thing missing. What about different endpoints?"

"They could have different limits."

"Usually. Search might allow 10 per minute. Read might allow 100. What breaks if you treat them as one bucket?"

"You burn through search calls thinking you have headroom from read calls. Separate tracking per endpoint."

"Separate buckets. Separate tracking. Same principles."

"Diane would be proud."

"Diane would tell you to make an appointment."
