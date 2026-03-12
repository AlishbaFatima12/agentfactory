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
        width: 150,
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
  const pages = ["Page 1: Core Migration", "Page 2: Advanced & Workflow"];

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
          <span style={{ color: palette.accentLight }}>Migration Cheatsheet</span>
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
          v3 to v4 Upgrade Guide · New Engine · CSS-First Config · New APIs — 2025 Edition
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

      {/* Page 1: Core Migration */}
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
          {/* Section 1 */}
          <SectionCard number="1" title="Installation & Setup">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Vite</Tag>
              <Tag color="#5a8a3c">PostCSS</Tag>
              <Tag color="#7a5a8a">CLI</Tag>
            </div>
            <Code>{`# Vite (recommended)
npm install tailwindcss @tailwindcss/vite
# vite.config.ts
import tailwindcss from "@tailwindcss/vite"
export default { plugins: [tailwindcss()] }

# PostCSS
npm install tailwindcss @tailwindcss/postcss
# postcss.config.js
export default {
  plugins: ["@tailwindcss/postcss"]
}

# CLI
npx @tailwindcss/cli -i app.css -o out.css`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Node" v="Requires Node.js 20+" />
              <KV k="Engine" v="New Oxide engine (Rust-based, 10x faster)" />
            </div>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="CSS-First Configuration">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              No more <code>tailwind.config.js</code>. All configuration lives in your CSS file now.
            </div>
            <Code>{`/* OLD v3 — app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* NEW v4 — app.css */
@import "tailwindcss";`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>Single import</strong> replaces all three <code>@tailwind</code> directives</Bullet>
              <Bullet><strong>Config is optional</strong> — use <code>@theme</code> in CSS instead of a JS config file</Bullet>
              <Bullet><strong>JS config still works</strong> via <code>@config "tailwind.config.js"</code> for gradual migration</Bullet>
              <Bullet><strong>Plugins</strong> imported with <code>@plugin "plugin-name"</code> in CSS</Bullet>
            </div>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="The @theme Directive">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Define all design tokens directly in CSS. Replaces <code>theme.extend</code> from v3 config.
            </div>
            <Code>{`@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
  --color-brand-light: #60a5fa;
  --font-display: "Inter", sans-serif;
  --breakpoint-3xl: 1920px;
  --spacing-18: 4.5rem;
  --ease-bounce: cubic-bezier(.68,-.55,.27,1.55);
}

/* Use anywhere: bg-brand, font-display, etc. */`}</Code>
            <Bullet><strong>Namespaced</strong> — prefix determines the utility type</Bullet>
            <Bullet><strong>--color-*</strong> creates color utilities (<code>bg-*</code>, <code>text-*</code>)</Bullet>
            <Bullet><strong>--font-*</strong> creates font-family utilities</Bullet>
            <Bullet><strong>--breakpoint-*</strong> creates responsive breakpoints</Bullet>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Automatic Content Detection">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              v4 automatically finds your template files. No <code>content</code> array needed.
            </div>
            <Code>{`/* v3 — tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ]
}

/* v4 — automatic! (uses .gitignore) */
/* To add extra sources explicitly: */
@source "../node_modules/my-ui-lib";`}</Code>
            <Bullet>Scans all files in your project automatically</Bullet>
            <Bullet>Respects <code>.gitignore</code> to skip <code>node_modules</code> etc.</Bullet>
            <Bullet>Use <code>@source</code> to include files outside your project root</Bullet>
            <Bullet>Use <code>@source not</code> to exclude specific paths</Bullet>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="What Got Renamed" span={2}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Key class name changes from v3 to v4. Update your templates.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <RefRow cmd="bg-opacity-*" desc="Use bg-black/50 (modifier syntax)" />
                <RefRow cmd="text-opacity-*" desc="Use text-red-500/75 (modifier)" />
                <RefRow cmd="border-opacity-*" desc="Use border-white/30 (modifier)" />
                <RefRow cmd="flex-grow" desc="Now just grow" />
                <RefRow cmd="flex-shrink" desc="Now just shrink" />
                <RefRow cmd="overflow-ellipsis" desc="Now text-ellipsis" />
              </div>
              <div>
                <RefRow cmd="decoration-clone" desc="Now box-decoration-clone" />
                <RefRow cmd="decoration-slice" desc="Now box-decoration-slice" />
                <RefRow cmd="flex-grow-0" desc="Now grow-0" />
                <RefRow cmd="flex-shrink-0" desc="Now shrink-0" />
                <RefRow cmd="outline-none" desc="Now outline-hidden (different behavior)" />
                <RefRow cmd="ring (bare)" desc="Now ring-3 (explicit width required)" />
              </div>
            </div>
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11.5, color: palette.accent, fontWeight: 700 }}>
                Upgrade tool: <code style={{ fontSize: 11 }}>npx @tailwindcss/upgrade</code> — auto-renames most of these in your codebase
              </div>
            </div>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="What Got Removed">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Utilities dropped in v4 — and what to use instead.
            </div>
            <Bullet><strong>darkMode config</strong> — always uses <code>prefers-color-scheme</code> now, use <code>@variant dark (&.dark)</code> for class strategy</Bullet>
            <Bullet><strong>@apply in @layer</strong> — use regular CSS or <code>@utility</code> instead</Bullet>
            <Bullet><strong>theme() function</strong> — use CSS <code>var(--color-*)</code> variables directly</Bullet>
            <Bullet><strong>screens config</strong> — use <code>--breakpoint-*</code> in <code>@theme</code></Bullet>
            <Bullet><strong>safelist</strong> — use <code>@source inline("...")</code> to force utility generation</Bullet>
            <Bullet><strong>corePlugins: false</strong> — use <code>@theme inline</code> to fully disable defaults</Bullet>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="CSS Variables Everywhere">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every design token is now a CSS custom property accessible at runtime.
            </div>
            <Code>{`/* All theme values become CSS vars */
.my-element {
  color: var(--color-blue-500);
  padding: var(--spacing-4);
  font-family: var(--font-sans);
  border-radius: var(--radius-lg);
}

/* Use in JS too */
getComputedStyle(el)
  .getPropertyValue('--color-brand')`}</Code>
            <Bullet>No more <code>theme()</code> function — use <code>var()</code> in custom CSS</Bullet>
            <Bullet>Dynamic theming possible via overriding CSS vars at runtime</Bullet>
            <Bullet>Spacing scale exposed as <code>--spacing-*</code> variables</Bullet>
            <Bullet>All colors available as <code>--color-*</code> variables</Bullet>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="New Color System">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">color-mix</Tag>
              <Tag color="#7a5a8a">Opacity</Tag>
              <Tag color="#2a7a7a">OKLCH</Tag>
            </div>
            <Code>{`/* Opacity uses color-mix() now */
bg-blue-500/50
/* Compiles to: */
color-mix(in oklch, var(--color-blue-500) 50%, transparent)

/* Custom colors with opacity */
@theme { --color-brand: oklch(0.6 0.2 250); }
/* Then: */ bg-brand/75`}</Code>
            <Bullet><strong>OKLCH</strong> is the default color space for mixing</Bullet>
            <Bullet><strong>Modifier syntax</strong> replaces all opacity utilities</Bullet>
            <Bullet>Color palette unchanged — still <code>50-950</code> shades</Bullet>
            <Bullet>Custom colors automatically get opacity modifier support</Bullet>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="Native Cascade Layers">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              v4 uses native CSS <code>@layer</code> for specificity control. No more specificity hacks.
            </div>
            <Code>{`/* v4 output structure */
@layer theme, base, components, utilities;

/* Your custom CSS with correct specificity: */
@layer components {
  .btn { /* always beats base, never beats utilities */ }
}

@utility my-util {
  /* Gets utility-layer specificity automatically */
}`}</Code>
            <Bullet><strong>Order matters</strong> — theme &lt; base &lt; components &lt; utilities</Bullet>
            <Bullet>Utilities always win over components (by layer, not selector weight)</Bullet>
            <Bullet>Third-party CSS can be layered for predictable overrides</Bullet>
            <Bullet><code>!important</code> is almost never needed now</Bullet>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="Container Queries">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">Built-in</Tag>
              <Tag color="#3a6ea5">No Plugin</Tag>
            </div>
            <Code>{`/* Mark a container */
<div class="@container">
  /* Respond to container width */
  <div class="@sm:flex @lg:grid">
    ...
  </div>
</div>

/* Named containers */
<div class="@container/sidebar">
  <div class="@lg/sidebar:hidden">...`}</Code>
            <Bullet><strong>@container</strong> class marks an element as a container</Bullet>
            <Bullet><strong>@sm, @md, @lg</strong> etc. — container breakpoint variants</Bullet>
            <Bullet>Named containers with <code>@container/name</code> syntax</Bullet>
            <Bullet>Replaces the <code>@tailwindcss/container-queries</code> plugin from v3</Bullet>
            <Bullet><code>@min-*</code> and <code>@max-*</code> for arbitrary container widths</Bullet>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="3D Transforms">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              New first-class 3D transform utilities — no arbitrary values needed.
            </div>
            <Code>{`/* 3D rotations */
<div class="rotate-x-45 rotate-y-12">
<div class="rotate-z-90">

/* Perspective */
<div class="perspective-500">
  <div class="rotate-y-45 transform-3d">

/* Backface visibility */
<div class="backface-hidden">`}</Code>
            <Bullet><strong>rotate-x-*</strong> and <strong>rotate-y-*</strong> — rotate around X/Y axis</Bullet>
            <Bullet><strong>perspective-*</strong> — set perspective depth (near to far)</Bullet>
            <Bullet><strong>transform-3d</strong> — enables <code>transform-style: preserve-3d</code></Bullet>
            <Bullet><strong>backface-hidden / backface-visible</strong> — control backface rendering</Bullet>
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="New Gradient API">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Enhanced gradients with angle control and color interpolation.
            </div>
            <Code>{`/* Gradient with angle */
<div class="bg-linear-45 from-red-500 to-blue-500">

/* Gradient in oklch color space */
<div class="bg-linear-to-r/oklch from-blue-500 to-green-500">

/* Conic and radial */
<div class="bg-conic from-red-500 via-yellow-500 to-red-500">
<div class="bg-radial from-white to-gray-900">`}</Code>
            <Bullet><strong>bg-linear-*</strong> replaces <code>bg-gradient-to-*</code> (old syntax still works)</Bullet>
            <Bullet><strong>Angle syntax</strong> — <code>bg-linear-45</code>, <code>bg-linear-180</code></Bullet>
            <Bullet><strong>Color interpolation</strong> — append <code>/oklch</code>, <code>/srgb</code>, etc.</Bullet>
            <Bullet><strong>Conic gradients</strong> — <code>bg-conic</code> with <code>from/via/to</code></Bullet>
            <Bullet><strong>Radial gradients</strong> — <code>bg-radial</code> built-in</Bullet>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced & Workflow */}
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
          {/* Section 13 */}
          <SectionCard number="13" title="Custom Utilities with @utility">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Define reusable utilities in CSS. Replaces plugin-based utility creation.
            </div>
            <Code>{`@utility tab-4 {
  tab-size: 4;
}

/* With responsive/hover support built-in */
<div class="tab-4 hover:tab-8 lg:tab-2">

/* Functional utility (accepts a value) */
@utility scrollbar-color-* {
  scrollbar-color: --value(--color-*) transparent;
}
/* Use: scrollbar-color-blue-500 */`}</Code>
            <Bullet>Utilities defined in CSS get all variant support automatically</Bullet>
            <Bullet><strong>Single-declaration only</strong> for simple utilities (multi-property use components)</Bullet>
            <Bullet>Replaces <code>matchUtilities()</code> from the JS plugin API</Bullet>
            <Bullet>Use <code>--value()</code> to reference theme tokens in functional utilities</Bullet>
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Custom Variants with @variant">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Create custom variant selectors directly in CSS.
            </div>
            <Code>{`/* Custom variant */
@variant pointer-coarse (@media (pointer: coarse));
@variant theme-dark (&:where(.dark, .dark *));
@variant hocus (&:hover, &:focus);

/* Usage */
<div class="pointer-coarse:text-lg">
<div class="theme-dark:bg-gray-900">
<div class="hocus:ring-2">`}</Code>
            <Bullet><strong>@media variants</strong> — wrap a media query as a variant</Bullet>
            <Bullet><strong>Selector variants</strong> — target custom selectors with <code>&</code></Bullet>
            <Bullet>Replaces <code>addVariant()</code> from the v3 plugin API</Bullet>
            <Bullet>Supports compound selectors with comma separation</Bullet>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="New Built-in Variants">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">not-*</Tag>
              <Tag color="#3a6ea5">nth-*</Tag>
              <Tag color="#7a5a8a">in-*</Tag>
              <Tag color="#2a7a7a">inert</Tag>
            </div>
            <RefRow cmd="not-hover:" desc="Styles when NOT hovered" />
            <RefRow cmd="not-first:" desc="All children except :first-child" />
            <RefRow cmd="nth-3:" desc="Every 3rd child (:nth-child(3))" />
            <RefRow cmd="nth-last-2:" desc="2nd from last child" />
            <RefRow cmd="in-[.parent]:" desc="When inside .parent element" />
            <RefRow cmd="not-has-[.child]:" desc="When element does NOT contain .child" />
            <RefRow cmd="inert:" desc="When element has inert attribute" />
            <RefRow cmd="starting:" desc="@starting-style for entry animations" />
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Shadow & Ring Utilities">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Expanded shadow system with inset shadows and ring variants.
            </div>
            <Code>{`/* Inset shadows */
<div class="inset-shadow-sm">
<div class="inset-shadow-2xl inset-shadow-black/25">

/* Inset rings */
<div class="inset-ring inset-ring-black/10">

/* Ring now requires explicit width */
<div class="ring-2 ring-blue-500">
/* NOT ring ring-blue-500 (v3 style) */`}</Code>
            <Bullet><strong>inset-shadow-*</strong> — separate utility for inner shadows</Bullet>
            <Bullet><strong>inset-ring-*</strong> — inset box-shadow based ring</Bullet>
            <Bullet>Can combine <code>shadow-*</code> and <code>inset-shadow-*</code> on same element</Bullet>
            <Bullet><strong>ring requires width</strong> — bare <code>ring</code> no longer sets 3px default</Bullet>
            <Bullet>Color modifiers work: <code>shadow-lg shadow-black/20</code></Bullet>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Field Sizing & Starting Styles">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Field Sizing</Tag>
              <Tag color="#7a5a8a">@starting-style</Tag>
            </div>
            <Code>{`/* Auto-sizing textarea */
<textarea class="field-sizing-content">
/* Grows to fit content — no JS needed */

/* Entry animations with starting: */
<div class="opacity-100 starting:opacity-0
  transition-opacity duration-300">
/* Animates from 0 to 100 on mount */

/* display transition */
<dialog class="open:flex starting:open:opacity-0
  transition-all duration-200">`}</Code>
            <Bullet><strong>field-sizing-content</strong> — auto-grow textareas and inputs</Bullet>
            <Bullet><strong>field-sizing-fixed</strong> — explicit opt-out (default behavior)</Bullet>
            <Bullet><strong>starting:</strong> variant — sets initial state for entry animations</Bullet>
            <Bullet>Enables CSS-only mount animations, no JS transition libraries needed</Bullet>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Composable Variants">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              v4 variants compose more freely. Stack and combine without limits.
            </div>
            <Code>{`/* Compound variants */
<div class="group-hover:not-disabled:opacity-100">
<li class="first:last:rounded-full">
<div class="sm:dark:hover:bg-gray-800">

/* Group and peer — simpler naming */
<div class="group/nav">
  <span class="group-hover/nav:visible">
</div>

/* has-* variant */
<label class="has-[:checked]:bg-blue-50">
  <input type="checkbox" />`}</Code>
            <Bullet>All variants can stack: <code>sm:dark:hover:first:not-disabled:</code></Bullet>
            <Bullet><strong>group/peer naming</strong> unchanged from v3, fully supported</Bullet>
            <Bullet><strong>has-*</strong> — style parent based on child state</Bullet>
            <Bullet>No more plugin needed for stacked variants</Bullet>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title="@plugin & @config Directives">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Install plugins and reference legacy configs directly from CSS.
            </div>
            <Code>{`/* Import a plugin in CSS */
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";

/* Reference a legacy JS config */
@config "./tailwind.config.js";

/* Combined — gradual migration */
@import "tailwindcss";
@config "./tailwind.config.js";
@plugin "@tailwindcss/typography";

@theme {
  --color-brand: #e87a45;
}`}</Code>
            <Bullet><strong>@plugin</strong> — import JS plugins from CSS (replaces <code>plugins</code> array)</Bullet>
            <Bullet><strong>@config</strong> — use a JS config alongside CSS config</Bullet>
            <Bullet>Allows incremental migration — move config piece by piece</Bullet>
            <Bullet>Official plugins (<code>typography</code>, <code>forms</code>) updated for v4</Bullet>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Migration Checklist">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Step-by-step process to upgrade from v3 to v4.
            </div>
            {[
              { step: "1", label: "Run upgrade tool", desc: "npx @tailwindcss/upgrade" },
              { step: "2", label: "Replace CSS directives", desc: "@tailwind * to @import \"tailwindcss\"" },
              { step: "3", label: "Install new package", desc: "Vite plugin or PostCSS plugin" },
              { step: "4", label: "Move theme to @theme", desc: "Convert config to CSS variables" },
              { step: "5", label: "Delete content array", desc: "Auto-detection replaces it" },
              { step: "6", label: "Update renamed classes", desc: "grow, shrink, ring-3, etc." },
              { step: "7", label: "Replace theme()", desc: "Use var(--color-*) in custom CSS" },
              { step: "8", label: "Move plugins to @plugin", desc: "@plugin \"@tailwindcss/forms\"" },
            ].map(({ step, label, desc }, i) => (
              <div
                key={step}
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
                <span
                  style={{
                    fontWeight: 900,
                    color: palette.accent,
                    fontSize: 12,
                    width: 24,
                  }}
                >
                  {step}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: palette.dark,
                    fontSize: 12,
                    width: 140,
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="Build Tool Integration">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              v4 ships separate packages per build tool for optimal integration.
            </div>
            <Code>{`# Vite (best DX — hot reload, no PostCSS)
npm i tailwindcss @tailwindcss/vite

# PostCSS (works with Webpack, Parcel, etc.)
npm i tailwindcss @tailwindcss/postcss

# CLI (no build tool needed)
npx @tailwindcss/cli -i src/app.css -o dist/out.css

# Watch mode
npx @tailwindcss/cli -i app.css -o out.css --watch`}</Code>
            <Bullet><strong>Vite plugin</strong> is the recommended path — fastest builds</Bullet>
            <Bullet><strong>10x faster</strong> than v3 thanks to the Oxide engine (Rust)</Bullet>
            <Bullet><strong>No separate config</strong> needed — CSS file is the entry point</Bullet>
            <Bullet>Lightning CSS used internally for vendor prefixing and minification</Bullet>
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="v3 vs v4 — Quick Decision Guide" span={3}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                {
                  title: "Migrate Now",
                  when: "New projects, greenfield apps",
                  best: "You want the latest DX, CSS-first config, faster builds, and native container queries.",
                  icon: ">>",
                },
                {
                  title: "Gradual Migration",
                  when: "Existing v3 apps in production",
                  best: "Use @config to keep your JS config while moving tokens to @theme incrementally.",
                  icon: "~~",
                },
                {
                  title: "Wait a Bit",
                  when: "Heavy plugin ecosystem usage",
                  best: "If you rely on plugins that haven't updated for v4 yet, wait for ecosystem to catch up.",
                  icon: "||",
                },
                {
                  title: "Key Wins",
                  when: "Why bother migrating at all?",
                  best: "10x faster builds, CSS variables at runtime, native @layer, container queries, 3D transforms, no JS config.",
                  icon: "**",
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
                  <div
                    style={{
                      fontSize: 18,
                      marginBottom: 4,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: palette.accent,
                      fontWeight: 900,
                    }}
                  >
                    {icon}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: palette.dark,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.accent,
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {when}
                  </div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>
                    {best}
                  </div>
                </div>
              ))}
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
        Tailwind CSS v4 Migration Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on Tailwind CSS v4.0 release · Covers v3 to v4 migration path
        </span>
      </div>
    </div>
  );
}
