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
        width: 140,
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

export default function TailwindV4Cheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Changes", "Page 2: Advanced & Migration"];

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
          Tailwind CSS v4{" "}
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
          {"What's New"} · v3 {"→"} v4 Migration · CSS-First Config — 2025 Edition
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

      {/* Page 1: Core Changes */}
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
          {/* 1 — Installation & Setup */}
          <SectionCard number="1" title="Installation & Setup">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">VITE</Tag>
              <Tag color="#7a5a8a">POSTCSS</Tag>
              <Tag color="#5a8a3c">CLI</Tag>
            </div>
            <Code>{`# Vite (recommended)
npm install tailwindcss @tailwindcss/vite
# vite.config.ts
import tailwindcss from '@tailwindcss/vite'
export default { plugins: [tailwindcss()] }

# PostCSS (alternative)
npm install tailwindcss @tailwindcss/postcss`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>Vite plugin is now the <strong>primary</strong> integration method</Bullet>
              <Bullet>PostCSS plugin still works but Vite plugin is faster</Bullet>
              <Bullet>No more <code>npx tailwindcss init</code> — config lives in CSS now</Bullet>
              <Bullet><code>tailwind.config.js</code> is optional, only for JS-based overrides</Bullet>
            </div>
          </SectionCard>

          {/* 2 — CSS-First Configuration */}
          <SectionCard number="2" title="CSS-First Configuration">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The biggest paradigm shift: configuration moves from JS to CSS.
            </div>
            <Code>{`/* v3 — old way */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* v4 — new way */
@import "tailwindcss";`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet>Single <code>@import "tailwindcss"</code> replaces all three directives</Bullet>
              <Bullet>No <code>tailwind.config.js</code> needed for most projects</Bullet>
              <Bullet>Design tokens defined via <code>@theme</code> in your CSS</Bullet>
              <Bullet>Content paths auto-detected — no <code>content: [...]</code> array</Bullet>
              <Bullet>Layer system uses native CSS <code>@layer</code></Bullet>
            </div>
          </SectionCard>

          {/* 3 — @theme Directive */}
          <SectionCard number="3" title="@theme Directive">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Replace your entire <code>theme.extend</code> config with pure CSS.
            </div>
            <Code>{`@import "tailwindcss";

@theme {
  --color-brand: #4a80c4;
  --color-surface: oklch(0.97 0.01 250);
  --font-heading: "Inter", sans-serif;
  --breakpoint-3xl: 1920px;
  --spacing-18: 4.5rem;
  --ease-bounce: cubic-bezier(.68,-.55,.27,1.55);
}`}</Code>
            <Bullet>Uses CSS custom properties under the hood</Bullet>
            <Bullet>All tokens become utilities automatically (e.g. <code>bg-brand</code>)</Bullet>
            <Bullet>Supports any valid CSS value including <code>oklch()</code></Bullet>
            <Bullet>Namespaced: <code>--color-*</code>, <code>--font-*</code>, <code>--spacing-*</code></Bullet>
          </SectionCard>

          {/* 4 — Automatic Content Detection */}
          <SectionCard number="4" title="Content Detection">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">AUTO</Tag>
              <Tag color="#3a6ea5">@SOURCE</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Tailwind v4 automatically finds your template files. No more manual content arrays.
            </div>
            <Code>{`/* Automatic — scans project files */
@import "tailwindcss";

/* Manual — add extra source paths */
@source "../packages/ui/src";
@source "../content/**/*.mdx";

/* Exclude paths */
@source not "../legacy";`}</Code>
            <Bullet>Scans <code>.html</code>, <code>.js</code>, <code>.ts</code>, <code>.jsx</code>, <code>.tsx</code>, <code>.vue</code>, <code>.svelte</code> automatically</Bullet>
            <Bullet>Respects <code>.gitignore</code> by default</Bullet>
            <Bullet><code>@source</code> adds extra directories to scan</Bullet>
            <Bullet>Use <code>@source not</code> to exclude specific paths</Bullet>
          </SectionCard>

          {/* 5 — New Color System */}
          <SectionCard number="5" title="New Color System">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">OKLCH</Tag>
              <Tag color="#2a7a7a">WIDE GAMUT</Tag>
              <Tag color="#8a6a3a">P3</Tag>
            </div>
            <Code>{`/* oklch color definitions */
@theme {
  --color-primary: oklch(0.6 0.25 260);
  --color-accent: oklch(0.7 0.2 30);
}

/* Opacity modifier still works */
bg-primary/50
text-accent/75`}</Code>
            <Bullet><code>oklch()</code> is the recommended color format — perceptually uniform</Bullet>
            <Bullet>Wide-gamut P3 colors supported on capable displays</Bullet>
            <Bullet>Default palette updated with <code>oklch</code> values for better consistency</Bullet>
            <Bullet>Opacity modifier syntax (<code>/50</code>) unchanged from v3</Bullet>
            <Bullet>Custom colors in <code>@theme</code> accept any CSS color format</Bullet>
          </SectionCard>

          {/* 6 — New Variants */}
          <SectionCard number="6" title="New Variants">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Several new variant modifiers for more precise styling control.
            </div>
            <RefRow cmd="not-*" desc="Negate any variant (not-hover:, not-first:, not-disabled:)" />
            <RefRow cmd="inert:" desc="Style elements with the inert attribute" />
            <RefRow cmd="starting:" desc="@starting-style for entry animations" />
            <RefRow cmd="nth-*:" desc="nth-child variants (nth-3:, nth-last-5:)" />
            <RefRow cmd="in-*:" desc="Style based on parent state (in-open:, in-checked:)" />
            <RefRow cmd="open:" desc="Details/dialog open state (also in v3 late)" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Tip:</strong> <code>not-*</code> is composable — <code>not-last:border-b</code> applies to all except the last child.
              </div>
            </div>
          </SectionCard>

          {/* 7 — Container Queries */}
          <SectionCard number="7" title="Container Queries">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">BUILT-IN</Tag>
              <Tag color="#5a8a3c">NEW</Tag>
            </div>
            <Code>{`/* Mark a container */
<div class="@container">

/* Query container width */
<div class="@sm:flex @lg:grid">

/* Named containers */
<div class="@container/sidebar">
<div class="@sm/sidebar:flex">`}</Code>
            <Bullet>No plugin needed — container queries are now <strong>native</strong></Bullet>
            <Bullet>Uses <code>@container</code> class to define a query context</Bullet>
            <Bullet>Size breakpoints: <code>@sm</code>, <code>@md</code>, <code>@lg</code>, <code>@xl</code>, etc.</Bullet>
            <Bullet>Named containers with <code>@container/name</code> for nested contexts</Bullet>
            <Bullet>Works with all responsive utilities — just prefix with <code>@</code></Bullet>
          </SectionCard>

          {/* 8 — 3D Transforms */}
          <SectionCard number="8" title="3D Transforms">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Full 3D transform support without custom CSS.
            </div>
            <RefRow cmd="rotate-x-*" desc="Rotate around X axis (rotate-x-45)" />
            <RefRow cmd="rotate-y-*" desc="Rotate around Y axis (rotate-y-180)" />
            <RefRow cmd="translate-z-*" desc="Translate along Z axis" />
            <RefRow cmd="scale-z-*" desc="Scale along Z axis" />
            <RefRow cmd="perspective-*" desc="Set perspective (perspective-500)" />
            <RefRow cmd="transform-3d" desc="Enable preserve-3d on parent" />
            <RefRow cmd="backface-hidden" desc="Hide backface of element" />
          </SectionCard>

          {/* 9 — @utility Directive */}
          <SectionCard number="9" title="@utility Directive">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Define custom utilities in CSS that work with variants, responsive, etc.
            </div>
            <Code>{`@utility tab-4 {
  tab-size: 4;
}

@utility scrollbar-hidden {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

/* Functional utility with value */
@utility text-shadow-* {
  text-shadow: 0 2px 4px
    rgb(0 0 0 / calc(var(--value) * 1%));
}`}</Code>
            <Bullet>Replaces <code>@layer utilities</code> pattern from v3</Bullet>
            <Bullet>Works with all variants automatically (<code>hover:tab-4</code>)</Bullet>
            <Bullet>Supports functional values with <code>*</code> wildcard</Bullet>
            <Bullet>Proper cascade ordering — no specificity wars</Bullet>
          </SectionCard>

          {/* 10 — @custom-variant */}
          <SectionCard number="10" title="@custom-variant">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Create your own variants composable with any utility.
            </div>
            <Code>{`@custom-variant theme-dark (&:where(
  [data-theme="dark"] *
));

@custom-variant hocus {
  &:hover, &:focus { @slot; }
}

/* Usage */
theme-dark:bg-gray-900
hocus:text-blue-500`}</Code>
            <Bullet>Replaces <code>addVariant()</code> from plugin API</Bullet>
            <Bullet><code>@slot</code> marks where utility styles are injected</Bullet>
            <Bullet>Supports compound selectors with <code>{"&"}</code></Bullet>
            <Bullet>Composable — <code>theme-dark:hover:text-white</code> works</Bullet>
          </SectionCard>

          {/* 11 — Gradient Enhancements */}
          <SectionCard number="11" title="Gradient Enhancements">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">INTERPOLATION</Tag>
              <Tag color="#8a6a3a">OKLCH</Tag>
            </div>
            <Code>{`/* Gradient with oklch interpolation */
bg-linear-to-r from-red-500
  to-blue-500 via-oklch

/* Radial & conic gradients */
bg-radial from-indigo-500 to-purple-500
bg-conic from-red-500 via-yellow-500
  to-red-500`}</Code>
            <Bullet><code>bg-linear-to-*</code> replaces <code>bg-gradient-to-*</code></Bullet>
            <Bullet>New <code>bg-radial</code> and <code>bg-conic</code> gradient types</Bullet>
            <Bullet>Color interpolation in <code>oklch</code> for smoother gradients</Bullet>
            <Bullet>Via stops with percentages for precise gradient control</Bullet>
            <Bullet>Custom angles: <code>bg-linear-[135deg]</code></Bullet>
          </SectionCard>

          {/* 12 — v3 → v4 Quick Reference */}
          <SectionCard number="12" title={"v3 \u2192 v4 Quick Reference"} span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.accent, marginBottom: 6, textTransform: "uppercase" }}>Configuration</div>
                <RefRow cmd="tailwind.config.js" desc={"@theme in CSS"} />
                <RefRow cmd="content: [...]" desc="Auto-detected" />
                <RefRow cmd="theme.extend" desc="@theme { --key: val }" />
                <RefRow cmd="plugins: [...]" desc="@plugin or @utility" />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.accent, marginBottom: 6, textTransform: "uppercase" }}>Directives</div>
                <RefRow cmd="@tailwind base" desc={'@import "tailwindcss"'} />
                <RefRow cmd="@layer utilities" desc="@utility name {...}" />
                <RefRow cmd="addVariant()" desc="@custom-variant" />
                <RefRow cmd="@screen md" desc="@media (width >= 768px)" />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.accent, marginBottom: 6, textTransform: "uppercase" }}>Utilities</div>
                <RefRow cmd="bg-gradient-to-r" desc="bg-linear-to-r" />
                <RefRow cmd="bg-opacity-50" desc="bg-red-500/50" />
                <RefRow cmd="decoration-slice" desc="box-decoration-slice" />
                <RefRow cmd="flex-grow" desc="grow" />
              </div>
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced & Migration */}
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
          {/* 13 — Dark Mode Changes */}
          <SectionCard number="13" title="Dark Mode Changes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Dark mode is simpler and more powerful in v4.
            </div>
            <Code>{`/* Automatic — uses prefers-color-scheme */
dark:bg-gray-900

/* Selector strategy (manual toggle) */
@variant dark (&:where(.dark *));

/* Using custom data attribute */
@variant dark (&:where(
  [data-theme="dark"] *
));`}</Code>
            <Bullet>Default strategy uses <code>prefers-color-scheme</code> media query</Bullet>
            <Bullet>No <code>darkMode: "class"</code> config needed — use <code>@variant</code> instead</Bullet>
            <Bullet>Selector-based dark mode via <code>@variant</code> replaces old config</Bullet>
            <Bullet>Custom data attributes supported via <code>@variant</code> definitions</Bullet>
          </SectionCard>

          {/* 14 — @plugin Directive */}
          <SectionCard number="14" title="@plugin Directive">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CSS-BASED</Tag>
              <Tag color="#5a8a3c">JS PLUGINS</Tag>
            </div>
            <Code>{`/* Load a JS plugin from CSS */
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";

/* Local plugin */
@plugin "./my-plugin.js";`}</Code>
            <Bullet>Plugins are imported from CSS via <code>@plugin</code> instead of <code>plugins: []</code></Bullet>
            <Bullet>Existing v3 plugins still work with compatibility layer</Bullet>
            <Bullet>Simple utilities are better as <code>@utility</code> definitions</Bullet>
            <Bullet>Complex JS plugins still use the <code>plugin()</code> function API</Bullet>
          </SectionCard>

          {/* 15 — Removed & Renamed Utilities */}
          <SectionCard number="15" title="Removed & Renamed">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Deprecated utilities cleaned up. Update your classes.
            </div>
            {[
              { old: "bg-opacity-*", now: "Use opacity modifier: bg-red-500/50" },
              { old: "text-opacity-*", now: "Use opacity modifier: text-blue-700/80" },
              { old: "border-opacity-*", now: "Use opacity modifier: border-black/20" },
              { old: "flex-shrink", now: "shrink" },
              { old: "flex-grow", now: "grow" },
              { old: "overflow-ellipsis", now: "text-ellipsis" },
              { old: "decoration-slice", now: "box-decoration-slice" },
              { old: "decoration-clone", now: "box-decoration-clone" },
            ].map(({ old, now }, i) => (
              <div
                key={old}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 3,
                  padding: "4px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: "#a53a3a", fontWeight: 700, width: 120, flexShrink: 0, textDecoration: "line-through" }}>{old}</code>
                <span style={{ fontSize: 11, color: palette.mid }}>{now}</span>
              </div>
            ))}
          </SectionCard>

          {/* 16 — Spacing & Sizing */}
          <SectionCard number="16" title="Spacing & Sizing">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The default spacing scale is now based on <code>rem</code> multiples with new additions.
            </div>
            <RefRow cmd="size-*" desc="Sets both width and height simultaneously" />
            <RefRow cmd="w-dvw / h-dvh" desc="Dynamic viewport width/height" />
            <RefRow cmd="w-svw / h-svh" desc="Small viewport units" />
            <RefRow cmd="w-lvw / h-lvh" desc="Large viewport units" />
            <div style={{ marginTop: 6 }}>
              <Bullet>Arbitrary spacing still works: <code>p-[13px]</code></Bullet>
              <Bullet>Dynamic viewport units fix mobile browser address bar issues</Bullet>
              <Bullet>Use <code>size-full</code> instead of <code>w-full h-full</code></Bullet>
              <Bullet><code>@theme</code> accepts custom spacing: <code>--spacing-18: 4.5rem</code></Bullet>
            </div>
          </SectionCard>

          {/* 17 — Typography Updates */}
          <SectionCard number="17" title="Typography Updates">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">TEXT</Tag>
              <Tag color="#2a7a7a">FONT</Tag>
            </div>
            <RefRow cmd="text-wrap-balance" desc="CSS text-wrap: balance" />
            <RefRow cmd="text-wrap-pretty" desc="CSS text-wrap: pretty" />
            <RefRow cmd="text-wrap-nowrap" desc="Prevent text wrapping" />
            <RefRow cmd="font-stretch-*" desc="Font stretch utilities (condensed, expanded)" />
            <div style={{ marginTop: 6 }}>
              <Bullet><code>text-wrap-balance</code> evens out line lengths in headings</Bullet>
              <Bullet><code>text-wrap-pretty</code> prevents orphans in paragraphs</Bullet>
              <Bullet>Custom fonts defined in <code>@theme</code> with <code>--font-*</code> tokens</Bullet>
              <Bullet>Font feature settings via <code>font-*</code> utilities</Bullet>
            </div>
          </SectionCard>

          {/* 18 — New Layout Utilities */}
          <SectionCard number="18" title="New Layout Utilities">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              New CSS features exposed as first-class utilities.
            </div>
            <RefRow cmd="field-sizing-content" desc="Auto-resize textarea to fit content" />
            <RefRow cmd="color-scheme-*" desc="Set color-scheme (light, dark, normal)" />
            <RefRow cmd="forced-colors:*" desc="Variant for forced-colors mode" />
            <RefRow cmd="contrast-more:*" desc="Variant for prefers-contrast: more" />
            <RefRow cmd="contrast-less:*" desc="Variant for prefers-contrast: less" />
            <div style={{ marginTop: 6 }}>
              <Bullet><code>field-sizing-content</code> eliminates JS-based auto-resize hacks</Bullet>
              <Bullet>Accessibility variants help build inclusive interfaces</Bullet>
            </div>
          </SectionCard>

          {/* 19 — Composing Variants */}
          <SectionCard number="19" title="Composing Variants">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Stacking and composing variants is more powerful in v4.
            </div>
            <Code>{`/* Stack multiple variants */
group-hover:first:text-blue-500

/* not-* composable with any variant */
not-last:border-b
not-disabled:hover:bg-blue-500

/* Arbitrary variants still work */
[&:nth-child(3)]:bg-red-500
[@supports(grid)]:grid`}</Code>
            <Bullet>Variants compose left-to-right: <code>dark:hover:text-white</code></Bullet>
            <Bullet><code>not-*</code> negates any existing variant</Bullet>
            <Bullet><code>group-*</code> and <code>peer-*</code> still work identically</Bullet>
            <Bullet>Arbitrary variants with <code>{"[&...]"}</code> for edge cases</Bullet>
          </SectionCard>

          {/* 20 — Vite Plugin Config */}
          <SectionCard number="20" title="Vite Plugin Deep Dive">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">VITE</Tag>
              <Tag color="#5a8a3c">RECOMMENDED</Tag>
            </div>
            <Code>{`// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})`}</Code>
            <Bullet>Works with React, Vue, Svelte, Solid, and vanilla projects</Bullet>
            <Bullet>HMR is <strong>significantly faster</strong> than PostCSS approach</Bullet>
            <Bullet>Automatic CSS injection — no manual import configuration</Bullet>
            <Bullet>Compatible with Vite 5+ and Vite 6</Bullet>
          </SectionCard>

          {/* 21 — PostCSS Setup */}
          <SectionCard number="21" title="PostCSS Setup">
            <Code>{`// postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Package" v="@tailwindcss/postcss" />
              <KV k="When to use" v="Non-Vite bundlers (Webpack, Parcel, etc.)" />
              <KV k="Performance" v="Slower than Vite plugin, still fast" />
              <KV k="Compatibility" v="Works with any PostCSS pipeline" />
            </div>
            <Bullet>Replaces the old <code>tailwindcss</code> PostCSS plugin</Bullet>
            <Bullet>Same CSS-first config, just different bundler integration</Bullet>
          </SectionCard>

          {/* 22 — @apply Changes */}
          <SectionCard number="22" title="@apply & @reference">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              <code>@apply</code> still works but has key changes. <code>@reference</code> is new.
            </div>
            <Code>{`/* @apply in v4 — same syntax */
.btn {
  @apply px-4 py-2 rounded bg-blue-500;
}

/* @reference for type-safe imports */
@reference "tailwindcss";
@reference "../theme.css";`}</Code>
            <Bullet><code>@apply</code> works inside <code>@utility</code> blocks now</Bullet>
            <Bullet><code>@reference</code> imports theme values without emitting CSS</Bullet>
            <Bullet>Use <code>@reference</code> when you need theme tokens in a separate file</Bullet>
            <Bullet>Prefer <code>@utility</code> over <code>@apply</code> for reusable styles</Bullet>
          </SectionCard>

          {/* 23 — Performance Wins */}
          <SectionCard number="23" title="Performance Wins">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">FAST</Tag>
              <Tag>OXIDE</Tag>
            </div>
            {[
              { metric: "Full build", improvement: "Up to 10x faster than v3" },
              { metric: "Incremental build", improvement: "Up to 100x faster (Vite)" },
              { metric: "CSS output size", improvement: "Smaller due to modern syntax" },
              { metric: "Memory usage", improvement: "Significantly reduced" },
            ].map(({ metric, improvement }, i) => (
              <div
                key={metric}
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 12, width: 120, flexShrink: 0 }}>{metric}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{improvement}</span>
              </div>
            ))}
            <Bullet>New Oxide engine written in Rust for core processing</Bullet>
            <Bullet>Lightning CSS handles CSS minification and transforms</Bullet>
          </SectionCard>

          {/* 24 — Migration Checklist */}
          <SectionCard number="24" title="Migration Checklist" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "1. Update Packages",
                  when: "First step",
                  best: "Install tailwindcss v4, @tailwindcss/vite or @tailwindcss/postcss. Remove old tailwindcss, postcss-import, autoprefixer.",
                  icon: "📦",
                },
                {
                  title: "2. Migrate Config",
                  when: "Replace JS config",
                  best: "Move tailwind.config.js theme values into @theme {} block in your CSS. Run npx @tailwindcss/upgrade for automated help.",
                  icon: "⚙️",
                },
                {
                  title: "3. Update Imports",
                  when: "CSS entry point",
                  best: "Replace @tailwind base/components/utilities with single @import \"tailwindcss\". Move @layer to @utility.",
                  icon: "📝",
                },
                {
                  title: "4. Fix Utilities",
                  when: "Final cleanup",
                  best: "Replace deprecated classes: bg-opacity-* with /opacity, flex-grow with grow, bg-gradient-to-* with bg-linear-to-*.",
                  icon: "🔧",
                },
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
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10 }}>
              <Bullet><strong>Automated upgrade tool:</strong> <code>npx @tailwindcss/upgrade</code> handles most changes automatically</Bullet>
              <Bullet><strong>Codemod available:</strong> Scans your templates and updates renamed/removed utility classes</Bullet>
              <Bullet><strong>Incremental adoption:</strong> v3 config files still partially supported via <code>@config</code> directive</Bullet>
              <Bullet><strong>Test thoroughly:</strong> Check dark mode, responsive breakpoints, and custom plugin behavior after migration</Bullet>
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
        Tailwind CSS v4 Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          v3 to v4 Migration Reference · tailwindcss.com
        </span>
      </div>
    </div>
  );
}
