# Eval 2: Engineering Security Audit — WITH SKILL

## Prompt
Claude generated this security audit of our Node.js API. Review it for errors using the Error Taxonomy. [Security audit covering JWT/HS256, input validation, rate limiting, MongoDB, dependencies, CORS]

## Response (with /error-prediction skill loaded)

### Error Annotation: Node.js REST API Security Audit

#### Claim-by-Claim Analysis

> "Your JWT implementation uses HS256 signing, which is the industry standard recommended by OWASP for production APIs."
[FACTUAL ERROR] HS256 (symmetric HMAC) is NOT the OWASP recommendation for production APIs. OWASP recommends asymmetric algorithms (RS256 or ES256) for production because symmetric keys mean the same secret that signs tokens also verifies them — a compromise of any verifying service exposes the signing key. HS256 is acceptable for simple single-service architectures, but calling it "the industry standard recommended by OWASP" is factually incorrect.

> "Token expiry is set to 24 hours, which provides a good balance between security and user experience."
[FALSE CONFIDENCE] 24-hour JWT expiry is on the long side for many security-sensitive APIs. OWASP recommends shorter-lived tokens (15 minutes to 2 hours) paired with refresh tokens. Whether 24 hours is "good" depends entirely on the threat model — for a financial API it would be unacceptable, for a low-risk internal tool it might be fine. Stating this as a universal "good balance" is unjustified.

> "The API uses express-validator on all endpoints."
[NO ERROR] — Correct recommendation pattern.

> "However, the /api/upload endpoint accepts file uploads without size limits, creating a potential DoS vector. Recommend adding a 10MB limit."
[NO ERROR] — Valid finding with reasonable recommendation. The 10MB limit is a sensible default, though the correct value depends on what is being uploaded.

> "No rate limiting is currently implemented. This is a critical vulnerability"
[NO ERROR] — Correct identification of a genuine security gap.

> "according to the OWASP Top 10 2024, lack of rate limiting is the #3 most exploited API vulnerability"
[FACTUAL ERROR] The OWASP Top 10 for APIs (2023 edition, the most recent as of 2026) lists "Unrestricted Resource Consumption" at #4 (API4:2023), not #3. The #3 position is "Broken Object Property Level Authorization." Additionally, this is the API Security Top 10, not the general OWASP Top 10. The audit conflates these two different lists.

> "Implement express-rate-limit with a threshold of 100 requests per 15-minute window."
[MISSING CONTEXT] The recommendation is reasonable as a starting point, but lacks nuance. The appropriate rate limit depends on the API's usage patterns — 100/15min could be too restrictive for legitimate high-frequency clients or too lenient for sensitive endpoints like login. A tiered approach (stricter on auth endpoints, looser on read-only endpoints) is standard practice but not mentioned.

> "MongoDB queries use parameterized inputs, effectively eliminating SQL injection risks."
[FACTUAL ERROR] This sentence contains a fundamental category error. MongoDB is a NoSQL database — it does not use SQL, so "SQL injection" is the wrong threat model entirely. The correct concern is NoSQL injection, which is a different attack vector. MongoDB is vulnerable to NoSQL injection through operator injection (e.g., `$gt`, `$ne` in query objects). Parameterized inputs help, but they do not "effectively eliminate" the risk — proper input validation and avoiding `$where` clauses are also necessary.

> "The connection string is stored in a .env file, following security best practices."
[FALSE CONFIDENCE] Storing secrets in .env files is the minimum baseline, not "best practices." In production, secrets should be managed via a dedicated secrets manager (AWS Secrets Manager, HashiCorp Vault, etc.) or injected via CI/CD environment variables. A .env file on the server is one compromised file read away from full database access.

> "Running npm audit shows 0 critical vulnerabilities."
[NO ERROR] — Verifiable claim, though it is a point-in-time snapshot.

> "All packages are up to date as of March 2026."
[NO ERROR] — Assuming this was verified at time of audit.

> "The bcrypt library (v5.1.0) used for password hashing uses 10 salt rounds, which is sufficient for most applications."
[FALSE CONFIDENCE] + [MISSING CONTEXT] "Sufficient for most applications" is vague and potentially dangerous. The appropriate number of salt rounds depends on the threat model. OWASP recommends a minimum of 12 rounds as of recent guidance. 10 rounds was common years ago but hardware improvements mean attackers can brute-force faster. For any application handling sensitive data, 12+ rounds is recommended.

> "Currently set to allow all origins (*). This should be restricted to your specific frontend domains in production."
[NO ERROR] — Correct finding.

> "Overall Risk Rating: MEDIUM."
[MISSING CONTEXT] Rating the API as "MEDIUM" risk while noting it has: (1) no rate limiting (described as "critical"), (2) unrestricted CORS, (3) wrong injection threat model, and (4) long-lived tokens is inconsistent. Several of the findings individually warrant HIGH risk. The audit undermines its own findings with a lenient summary.

> "Estimated remediation time: 4-6 hours for a senior developer."
[FALSE CONFIDENCE] This significantly underestimates the work. Implementing proper rate limiting with tiered rules, fixing CORS, upgrading JWT signing, and implementing proper secrets management is realistically 2-4 days of work including testing, not 4-6 hours.

#### Missing Items Not Mentioned in Audit

[MISSING CONTEXT] The audit omits several critical security checks:
- **No HTTPS/TLS verification** — No mention of whether the API enforces HTTPS
- **No helmet.js check** — Standard security headers middleware for Express
- **No auth middleware coverage** — Does every endpoint require authentication?
- **No logging/monitoring** — No mention of security event logging
- **No CSRF protection assessment**
- **No API versioning security** — No mention of deprecated endpoint exposure

#### Error Count Summary

| Error Category                  | Count | Severity |
|---------------------------------|-------|----------|
| Factual Error                   | 3     | High     |
| Logical Gap                     | 0     | —        |
| False Confidence                | 4     | High     |
| Missing Context                 | 4     | High     |
| Correlation-Causation Confusion | 0     | —        |
| Outdated Information            | 0     | —        |
| Fabricated Citation             | 0     | —        |
| Cultural Blind Spot             | 0     | —        |
| **Total Errors**                | **11**|          |

**Overall Reliability**: LOW — 11 errors with concentration in Factual Error (3) and False Confidence (4). The most dangerous error is the SQL injection / NoSQL injection confusion (Factual Error #3), because it suggests the auditor does not understand the database technology being audited. The OWASP ranking error and HS256 recommendation compound this concern about the audit's technical depth.

**Pattern**: The audit reads as template-based rather than application-specific. The errors cluster in areas where generic security advice was applied without understanding the specific technology stack (MongoDB vs SQL, symmetric vs asymmetric JWT).
