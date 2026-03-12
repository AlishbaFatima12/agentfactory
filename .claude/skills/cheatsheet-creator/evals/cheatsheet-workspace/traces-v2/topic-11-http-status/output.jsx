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

export default function HttpStatusCodesCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Status Codes", "Page 2: Patterns & Best Practices"];

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
          1xx Informational · 2xx Success · 3xx Redirection · 4xx/5xx Errors — 2026 Edition
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

      {/* Page 1 */}
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
          {/* Section 1 — How Status Codes Work */}
          <SectionCard number="1" title="How Status Codes Work">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every HTTP response includes a 3-digit status code indicating the outcome of the request.
            </div>
            <KV k="First digit" v="Defines the response class (1-5)" />
            <KV k="Full code" v="Specific meaning within the class" />
            <KV k="Reason phrase" v="Human-readable text (optional in HTTP/2)" />
            <KV k="Response body" v="May include details depending on code" />
            <Bullet>Clients use status codes to decide how to handle the response</Bullet>
            <Bullet>Proxies and caches rely on codes for caching and retry logic</Bullet>
          </SectionCard>

          {/* Section 2 — 1xx Informational */}
          <SectionCard number="2" title="1xx Informational">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">INFORMATIONAL</Tag>
            </div>
            <RefRow cmd="100" desc="Continue — server received headers, client should send body" />
            <RefRow cmd="101" desc="Switching Protocols — upgrading to WebSocket or HTTP/2" />
            <RefRow cmd="102" desc="Processing — request received, still working (WebDAV)" />
            <RefRow cmd="103" desc="Early Hints — preload resources while server prepares response" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Note:</strong> 1xx responses are interim — a final response always follows.
              </div>
            </div>
          </SectionCard>

          {/* Section 3 — 2xx Success */}
          <SectionCard number="3" title="2xx Success">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">SUCCESS</Tag>
            </div>
            <RefRow cmd="200" desc="OK — standard success response" />
            <RefRow cmd="201" desc="Created — new resource created (return Location header)" />
            <RefRow cmd="202" desc="Accepted — request queued for async processing" />
            <RefRow cmd="204" desc="No Content — success with empty body (DELETE, PUT)" />
            <RefRow cmd="206" desc="Partial Content — range request fulfilled (streaming)" />
            <RefRow cmd="207" desc="Multi-Status — batch results with per-item status (WebDAV)" />
          </SectionCard>

          {/* Section 4 — 3xx Redirection */}
          <SectionCard number="4" title="3xx Redirection">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">REDIRECT</Tag>
            </div>
            <RefRow cmd="301" desc="Moved Permanently — update bookmarks, SEO passes to new URL" />
            <RefRow cmd="302" desc="Found — temporary redirect (method may change to GET)" />
            <RefRow cmd="303" desc="See Other — redirect to GET after POST (PRG pattern)" />
            <RefRow cmd="304" desc="Not Modified — use cached version (conditional request)" />
            <RefRow cmd="307" desc="Temporary Redirect — preserves HTTP method exactly" />
            <RefRow cmd="308" desc="Permanent Redirect — like 301 but preserves HTTP method" />
          </SectionCard>

          {/* Section 5 — 4xx Client Errors: Common */}
          <SectionCard number="5" title="4xx Client Errors — Common">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">CLIENT ERROR</Tag>
            </div>
            <RefRow cmd="400" desc="Bad Request — malformed syntax, invalid parameters" />
            <RefRow cmd="401" desc="Unauthorized — authentication required or failed" />
            <RefRow cmd="403" desc="Forbidden — authenticated but insufficient permissions" />
            <RefRow cmd="404" desc="Not Found — resource does not exist at this URI" />
            <RefRow cmd="405" desc="Method Not Allowed — wrong HTTP verb for this endpoint" />
            <RefRow cmd="406" desc="Not Acceptable — can't match Accept header requirements" />
          </SectionCard>

          {/* Section 6 — 4xx Client Errors: Extended */}
          <SectionCard number="6" title="4xx Client Errors — Extended">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">CLIENT ERROR</Tag>
              <Tag color="#7a5a8a">ADVANCED</Tag>
            </div>
            <RefRow cmd="408" desc="Request Timeout — client took too long to send request" />
            <RefRow cmd="409" desc="Conflict — state conflict (e.g., duplicate resource)" />
            <RefRow cmd="410" desc="Gone — resource permanently deleted (stronger than 404)" />
            <RefRow cmd="412" desc="Precondition Failed — conditional header check failed" />
            <RefRow cmd="415" desc="Unsupported Media Type — wrong Content-Type sent" />
            <RefRow cmd="422" desc="Unprocessable Entity — valid syntax but semantic errors" />
            <RefRow cmd="429" desc="Too Many Requests — rate limit exceeded" />
            <RefRow cmd="451" desc="Unavailable for Legal Reasons — censorship/legal block" />
          </SectionCard>

          {/* Section 7 — 5xx Server Errors */}
          <SectionCard number="7" title="5xx Server Errors">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">SERVER ERROR</Tag>
            </div>
            <RefRow cmd="500" desc="Internal Server Error — generic unhandled server failure" />
            <RefRow cmd="501" desc="Not Implemented — server doesn't support the method" />
            <RefRow cmd="502" desc="Bad Gateway — upstream server returned invalid response" />
            <RefRow cmd="503" desc="Service Unavailable — server overloaded or in maintenance" />
            <RefRow cmd="504" desc="Gateway Timeout — upstream server didn't respond in time" />
            <RefRow cmd="507" desc="Insufficient Storage — server can't store the representation" />
          </SectionCard>

          {/* Section 8 — Status Categories at a Glance */}
          <SectionCard number="8" title="Status Categories at a Glance" span={2}>
            {[
              { code: "1xx", name: "Informational", desc: "Request received, processing continues. Interim response before final.", color: "#3a6ea5" },
              { code: "2xx", name: "Success", desc: "Request successfully received, understood, and accepted.", color: "#5a8a3c" },
              { code: "3xx", name: "Redirection", desc: "Further action needed to complete the request. Follow Location header.", color: "#8a6a3a" },
              { code: "4xx", name: "Client Error", desc: "Request contains bad syntax or cannot be fulfilled. Fix the request.", color: "#a53a3a" },
              { code: "5xx", name: "Server Error", desc: "Server failed to fulfill a valid request. Retry or check server logs.", color: "#a53a3a" },
            ].map(({ code, name, desc, color }, i) => (
              <div
                key={code}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 5,
                  padding: "6px 10px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <Tag color={color}>{code}</Tag>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 100, flexShrink: 0 }}>{name}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 9 — Response Headers by Code */}
          <SectionCard number="9" title="Key Response Headers by Code">
            <KV k="Location" v="Required for 201, 301, 302, 307, 308 redirects" />
            <KV k="Retry-After" v="Recommended for 429 and 503 responses" />
            <KV k="WWW-Authenticate" v="Required for 401 responses" />
            <KV k="Allow" v="Required for 405 — lists valid methods" />
            <KV k="ETag / Last-Modified" v="Used with 304 conditional caching" />
            <KV k="Content-Range" v="Required for 206 partial content" />
          </SectionCard>
        </div>
      )}

      {/* Page 2 */}
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
          {/* Section 10 — REST API Best Practices */}
          <SectionCard number="10" title="REST API Best Practices">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Match status codes to CRUD operations for predictable APIs.
            </div>
            <KV k="GET success" v="200 with body, or 204 if empty collection" />
            <KV k="POST create" v="201 with Location header pointing to new resource" />
            <KV k="PUT/PATCH update" v="200 with updated resource, or 204 if no body" />
            <KV k="DELETE remove" v="204 No Content (most common), or 200 with confirmation" />
            <Bullet><strong>Validation failure</strong> — use 422 not 400 when syntax is valid but semantics fail</Bullet>
            <Bullet><strong>Async operations</strong> — return 202 Accepted with a polling URL</Bullet>
          </SectionCard>

          {/* Section 11 — Caching & Conditional Requests */}
          <SectionCard number="11" title="Caching & Conditional Requests">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">CACHING</Tag>
              <Tag color="#3a6ea5">PERFORMANCE</Tag>
            </div>
            <Bullet><strong>ETag</strong> — server returns a fingerprint; client sends <code>If-None-Match</code></Bullet>
            <Bullet><strong>Last-Modified</strong> — timestamp; client sends <code>If-Modified-Since</code></Bullet>
            <Bullet><strong>304 response</strong> — server confirms cache is fresh, no body sent</Bullet>
            <Bullet><strong>Cache-Control</strong> — controls proxy and browser caching behavior</Bullet>
            <Code>{`# Response with caching headers
HTTP/1.1 200 OK
ETag: "abc123"
Cache-Control: max-age=3600

# Conditional request
GET /resource
If-None-Match: "abc123"

# If unchanged → 304 Not Modified`}</Code>
          </SectionCard>

          {/* Section 12 — Authentication vs Authorization */}
          <SectionCard number="12" title="401 vs 403 — Auth Explained">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">SECURITY</Tag>
            </div>
            <KV k="401 Unauthorized" v="Identity unknown — login or provide valid credentials" />
            <KV k="403 Forbidden" v="Identity known but lacks permission for this resource" />
            <KV k="Key difference" v="401 = 'who are you?', 403 = 'you can't do that'" />
            <KV k="WWW-Authenticate" v="Must be included in 401 responses per spec" />
            <Code>{`# 401 — Missing or invalid token
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="api"

# 403 — Valid token, wrong role
HTTP/1.1 403 Forbidden
{ "error": "Admin role required" }`}</Code>
          </SectionCard>

          {/* Section 13 — API Error Response Patterns */}
          <SectionCard number="13" title="API Error Response Patterns">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Standard error body formats for consistent API design.
            </div>
            <Code>{`// RFC 7807 Problem Details
{
  "type": "/errors/validation",
  "title": "Validation Failed",
  "status": 422,
  "detail": "Email format invalid",
  "instance": "/users/signup"
}

// Simple error envelope
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests",
    "retry_after": 30
  }
}`}</Code>
            <Bullet><strong>RFC 7807</strong> — standard problem details format for HTTP APIs</Bullet>
            <Bullet>Always include a machine-readable error code alongside the message</Bullet>
          </SectionCard>

          {/* Section 14 — Rate Limiting (429) */}
          <SectionCard number="14" title="Rate Limiting — 429">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">THROTTLING</Tag>
            </div>
            <RefRow cmd="Retry-After" desc="Seconds or date until client can retry" />
            <RefRow cmd="X-RateLimit-Limit" desc="Max requests allowed per window" />
            <RefRow cmd="X-RateLimit-Remaining" desc="Requests left in current window" />
            <RefRow cmd="X-RateLimit-Reset" desc="Unix timestamp when the window resets" />
            <Code>{`HTTP/1.1 429 Too Many Requests
Retry-After: 60
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1710200000`}</Code>
          </SectionCard>

          {/* Section 15 — Redirect Decision Guide */}
          <SectionCard number="15" title="Redirect Decision Guide" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "301 Moved Permanently", when: "URL changed forever", best: "Domain migration, URL restructuring. SEO juice transfers. Browsers cache aggressively.", icon: "301" },
                { title: "302 Found", when: "Temporary redirect", best: "A/B testing, maintenance pages. Method may change to GET. Legacy default redirect.", icon: "302" },
                { title: "307 Temporary Redirect", when: "Keep method + body", best: "POST redirects, API versioning. Guarantees method preservation. Preferred over 302.", icon: "307" },
                { title: "308 Permanent Redirect", when: "Permanent + keep method", best: "API endpoint moves. Like 301 but method stays the same. Modern replacement for 301.", icon: "308" },
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

          {/* Section 16 — WebSocket & HTTP/2 Codes */}
          <SectionCard number="16" title="WebSocket & HTTP/2 Codes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">PROTOCOL</Tag>
            </div>
            <KV k="101 Upgrade" v="Switches from HTTP to WebSocket via Upgrade header" />
            <KV k="HTTP/2 GOAWAY" v="Server shutting down, includes last processed stream ID" />
            <KV k="HTTP/2 RST_STREAM" v="Terminates a single stream with an error code" />
            <KV k="HTTP/3 (QUIC)" v="Same status codes as HTTP/2 over UDP transport" />
            <Code>{`# WebSocket upgrade handshake
GET /chat HTTP/1.1
Upgrade: websocket
Connection: Upgrade

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade`}</Code>
          </SectionCard>

          {/* Section 17 — Security-Related Codes */}
          <SectionCard number="17" title="Security-Related Codes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">SECURITY</Tag>
              <Tag color="#2a7a7a">CORS</Tag>
            </div>
            <Bullet><strong>403 + CORS</strong> — browser blocks cross-origin requests missing <code>Access-Control-Allow-Origin</code></Bullet>
            <Bullet><strong>401 + CORS</strong> — preflight OPTIONS must return 200 before auth headers are sent</Bullet>
            <Bullet><strong>451 Legal</strong> — content blocked due to legal order; include <code>Link</code> header to legal authority</Bullet>
            <Bullet><strong>407 Proxy Auth</strong> — like 401 but for proxy authentication (corporate networks)</Bullet>
            <Bullet><strong>HSTS</strong> — 301 redirect HTTP to HTTPS with <code>Strict-Transport-Security</code> header</Bullet>
          </SectionCard>

          {/* Section 18 — Quick Debugging Checklist */}
          <SectionCard number="18" title="Quick Debugging Checklist">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              What to check when you encounter each error class.
            </div>
            <Bullet><strong>4xx errors</strong> — inspect request URL, headers, body, auth token, and Content-Type</Bullet>
            <Bullet><strong>401/403</strong> — verify token expiry, scope/role, and correct auth header format</Bullet>
            <Bullet><strong>5xx errors</strong> — check server logs, database connectivity, and upstream dependencies</Bullet>
            <Bullet><strong>502/504</strong> — look at reverse proxy config, upstream health, and timeout settings</Bullet>
            <Bullet><strong>CORS issues</strong> — check OPTIONS preflight response headers on the server side</Bullet>
            <Bullet><strong>429 rate limits</strong> — implement exponential backoff and respect Retry-After header</Bullet>
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
