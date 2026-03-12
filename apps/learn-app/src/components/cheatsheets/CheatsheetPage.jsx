import { useState, useEffect, useCallback } from "react";
import ClaudeCodeCheatsheet from "./claude-code-cheatsheet";

const palette = {
  accent: "#c0582a",
  accentLight: "#e87a45",
  dark: "#2c1810",
  mid: "#5a3e2b",
  cardBorder: "#e8d5c4",
  highlight: "#fff3e6",
};

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
        background: palette.dark,
        borderBottom: `1px solid ${palette.cardBorder}30`,
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
              background: isActive ? palette.accentLight + "18" : "transparent",
              border: isActive
                ? `1px solid ${palette.accentLight}60`
                : "1px solid transparent",
              borderRadius: 5,
              padding: "7px 18px",
              fontSize: 13,
              fontWeight: isActive ? 700 : 500,
              fontFamily: "'Georgia', serif",
              color: isDisabled ? "#ddd" : isActive ? "#fff" : "#f0ebe4",
              cursor: isDisabled ? "default" : "pointer",
              opacity: isDisabled ? 0.45 : 1,
              transition: "all 0.15s",
              letterSpacing: 0.2,
            }}
            onMouseEnter={(e) => {
              if (!isDisabled && !isActive) {
                e.currentTarget.style.background = palette.accentLight + "10";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              if (!isDisabled && !isActive) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#f0ebe4";
              }
            }}
          >
            {label}
            {isDisabled && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  background: "#4a3828",
                  color: "#f0ebe4",
                  borderRadius: 3,
                  padding: "2px 6px",
                  marginLeft: 7,
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                  fontFamily: "'Segoe UI', sans-serif",
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
          border: "1px solid #4a3a2a",
          borderRadius: 4,
          padding: "5px 14px",
          fontSize: 11,
          color: "#f0ebe4",
          cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace",
          transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = palette.accentLight + "80";
          e.currentTarget.style.color = palette.accentLight;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#4a3a2a";
          e.currentTarget.style.color = "#f0ebe4";
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
          background: "#faf5ef",
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
            color: palette.mid,
            fontSize: 14,
          }}
        >
          This cheatsheet is coming soon.
        </div>
      )}
    </div>
  );
}
