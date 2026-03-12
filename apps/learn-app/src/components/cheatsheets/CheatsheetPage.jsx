import { useState, useEffect, useCallback } from "react";
import ClaudeCodeCheatsheet from "./claude-code-cheatsheet";
import CoworkCheatsheet from "./cowork-cheatsheet";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

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
  {
    id: "cowork",
    hash: "cowork",
    label: "Cowork",
    component: CoworkCheatsheet,
  },
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
        display: "inline-flex",
        marginBottom: "8px",
        alignSelf: "flex-start",
      }}
    >
      <style>{`
        .cheatsheet-tab-list {
          background: rgba(0,0,0,0.05) !important;
          border-radius: 6px !important;
          padding: 3px !important;
          border: 1px solid rgba(0,0,0,0.04) !important;
        }
        .cheatsheet-tab-trigger[data-state="active"] {
          background-color: #ffffff !important;
          color: ${palette.dark} !important;
          border-radius: 4px !important;
          box-shadow: 0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04) !important;
        }
        .cheatsheet-tab-trigger:not([data-state="active"]):hover {
          background-color: rgba(255,255,255,0.4) !important;
          color: ${palette.dark} !important;
        }
        .cheatsheet-tab-trigger {
          background-color: transparent !important; 
          color: rgba(0,0,0,0.75) !important;
          border-radius: 4px !important;
        }
        html[data-theme='dark'] .cheatsheet-tab-list {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,255,255,0.03) !important;
        }
        html[data-theme='dark'] .cheatsheet-tab-trigger[data-state="active"] {
          background-color: rgba(255,255,255,0.1) !important;
          color: rgba(255,255,255,0.9) !important;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08) !important;
        }
        html[data-theme='dark'] .cheatsheet-tab-trigger:not([data-state="active"]):hover {
          background-color: rgba(255,255,255,0.05) !important;
          color: #ffffff !important;
        }
        html[data-theme='dark'] .cheatsheet-tab-trigger:not([data-state="active"]) {
          color: rgba(255,255,255,0.65) !important;
        }
      `}</style>
      <Tabs value={active} onValueChange={navigate}>
        <TabsList
          className="cheatsheet-tab-list"
          style={{
            display: "inline-flex",
            gap: "2px",
            padding: 0,
            margin: 0,
          }}
        >
          {topics.map(({ id, label, component }) => {
            const isDisabled = !component;
            return (
              <TabsTrigger
                key={id}
                value={id}
                disabled={isDisabled}
                className="cheatsheet-tab-trigger"
                style={{
                  padding: "6px 20px",
                  fontFamily: "'Segoe UI', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.15s ease",
                  outline: "none",
                  cursor: "pointer",
                  position: "relative",
                  ...(active === id && {
                    // Inject a psuedo-element style underline effect via inline box-shadow on top of the flattening shadow
                    boxShadow: `0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04), 0 -2.5px 0 0 ${palette.accent} inset !important`, 
                  })
                }}
              >
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
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
    <div style={{ marginTop: "-0.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
