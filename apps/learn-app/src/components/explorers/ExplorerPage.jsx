import { useState, useEffect } from "react";
import AgentFactoryExplorer from "./agent-factory-explorer";

const HASH_TO_ID = {
  "#claude-code": "agent-factory",
  "#claudecode": "agent-factory",
  "#agent-factory": "agent-factory",
  "#cowork": "cowork",
};

const ID_TO_HASH = {
  "agent-factory": "#claude-code",
  cowork: "#cowork",
};

const explorers = [
  {
    id: "agent-factory",
    label: "Claude Code Project Lab",
    component: AgentFactoryExplorer,
  },
  { id: "cowork", label: "Cowork Project Lab", component: null },
];

function getInitialFromHash() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.toLowerCase();
  return HASH_TO_ID[hash] || null;
}

export default function ExplorerPage() {
  const hashTarget = getInitialFromHash();
  const [active, setActive] = useState(hashTarget || "agent-factory");
  const [fullscreen, setFullscreen] = useState(!!hashTarget);

  const ActiveComponent =
    explorers.find((t) => t.id === active)?.component || null;

  // Sync hash to URL when switching explorers
  function switchExplorer(id) {
    setActive(id);
    const hash = ID_TO_HASH[id];
    if (hash) {
      window.history.replaceState(null, "", hash);
    }
  }

  // Listen for hash changes (e.g. navigating to #claudecode)
  useEffect(() => {
    function onHashChange() {
      const id = HASH_TO_ID[window.location.hash.toLowerCase()];
      if (id) {
        setActive(id);
        setFullscreen(true);
      }
    }
    window.addEventListener("hashchange", onHashChange);
    // Also check on mount (handles direct navigation with hash)
    const mountId = getInitialFromHash();
    if (mountId) {
      setActive(mountId);
      setFullscreen(true);
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Hide Docusaurus navbar/footer when fullscreen
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

  if (fullscreen && ActiveComponent) {
    return (
      <div
        className="allow-rounded"
        data-theme="dark"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          background: "#0e0c08",
          colorScheme: "dark",
        }}
      >
        {/* Compact top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            background: "#0a0806",
            borderBottom: "1px solid #1e1a14",
            flexShrink: 0,
          }}
        >
          {explorers.map(({ id, label, component }) => (
            <button
              key={id}
              onClick={() => {
                if (component) switchExplorer(id);
              }}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  active === id
                    ? "2px solid #c47a50"
                    : "2px solid transparent",
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: active === id ? 700 : 400,
                fontFamily: "'JetBrains Mono', monospace",
                color: !component
                  ? "#ddd"
                  : active === id
                    ? "#fff"
                    : "#f0ebe4",
                cursor: component ? "pointer" : "default",
                opacity: component ? 1 : 0.5,
                transition: "all 0.15s",
              }}
            >
              {label}
              {!component && (
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    background: "#1a1814",
                    color: "#f0ebe4",
                    borderRadius: 3,
                    padding: "1px 5px",
                    marginLeft: 6,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  Soon
                </span>
              )}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <button
            onClick={() => {
              setFullscreen(false);
              window.history.replaceState(
                null,
                "",
                window.location.pathname,
              );
            }}
            style={{
              background: "none",
              border: "1px solid #2a2218",
              borderRadius: 4,
              padding: "4px 12px",
              marginRight: 12,
              fontSize: 11,
              color: "#f0ebe4",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#e8a07080";
              e.currentTarget.style.color = "#e8a070";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2218";
              e.currentTarget.style.color = "#d4b8a0";
            }}
            title="Exit fullscreen"
          >
            Exit
          </button>
        </div>
        {/* Sim lab fills remaining space */}
        <div style={{ flex: 1, minHeight: 0 }}>
          <ActiveComponent />
        </div>
      </div>
    );
  }

  // Inline fallback (non-fullscreen or no component)
  return (
    <div className="allow-rounded">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {explorers.map(({ id, label, component }) => (
          <button
            key={id}
            onClick={() => {
              if (component) {
                switchExplorer(id);
                setFullscreen(true);
              }
            }}
            style={{
              background: active === id ? "var(--primary, #1a3a6a)" : "none",
              border: active === id
                ? "1px solid var(--primary, #1a3a6a)"
                : "1px solid var(--border, #e0e0e0)",
              borderRadius: 6,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: active === id ? 700 : 500,
              color: !component
                ? "var(--muted-foreground)"
                : active === id
                  ? "#fff"
                  : "var(--foreground)",
              cursor: component ? "pointer" : "default",
              opacity: component ? 1 : 0.5,
              transition: "all 0.2s",
            }}
          >
            {label}
            {!component && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  background: "var(--muted)",
                  color: "var(--muted-foreground)",
                  borderRadius: 4,
                  padding: "2px 6px",
                  marginLeft: 6,
                  textTransform: "uppercase",
                }}
              >
                Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {ActiveComponent ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <p style={{ color: "#555", fontSize: 15, marginBottom: 16 }}>
            This simulation lab works best in fullscreen.
          </p>
          <button
            onClick={() => {
              switchExplorer(active);
              setFullscreen(true);
            }}
            style={{
              background: "var(--primary, #1a3a6a)",
              color: "var(--primary-foreground, #fff)",
              border: "none",
              borderRadius: 6,
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Launch Fullscreen
          </button>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "var(--muted-foreground)",
            fontSize: 14,
          }}
        >
          This simulation lab is coming soon.
        </div>
      )}
    </div>
  );
}
