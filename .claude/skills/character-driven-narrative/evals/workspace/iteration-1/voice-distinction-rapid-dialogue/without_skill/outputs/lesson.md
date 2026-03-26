# API Rate Limiting

**James:** So I just got a 429 error. The API literally told me to go away?

**Emma:** What does your bank do when you exceed your daily withdrawal limit?

**James:** Declines the transaction. Oh. The API has a limit too?

**Emma:** Per time window. Requests per minute, per hour. Why would a provider enforce that?

**James:** Same reason a restaurant caps reservations. Let everyone in at once, the kitchen crashes, nobody gets served.

**Emma:** Shared infrastructure, finite capacity. Now look at the response headers.

**James:** X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset. The API is telling me my budget and how much I've spent?

**Emma:** Like a prepaid card statement. What happens when Remaining hits zero?

**James:** Cut off until Reset. That timestamp is when my balance refills. Honestly, that's more transparent than most SaaS billing I've dealt with.

**Emma:** So how would you design around that?

**James:** In business we call it capacity planning. Check how many requests I need per minute, compare against the limit, pace myself.

**Emma:** That pacing has a name. Token bucket algorithm. You get tokens at a fixed rate. Each request costs one token. No tokens, no request.

**James:** Like an allowance. Ten dollars a week, spend it however you want, but when it's gone, you wait.

**Emma:** What if you need to burst occasionally?

**James:** Save up. If I haven't spent tokens, I accumulate a surplus for a big push. That's working capital.

**Emma:** Your code gets a 429. What should it do?

**James:** Retry immediately?

**Emma:** What happens if ten thousand clients all retry immediately?

**James:** Thundering herd. Everyone rushes back at once, crashes the server again. Black Friday door-buster sale.

**Emma:** Fix?

**James:** Back off. Wait before retrying. Add randomness so not everyone retries at the same moment.

**Emma:** Exponential backoff with jitter. First retry waits one second. Second retry waits two. Third waits four. Add random milliseconds so clients don't synchronize.

**James:** Compound interest on patience. I can sell that to my team. But what if the API gives a Retry-After header?

**Emma:** Then respect it. The server tells you exactly when to come back. Why guess?

**James:** But I'm paying for this API. Shouldn't I get unlimited access? That's like buying a gym membership and being told I can only use the treadmill three times an hour.

**Emma:** Does your gym let one person monopolize every machine all day?

**James:** Fair point. Other customers exist. Rate limits protect the service for everyone. Shared resource, shared rules.

**Emma:** One more thing. Different endpoints can have different limits.

**James:** Different product lines, different margins. The expensive endpoint costs more to serve, so the limit is tighter.

**Emma:** Always check the docs for each endpoint. Never assume one limit applies everywhere.

**James:** So rate limiting is resource economics. Scarce capacity, shared access, budget discipline, and graceful behavior when the budget runs out.

**Emma:** You just summarized it better than most engineers do.

**James:** Well, years of quarterly budget reviews finally paying off.
