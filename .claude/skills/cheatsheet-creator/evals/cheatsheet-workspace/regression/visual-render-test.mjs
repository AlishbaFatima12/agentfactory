#!/usr/bin/env node
/**
 * Visual rendering test for cheatsheet JSX files.
 * Uses Puppeteer to render each cheatsheet in headless Chrome and check for errors.
 *
 * Usage: node visual-render-test.mjs --v1  (test all v1 traces)
 *        node visual-render-test.mjs --v2  (test all v2 traces)
 *        node visual-render-test.mjs <path-to-jsx>
 */

import { readFileSync, readdirSync, existsSync, writeFileSync } from "fs";
import { join, basename, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TRACES_V1 = join(__dirname, "..", "traces");
const TRACES_V2 = join(__dirname, "..", "traces-v2");

const RENDER_HTML = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8"/>
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>* { margin: 0; padding: 0; box-sizing: border-box; } body { background: #faf5ef; }</style>
</head><body><div id="root"></div>
<script>
window.renderJSX = function(jsxCode) {
  try {
    let code = jsxCode
      .replace(/^import\\s+\\{[^}]+\\}\\s+from\\s+["'][^"']+["'];?\\s*$/m, '')
      .replace(/export\\s+default\\s+function\\s+/, 'function ');
    const funcMatch = code.match(/^function\\s+(\\w+)/m);
    const funcName = funcMatch ? funcMatch[1] : 'Component';
    code += '\\nexports.default = ' + funcName + ';';
    const transformed = Babel.transform(code, { presets: ['react'] }).code;
    const moduleExports = {};
    const moduleFunc = new Function('React', 'useState', 'exports', transformed);
    moduleFunc(React, React.useState, moduleExports);
    const Component = moduleExports.default;
    if (!Component) return { ok: false, error: 'No component found' };
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(Component));
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
};
</script></body></html>`;

export async function testRender(browser, jsxPath, screenshotDir) {
  const topic = basename(dirname(jsxPath));
  const jsx = readFileSync(jsxPath, "utf-8");
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  // Collect console errors
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.setContent(RENDER_HTML, { waitUntil: "domcontentloaded", timeout: 60000 });

  // Wait for React, ReactDOM, and Babel to load from CDN
  await page.waitForFunction(
    () => typeof window.React !== "undefined" && typeof window.ReactDOM !== "undefined" && typeof window.Babel !== "undefined",
    { timeout: 30000 }
  );

  // Inject and render the JSX
  const result = await page.evaluate((jsxCode) => window.renderJSX(jsxCode), jsx);

  // Wait for React to render
  await new Promise((r) => setTimeout(r, 500));

  // Check for visual issues
  const metrics = await page.evaluate(() => {
    const root = document.getElementById("root");
    const rootRect = root.getBoundingClientRect();
    const hasContent = root.innerHTML.length > 100;
    const hasOverflowX = document.documentElement.scrollWidth > document.documentElement.clientWidth;
    const bodyHeight = document.body.scrollHeight;
    return { hasContent, hasOverflowX, bodyHeight, rootHTML: root.innerHTML.length };
  });

  // Take screenshot
  if (screenshotDir) {
    const ssPath = join(screenshotDir, "screenshot.png");
    await page.screenshot({ path: ssPath, fullPage: false });
  }

  await page.close();

  const issues = [];
  if (!result.ok) issues.push(`Render error: ${result.error}`);
  if (!metrics.hasContent) issues.push("No content rendered");
  if (metrics.hasOverflowX) issues.push("Horizontal overflow detected");
  if (errors.length > 0) issues.push(`Console errors: ${errors.slice(0, 3).join("; ")}`);

  return {
    topic,
    pass: issues.length === 0,
    issues,
    metrics: { htmlSize: metrics.rootHTML, bodyHeight: metrics.bodyHeight },
  };
}

import { pathToFileURL } from "url";

async function main() {
  const args = process.argv.slice(2);
  let files = [];

  if (args[0] === "--v1" || args[0] === "--v2") {
    const dir = args[0] === "--v1" ? TRACES_V1 : TRACES_V2;
    const dirs = readdirSync(dir).filter((d) => d.startsWith("topic-")).sort();
    for (const d of dirs) {
      const jsx = join(dir, d, "output.jsx");
      if (existsSync(jsx)) files.push(jsx);
      else console.warn(`  ⚠ Missing: ${d}/output.jsx`);
    }
  } else {
    files = args.filter((f) => existsSync(f));
  }

  if (files.length === 0) {
    console.log("Usage: node visual-render-test.mjs --v1|--v2|<path>");
    process.exit(1);
  }

  console.log(`\nRendering ${files.length} cheatsheets in headless Chrome...\n`);

  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  for (const file of files) {
    const screenshotDir = dirname(file);
    const result = await testRender(browser, file, screenshotDir);
    const icon = result.pass ? "✓" : "✗";
    console.log(`  ${icon} ${result.topic} (${Math.round(result.metrics.htmlSize / 1024)}KB HTML, ${result.metrics.bodyHeight}px tall)`);
    if (!result.pass) {
      for (const issue of result.issues) {
        console.log(`    → ${issue}`);
      }
    }
    results.push(result);
  }

  await browser.close();

  const passed = results.filter((r) => r.pass).length;
  const failed = results.filter((r) => !r.pass).length;
  console.log(`\n${"─".repeat(60)}`);
  console.log(`  VISUAL: ${passed} passed, ${failed} failed across ${results.length} traces`);
  console.log(`${"─".repeat(60)}\n`);

  process.exit(failed > 0 ? 1 : 0);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(console.error);
}
