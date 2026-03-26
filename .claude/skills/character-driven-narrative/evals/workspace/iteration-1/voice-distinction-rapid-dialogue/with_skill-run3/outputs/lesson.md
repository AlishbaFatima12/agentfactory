# API Rate Limiting — Rapid-Fire Dialogue

"So the API just... stops answering?"

"Not stops. Refuses. There's a difference."

"Okay, let me make sure I have this. The server is up, the endpoint works, but it looks at how many times I've called it and says no?"

"What would happen if it didn't?"

"I'd call it as much as I want."

"And so would everyone else. A thousand clients, each sending fifty requests a second."

"Hang on. If that's true, then it's basically a bouncer at a club. My old company had a similar thing: we limited how many supplier quotes our purchasing team could request per day so the vendors wouldn't blacklist us."

"Good analogy. Now picture a bucket with a hole in the bottom. Water drips out at a fixed rate. You pour requests in at the top."

"And if I pour faster than it drains, the bucket overflows."

"That's the token bucket algorithm. One of the standard approaches."

"Wait, so basically the bucket size is my burst limit? I can dump a bunch of requests in at once, but only up to the bucket capacity?"

"What happens after the bucket is full?"

"The extra water spills. So my requests get rejected."

"With a 429 status code. Too Many Requests."

"Why 429 specifically? Who picks these numbers?"

"HTTP working group. Not the point. What matters is what you do when you get one."

"Retry?"

"When?"

"Immediately?"

"And what happens when a thousand clients all retry immediately after getting rate limited?"

"They all hit the server at the same time again. That's like when my old company's email system crashed and everyone kept clicking send, which made it worse."

"Exactly the thundering herd problem. So what's the fix?"

"Wait a random amount of time before retrying?"

"Close. Exponential backoff with jitter. First retry after one second plus some randomness. Second retry after two seconds plus randomness. Third after four."

"So each wait doubles. The jitter part stops everyone from syncing up."

"Right. Now, here's where I'm honestly not sure about the cleanest pattern. Some teams put retry logic in the client. Others use middleware. I've done both and neither felt perfect."

"Which would you pick for a small project? What's the minimum viable version?"

"Client-side. Less infrastructure. But you lose visibility into how often you're being throttled."

"Can't I just log the 429s?"

"What does a log tell you that a metric doesn't?"

"A log tells me it happened. A metric tells me how often."

"And which one helps you negotiate a higher rate limit with your API provider?"

"The metric. Because I can show a trend, not just a pile of timestamps. That's like the difference between telling my old boss 'we had complaints' versus showing a chart that complaints doubled in Q3."

"Now you're thinking like someone who operates a service, not just someone who calls one."

"Okay, but how do I actually implement the rate limiter on my side? Do I need Redis or something?"

"For the client consuming an API? No. For building your own rate-limited API? Different question. Which side are you on?"

"Both eventually. But right now I just need to stop getting 429s from the API I'm calling."

"Then you need three things. A retry wrapper. A backoff calculator. A circuit breaker for when retries aren't working."

"What's a circuit breaker?"

"What happens when you flip a light switch and the power is out?"

"Nothing."

"A circuit breaker stops you from flipping the switch at all. If the API has rejected you ten times in a row, stop trying for five minutes."

"So it protects the server from me and protects me from wasting time."

"Both. That's the whole point of rate limiting. It's a collaboration, not a punishment."
