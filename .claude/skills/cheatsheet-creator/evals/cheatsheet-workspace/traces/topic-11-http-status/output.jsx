import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>○</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 130,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function HTTPStatusCodesCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Status Code Classes", "Page 2: Practical Patterns"];

  return (
    <div
      style={{
        background: palette.bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
          padding: "22px 28px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', serif",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#fff",
          }}
        >
          HTTP Status Codes{" "}
          <span style={{ color: palette.accentLight }}>Cheatsheet</span>
        </h1>
        <div
          style={{
            color: palette.codeText,
            fontSize: 12,
            marginTop: 6,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          1xx Informational · 2xx Success · 3xx Redirect · 4xx Client · 5xx Server
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background: page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "7px 18px",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page 1: Status Code Classes */}
      {page === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 1: Status Code Classes Overview */}
          <SectionCard number="1" title="Status Code Classes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              HTTP responses are grouped into five classes by their first digit.
            </div>
            {[
              { code: "1xx", label: "Informational", color: "#3a6ea5", desc: "Request received, continuing process" },
              { code: "2xx", label: "Success", color: "#5a8a3c", desc: "Request successfully received and accepted" },
              { code: "3xx", label: "Redirection", color: "#8a6a3a", desc: "Further action needed to complete request" },
              { code: "4xx", label: "Client Error", color: "#c0582a", desc: "Request contains bad syntax or cannot be fulfilled" },
              { code: "5xx", label: "Server Error", color: "#a53a3a", desc: "Server failed to fulfill a valid request" },
            ].map(({ code, label, color, desc }, i) => (
              <div
                key={code}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <Tag color={color}>{code}</Tag>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 80 }}>{label}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 2: 1xx Informational */}
          <SectionCard number="2" title="1xx Informational">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Provisional responses indicating the request is being processed.
            </div>
            <RefRow cmd="100" desc="Continue — client should send the request body" />
            <RefRow cmd="101" desc="Switching Protocols — upgrading to WebSocket/HTTP2" />
            <RefRow cmd="102" desc="Processing — server received, still working (WebDAV)" />
            <RefRow cmd="103" desc="Early Hints — preload resources while server prepares" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Tip:</strong> 103 Early Hints lets the browser start loading CSS/JS before the final response arrives. Supported in modern browsers.
              </div>
            </div>
          </SectionCard>

          {/* Section 3: 2xx Success Codes */}
          <SectionCard number="3" title="2xx Success Codes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The request was successfully received, understood, and accepted.
            </div>
            <RefRow cmd="200" desc="OK — standard successful response" />
            <RefRow cmd="201" desc="Created — new resource successfully created" />
            <RefRow cmd="202" desc="Accepted — request queued for async processing" />
            <RefRow cmd="204" desc="No Content — success but no body returned" />
            <RefRow cmd="206" desc="Partial Content — range request fulfilled" />
            <RefRow cmd="207" desc="Multi-Status — multiple status codes (WebDAV)" />
            <Bullet><strong>200</strong> for GET, <strong>201</strong> for POST, <strong>204</strong> for DELETE</Bullet>
          </SectionCard>

          {/* Section 4: 3xx Redirection */}
          <SectionCard number="4" title="3xx Redirection">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The client must take additional action to complete the request.
            </div>
            <RefRow cmd="301" desc="Moved Permanently — URL changed forever, update links" />
            <RefRow cmd="302" desc="Found — temporary redirect (may change method)" />
            <RefRow cmd="303" desc="See Other — redirect with GET after POST" />
            <RefRow cmd="304" desc="Not Modified — use cached version" />
            <RefRow cmd="307" desc="Temporary Redirect — same method preserved" />
            <RefRow cmd="308" desc="Permanent Redirect — same method preserved" />
            <Bullet><strong>304</strong> is not a true redirect — it tells the client its cache is still valid</Bullet>
          </SectionCard>

          {/* Section 5: 4xx Client Errors: Core */}
          <SectionCard number="5" title="4xx Client Errors: Core">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Most Common</Tag>
            </div>
            <RefRow cmd="400" desc="Bad Request — malformed syntax, invalid params" />
            <RefRow cmd="401" desc="Unauthorized — authentication required or failed" />
            <RefRow cmd="403" desc="Forbidden — authenticated but lacks permission" />
            <RefRow cmd="404" desc="Not Found — resource does not exist" />
            <RefRow cmd="405" desc="Method Not Allowed — wrong HTTP verb for endpoint" />
            <RefRow cmd="409" desc="Conflict — state conflict (e.g., duplicate resource)" />
            <RefRow cmd="410" desc="Gone — resource permanently deleted" />
          </SectionCard>

          {/* Section 6: 4xx Client Errors: Extended */}
          <SectionCard number="6" title="4xx Client Errors: Extended">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Specialized</Tag>
            </div>
            <RefRow cmd="406" desc="Not Acceptable — can't match Accept header" />
            <RefRow cmd="408" desc="Request Timeout — client took too long to send" />
            <RefRow cmd="411" desc="Length Required — Content-Length header missing" />
            <RefRow cmd="412" desc="Precondition Failed — conditional request failed" />
            <RefRow cmd="413" desc="Payload Too Large — request body exceeds limit" />
            <RefRow cmd="415" desc="Unsupported Media Type — wrong Content-Type" />
            <RefRow cmd="416" desc="Range Not Satisfiable — invalid byte range" />
          </SectionCard>

          {/* Section 7: 4xx Client Errors: Modern */}
          <SectionCard number="7" title="4xx Modern & API Codes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">API Essential</Tag>
            </div>
            <RefRow cmd="422" desc="Unprocessable Entity — valid JSON but semantic errors" />
            <RefRow cmd="429" desc="Too Many Requests — rate limit exceeded" />
            <RefRow cmd="451" desc="Unavailable For Legal Reasons — censorship/DMCA" />
            <RefRow cmd="426" desc="Upgrade Required — must switch to newer protocol" />
            <RefRow cmd="428" desc="Precondition Required — must use If-Match header" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>400 vs 422:</strong> Use 400 for malformed requests (bad JSON), 422 for well-formed but semantically invalid data (email already taken).
              </div>
            </div>
          </SectionCard>

          {/* Section 8: 5xx Server Errors */}
          <SectionCard number="8" title="5xx Server Errors">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The server failed to fulfill a valid request.
            </div>
            <RefRow cmd="500" desc="Internal Server Error — generic catch-all failure" />
            <RefRow cmd="501" desc="Not Implemented — server doesn't support the method" />
            <RefRow cmd="502" desc="Bad Gateway — upstream server returned invalid response" />
            <RefRow cmd="503" desc="Service Unavailable — overloaded or in maintenance" />
            <RefRow cmd="504" desc="Gateway Timeout — upstream server didn't respond in time" />
            <RefRow cmd="507" desc="Insufficient Storage — server storage full (WebDAV)" />
            <RefRow cmd="511" desc="Network Auth Required — captive portal login needed" />
          </SectionCard>

          {/* Section 9: REST API Response Patterns */}
          <SectionCard number="9" title="REST API Response Patterns">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Recommended status codes for standard CRUD operations.
            </div>
            <Code>{`GET    /users      → 200 (list)
GET    /users/:id  → 200 or 404
POST   /users      → 201 + Location header
PUT    /users/:id  → 200 or 204
PATCH  /users/:id  → 200 or 204
DELETE /users/:id  → 204 (no body)`}</Code>
            <Bullet>Always include <code>Location</code> header with 201 responses</Bullet>
            <Bullet>Return 204 when the response body is intentionally empty</Bullet>
          </SectionCard>

          {/* Section 10: Caching & Conditional Requests */}
          <SectionCard number="10" title="Caching & Conditionals">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How status codes interact with HTTP caching mechanisms.
            </div>
            <KV k="304 Not Modified" v="Resource unchanged, use cached copy" />
            <KV k="ETag" v="Fingerprint for a resource version" />
            <KV k="If-None-Match" v="Send ETag to check for changes" />
            <KV k="If-Modified-Since" v="Time-based conditional request" />
            <KV k="Cache-Control" v="Directives: max-age, no-cache, no-store" />
            <Code>{`# Conditional request flow
Client: GET /api/data
  If-None-Match: "abc123"
Server: 304 Not Modified
  (no body, client uses cache)`}</Code>
          </SectionCard>

          {/* Section 11: Redirect Behavior Deep Dive */}
          <SectionCard number="11" title="Redirect Behavior Guide">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Understanding the critical differences between redirect codes.
            </div>
            {[
              { code: "301", perm: "Yes", method: "May change to GET", use: "Permanent URL change" },
              { code: "302", perm: "No", method: "May change to GET", use: "Legacy temporary redirect" },
              { code: "307", perm: "No", method: "Preserved", use: "Temporary, keep POST/PUT" },
              { code: "308", perm: "Yes", method: "Preserved", use: "Permanent, keep POST/PUT" },
            ].map(({ code, perm, method, use }, i) => (
              <div
                key={code}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 40px 1fr 1fr",
                  gap: 6,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                  fontSize: 11,
                  alignItems: "center",
                }}
              >
                <strong style={{ color: palette.accent }}>{code}</strong>
                <span style={{ color: palette.mid }}>{perm}</span>
                <span style={{ color: palette.mid }}>{method}</span>
                <span style={{ color: palette.dark, fontWeight: 600 }}>{use}</span>
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "40px 40px 1fr 1fr", gap: 6, padding: "2px 8px", fontSize: 9, color: palette.mid, textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>
              <span>Code</span><span>Perm?</span><span>Method</span><span>Use Case</span>
            </div>
          </SectionCard>

          {/* Section 12: Quick Decision Guide */}
          <SectionCard number="12" title="Quick Decision: Which Code to Return?" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Success — No Body", when: "DELETE, PUT with no response", best: "Use 204 No Content. Don't return empty 200.", icon: "204" },
                { title: "Created Resource", when: "POST creates something new", best: "Use 201 + Location header pointing to new resource.", icon: "201" },
                { title: "Bad User Input", when: "Validation fails on form/API data", best: "Use 422 for semantic errors, 400 for malformed syntax.", icon: "422" },
                { title: "Auth Problems", when: "User can't access a resource", best: "401 = not logged in. 403 = logged in but not allowed.", icon: "401" },
                { title: "Rate Limiting", when: "Too many requests from a client", best: "Use 429 + Retry-After header with seconds to wait.", icon: "429" },
                { title: "Resource Gone", when: "Deleted permanently vs never existed", best: "410 = was here, now gone. 404 = never existed or unknown.", icon: "410" },
                { title: "Async Processing", when: "Request accepted but not done yet", best: "Use 202 Accepted + poll endpoint or webhook callback.", icon: "202" },
                { title: "Server Down", when: "Planned maintenance or overload", best: "Use 503 + Retry-After header. Helps load balancers retry.", icon: "503" },
              ].map(({ title, when, best, icon }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 4, fontWeight: 900, color: palette.accent, fontFamily: "'JetBrains Mono', monospace" }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Practical Patterns */}
      {page === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 13: Authentication vs Authorization */}
          <SectionCard number="13" title="401 vs 403 Deep Dive">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">401</Tag>
              <Tag color="#7a5a8a">403</Tag>
            </div>
            <KV k="401 Unauthorized" v="Identity unknown — must authenticate first" />
            <KV k="403 Forbidden" v="Identity known — insufficient permissions" />
            <Bullet><strong>401</strong> should include a <code>WWW-Authenticate</code> header</Bullet>
            <Bullet><strong>403</strong> means re-authenticating won't help — user lacks the role</Bullet>
            <Bullet>Never return 404 to hide a resource — use 403 for access-controlled endpoints</Bullet>
            <Code>{`// Express middleware example
if (!req.user) return res.status(401)
  .json({ error: "Authentication required" });
if (!req.user.isAdmin) return res.status(403)
  .json({ error: "Admin access required" });`}</Code>
          </SectionCard>

          {/* Section 14: Rate Limiting */}
          <SectionCard number="14" title="Rate Limiting & 429">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Headers and patterns for implementing rate limits.
            </div>
            <KV k="429" v="Too Many Requests — client exceeded rate limit" />
            <KV k="Retry-After" v="Seconds or date when client can retry" />
            <KV k="X-RateLimit-Limit" v="Max requests allowed in window" />
            <KV k="X-RateLimit-Remaining" v="Requests left in current window" />
            <KV k="X-RateLimit-Reset" v="Unix timestamp when window resets" />
            <Code>{`HTTP/1.1 429 Too Many Requests
Retry-After: 60
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1710200000`}</Code>
          </SectionCard>

          {/* Section 15: Content Negotiation */}
          <SectionCard number="15" title="Content Negotiation">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How Accept and Content-Type headers interact with status codes.
            </div>
            <RefRow cmd="406" desc="Server can't produce content matching Accept header" />
            <RefRow cmd="415" desc="Server can't parse the request's Content-Type" />
            <Bullet><code>Accept: application/json</code> — what the client wants back</Bullet>
            <Bullet><code>Content-Type: application/json</code> — what the client is sending</Bullet>
            <Bullet>Return <strong>406</strong> if you only serve JSON but client wants XML</Bullet>
            <Bullet>Return <strong>415</strong> if client sends XML but endpoint only accepts JSON</Bullet>
            <Code>{`// 406 scenario
Accept: application/xml
→ 406 Not Acceptable (API only serves JSON)

// 415 scenario
Content-Type: text/plain
→ 415 Unsupported Media Type`}</Code>
          </SectionCard>

          {/* Section 16: CORS-Related Responses */}
          <SectionCard number="16" title="CORS & Preflight">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Cross-Origin Resource Sharing and related status codes.
            </div>
            <Bullet>Browser sends <strong>OPTIONS</strong> preflight before cross-origin requests with custom headers</Bullet>
            <Bullet>Preflight should return <strong>204</strong> with CORS headers, no body</Bullet>
            <Bullet>Missing <code>Access-Control-Allow-Origin</code> header causes browser-side errors (not a status code issue)</Bullet>
            <Bullet>Return <strong>403</strong> if origin is explicitly blocked by server policy</Bullet>
            <Code>{`// Preflight response headers
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400`}</Code>
          </SectionCard>

          {/* Section 17: WebSocket & Upgrade */}
          <SectionCard number="17" title="WebSocket & Protocol Upgrade">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Status codes involved in connection upgrades.
            </div>
            <RefRow cmd="101" desc="Switching Protocols — upgrade handshake accepted" />
            <RefRow cmd="426" desc="Upgrade Required — must use a different protocol" />
            <Code>{`// WebSocket upgrade handshake
GET /chat HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNh...

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPL...`}</Code>
            <Bullet>After 101, the connection is no longer HTTP — it's a raw WebSocket stream</Bullet>
            <Bullet><strong>426</strong> is used when server requires TLS upgrade (HTTP to HTTPS)</Bullet>
          </SectionCard>

          {/* Section 18: API Error Response Bodies */}
          <SectionCard number="18" title="API Error Response Bodies">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Standard patterns for structuring error responses.
            </div>
            <Code>{`// RFC 7807 Problem Details
{
  "type": "/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "Email is already taken",
  "instance": "/users/signup",
  "errors": [
    { "field": "email",
      "message": "already registered" }
  ]
}`}</Code>
            <Bullet>Always include <code>status</code> in the JSON body to match the HTTP status</Bullet>
            <Bullet>Use <code>errors</code> array for field-level validation details</Bullet>
            <Bullet>RFC 7807 is the standard — use <code>application/problem+json</code> content type</Bullet>
            <Bullet>Include a human-readable <code>detail</code> and a machine-readable <code>type</code></Bullet>
          </SectionCard>

          {/* Section 19: Status Codes by HTTP Method */}
          <SectionCard number="19" title="Codes by HTTP Method">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 4 }}>
              Which status codes are most relevant to each HTTP method.
            </div>
            {[
              { method: "GET", codes: "200, 304, 404, 206", note: "Use 304 for caching, 206 for ranges" },
              { method: "POST", codes: "201, 400, 409, 422", note: "201 + Location for new resources" },
              { method: "PUT", codes: "200, 204, 404, 409", note: "204 if no body, 409 for conflicts" },
              { method: "PATCH", codes: "200, 204, 404, 422", note: "422 for invalid patch operations" },
              { method: "DELETE", codes: "204, 404, 409", note: "204 is preferred, no body needed" },
              { method: "OPTIONS", codes: "204, 405", note: "204 for CORS preflight responses" },
              { method: "HEAD", codes: "200, 304, 404", note: "Same as GET but no body returned" },
            ].map(({ method, codes, note }, i) => (
              <div
                key={method}
                style={{
                  display: "grid",
                  gridTemplateColumns: "55px 1fr 1fr",
                  gap: 6,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                  fontSize: 11,
                  alignItems: "center",
                }}
              >
                <strong style={{ color: palette.accent, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5 }}>{method}</strong>
                <span style={{ color: palette.dark, fontWeight: 600 }}>{codes}</span>
                <span style={{ color: palette.mid }}>{note}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 20: Debugging Status Codes */}
          <SectionCard number="20" title="Debugging Common Codes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Common causes and fixes for frequently encountered errors.
            </div>
            <KV k="502 Bad Gateway" v="Check if upstream service is running, verify proxy config" />
            <KV k="504 Gateway Timeout" v="Increase timeout settings, check upstream server load" />
            <KV k="503 Service Unavailable" v="Check server capacity, look for deployment issues" />
            <KV k="413 Payload Too Large" v="Increase body size limit in reverse proxy (nginx: client_max_body_size)" />
            <KV k="405 Method Not Allowed" v="Check route definitions, ensure correct HTTP verb" />
            <KV k="CORS errors" v="Not a status code — check Access-Control headers in preflight" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Tip:</strong> If you see 502/504 in production, check your load balancer and reverse proxy logs before looking at app code.
              </div>
            </div>
          </SectionCard>

          {/* Section 21: Quick Reference: Most Used */}
          <SectionCard number="21" title="The 15 Codes Every Developer Must Know" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
              {[
                { code: "200", name: "OK", cat: "success", desc: "Standard success response for GET requests" },
                { code: "201", name: "Created", cat: "success", desc: "New resource created — return with Location header" },
                { code: "204", name: "No Content", cat: "success", desc: "Success with no response body (DELETE, PUT)" },
                { code: "301", name: "Moved Permanently", cat: "redirect", desc: "URL changed forever — search engines update index" },
                { code: "304", name: "Not Modified", cat: "redirect", desc: "Cached version is still valid, skip download" },
                { code: "400", name: "Bad Request", cat: "client", desc: "Malformed syntax, missing required fields" },
                { code: "401", name: "Unauthorized", cat: "client", desc: "Must authenticate — include WWW-Authenticate" },
                { code: "403", name: "Forbidden", cat: "client", desc: "Authenticated but insufficient permissions" },
                { code: "404", name: "Not Found", cat: "client", desc: "Resource doesn't exist at this URL" },
                { code: "409", name: "Conflict", cat: "client", desc: "State conflict — duplicate or version mismatch" },
                { code: "422", name: "Unprocessable", cat: "client", desc: "Valid syntax but semantic validation failed" },
                { code: "429", name: "Too Many Reqs", cat: "client", desc: "Rate limited — check Retry-After header" },
                { code: "500", name: "Internal Error", cat: "server", desc: "Unhandled server exception — generic catch-all" },
                { code: "502", name: "Bad Gateway", cat: "server", desc: "Upstream server returned invalid response" },
                { code: "503", name: "Unavailable", cat: "server", desc: "Server overloaded or in maintenance mode" },
              ].map(({ code, name, cat, desc }) => {
                const catColors = { success: "#5a8a3c", redirect: "#8a6a3a", client: "#c0582a", server: "#a53a3a" };
                return (
                  <div
                    key={code}
                    style={{
                      background: palette.highlight,
                      borderRadius: 8,
                      padding: "10px 12px",
                      border: `1px solid ${palette.cardBorder}`,
                    }}
                  >
                    <div style={{ fontSize: 20, marginBottom: 2, fontWeight: 900, color: palette.accent, fontFamily: "'JetBrains Mono', monospace" }}>{code}</div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, marginBottom: 2 }}>{name}</div>
                    <Tag color={catColors[cat]}>{cat}</Tag>
                    <div style={{ fontSize: 10, color: palette.mid, marginTop: 4, lineHeight: 1.4 }}>{desc}</div>
                  </div>
                );
              })}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 0 18px",
          fontSize: 12,
          color: palette.mid,
          fontFamily: "'Georgia', serif",
        }}
      >
        HTTP Status Codes Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on RFC 9110 (HTTP Semantics) · RFC 7807 (Problem Details) · RFC 6585 (Additional Status Codes)
        </span>
      </div>
    </div>
  );
}
