import { useState, useEffect, useCallback } from "react";
import ClaudeCodeCheatsheet from "./claude-code-cheatsheet";

const topics = [
  {
    id: "claude-code",
    hash: "claudecode",
    label: "Claude Code",
    component: ClaudeCodeCheatsheet,
  },
  { id: "cowork", hash: "cowork", label: "Cowork", component: null },
  { id: "openclaw", hash: "openclaw", label: "OpenClaw", component: null },
];

function getActiveFromHash() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  const match = topics.find((t) => t.hash === hash);
  return match ? match.id : "claude-code";
}

export default function CheatsheetPage() {
  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") return getActiveFromHash();
    return "claude-code";
  });
  const [fullscreen, setFullscreen] = useState(false);

  const navigate = useCallback((id) => {
    const topic = topics.find((t) => t.id === id);
    if (topic) {
      window.location.hash = topic.hash;
      setActive(id);
    }
  }, []);

  // Sync state when hash changes (back/forward navigation)
  useEffect(() => {
    const onHash = () => setActive(getActiveFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const ActiveComponent =
    topics.find((t) => t.id === active)?.component || null;

  // Hide Docusaurus chrome when fullscreen
  useEffect(() => {
    if (!fullscreen) return;
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector(".footer");
    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";
    document.documentElement.style.overflow = "hidden";
    return () => {
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
      document.documentElement.style.overflow = "";
    };
  }, [fullscreen]);

  const toolbar = (
    <div
      className="cheatsheet-toolbar"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "5px 16px",
        background: "var(--foreground)",
        borderBottom: "1px solid var(--border)",
        flexShrink: 0,
      }}
    >
      {topics.map(({ id, label, component }) => {
        const isActive = active === id;
        const isDisabled = !component;
        return (
          <button
            key={id}
            onClick={() => component && navigate(id)}
            style={{
              background: isActive
                ? "oklch(1 0 0 / 12%)"
                : "transparent",
              border: isActive
                ? "1px solid oklch(1 0 0 / 25%)"
                : "1px solid transparent",
              padding: "7px 18px",
              fontSize: 13,
              fontWeight: isActive ? 700 : 500,
              fontFamily: "var(--font-sans)",
              color: isDisabled
                ? "oklch(1 0 0 / 30%)"
                : isActive
                  ? "var(--background)"
                  : "oklch(1 0 0 / 65%)",
              cursor: isDisabled ? "default" : "pointer",
              opacity: isDisabled ? 0.45 : 1,
              transition: "all 0.15s",
              letterSpacing: 0.2,
            }}
            onMouseEnter={(e) => {
              if (!isDisabled && !isActive) {
                e.currentTarget.style.background = "oklch(1 0 0 / 6%)";
                e.currentTarget.style.color = "oklch(1 0 0 / 80%)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isDisabled && !isActive) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "oklch(1 0 0 / 65%)";
              }
            }}
          >
            {label}
            {isDisabled && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  background: "oklch(1 0 0 / 8%)",
                  color: "oklch(1 0 0 / 35%)",
                  padding: "2px 6px",
                  marginLeft: 7,
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                  fontFamily: "var(--font-sans)",
                }}
              >
                Soon
              </span>
            )}
          </button>
        );
      })}
      <div style={{ flex: 1 }} />
      <button
        onClick={() => setFullscreen(!fullscreen)}
        title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
        style={{
          background: "none",
          border: "1px solid oklch(1 0 0 / 15%)",
          padding: "5px 14px",
          fontSize: 11,
          color: "oklch(1 0 0 / 55%)",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "oklch(1 0 0 / 30%)";
          e.currentTarget.style.color = "oklch(1 0 0 / 80%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "oklch(1 0 0 / 15%)";
          e.currentTarget.style.color = "oklch(1 0 0 / 55%)";
        }}
      >
        {fullscreen ? "Exit" : "Fullscreen"}
      </button>
    </div>
  );

  // Fullscreen mode
  if (fullscreen && ActiveComponent) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          background: "var(--background)",
        }}
      >
        {toolbar}
        <div style={{ flex: 1, overflow: "auto" }}>
          <ActiveComponent />
        </div>
      </div>
    );
  }

  // Inline mode
  return (
    <div>
      {toolbar}
      {ActiveComponent ? (
        <ActiveComponent />
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "var(--muted-foreground)",
            fontSize: 14,
          }}
        >
          This cheatsheet is coming soon.
        </div>
      )}
    </div>
  );
}
