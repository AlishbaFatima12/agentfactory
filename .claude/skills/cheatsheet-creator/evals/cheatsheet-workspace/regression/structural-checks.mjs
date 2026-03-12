#!/usr/bin/env node
/**
 * Structural regression checks for cheatsheet outputs.
 * Uses Babel for JSX parsing validation.
 *
 * Usage: node structural-checks.mjs <path-to-jsx>
 *        node structural-checks.mjs --all  (checks all traces)
 */

import { readFileSync, readdirSync, existsSync } from "fs";
import { join, basename, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { parse } = require("@babel/parser");

const __dirname = dirname(fileURLToPath(import.meta.url));
const TRACES_DIR = join(__dirname, "..", "traces");

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Strip content inside template literals (backtick strings) to avoid
 * false positives when checking for imports, colors, etc. inside Code blocks.
 * Replaces template literal content with spaces to preserve line structure.
 */
function stripTemplateLiterals(content) {
  let result = "";
  let inBacktick = false;
  let inSingleQuote = false;
  let inDoubleQuote = false;
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    const prev = i > 0 ? content[i - 1] : "";
    if (!inBacktick && !inSingleQuote && !inDoubleQuote) {
      if (ch === "`") { inBacktick = true; result += ch; continue; }
      if (ch === "'") { inSingleQuote = true; result += ch; continue; }
      if (ch === '"') { inDoubleQuote = true; result += ch; continue; }
      result += ch;
    } else if (inBacktick) {
      if (ch === "`" && prev !== "\\") { inBacktick = false; result += ch; }
      else { result += (ch === "\n" ? "\n" : " "); }
    } else if (inSingleQuote) {
      if (ch === "'" && prev !== "\\") { inSingleQuote = false; result += ch; }
      else { result += ch; }
    } else if (inDoubleQuote) {
      if (ch === '"' && prev !== "\\") { inDoubleQuote = false; result += ch; }
      else { result += ch; }
    }
  }
  return result;
}

// ── Check functions ──────────────────────────────────────────────────

function checkJSXParseable(content) {
  try {
    parse(content, { sourceType: "module", plugins: ["jsx"] });
    return { name: "JSX Parseable (Babel)", pass: true, issues: [] };
  } catch (e) {
    const msg = e.message.split("\n")[0];
    return { name: "JSX Parseable (Babel)", pass: false, issues: [msg] };
  }
}

function checkDefaultExport(content) {
  const hasDefault = /export\s+default\s+function/.test(content);
  return {
    name: "Has default export",
    pass: hasDefault,
    issues: hasDefault ? [] : ["No 'export default function' found"],
  };
}

function checkOnlyUseState(content) {
  // Use stripped content so imports inside Code blocks are ignored
  const stripped = stripTemplateLiterals(content);
  const lines = stripped.split("\n");
  const issues = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("import ")) continue;
    const match = trimmed.match(/^import\s+\{([^}]+)\}\s+from\s+["']([^"']+)["']/);
    if (!match) continue;

    const imported = match[1].trim();
    const from = match[2];
    if (from === "react") {
      if (imported !== "useState") {
        issues.push(`Imports "${imported}" from react (only useState allowed)`);
      }
    } else {
      issues.push(`Imports from "${from}" (only react allowed)`);
    }
  }

  if (/^require\s*\(/m.test(stripped)) {
    issues.push("Uses require() — not allowed");
  }

  return { name: "Only useState imported", pass: issues.length === 0, issues };
}

function checkSectionCount(content) {
  const sectionMatches = [...content.matchAll(/<SectionCard\s/g)];
  const count = sectionMatches.length;
  const pass = count >= 10 && count <= 20;
  return {
    name: `Section count (${count}, target 12-16)`,
    pass,
    issues: pass ? [] : [`Found ${count} SectionCard components (target 12-16, allow 10-20)`],
  };
}

function checkSequentialNumbering(content) {
  const numbers = [...content.matchAll(/number=["'](\d+)["']/g)].map(m => parseInt(m[1]));
  const issues = [];

  if (numbers.length === 0) {
    return { name: "Sequential numbering", pass: false, issues: ["No section numbers found"] };
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      issues.push(`Section ${i + 1} has number=${numbers[i]} (expected ${i + 1})`);
    }
  }

  return { name: "Sequential numbering", pass: issues.length === 0, issues };
}

function checkMinContentPerSection(content) {
  const sections = content.split(/<SectionCard\s/);
  const issues = [];

  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const titleMatch = section.match(/title=["'{]([^"'}]+)/);
    const title = titleMatch ? titleMatch[1] : `Section ${i}`;

    // Count content primitives
    const bullets = (section.match(/<Bullet/g) || []).length;
    const kvs = (section.match(/<KV\s/g) || []).length;
    const refrows = (section.match(/<RefRow\s/g) || []).length;
    const codes = (section.match(/<Code/g) || []).length;
    const tags = (section.match(/<Tag/g) || []).length;
    // Count styled data rows (alternating rows, grid items) — common in decision guides
    const styledRows = (section.match(/\.map\s*\(/g) || []).length;
    const inlineItems = (section.match(/key=\{/g) || []).length;
    // Count styled div blocks with marginBottom (Tag+description pairs, styled rows without .map)
    const styledBlocks = (section.match(/style=\{\{[^}]*marginBottom[^}]*\}\}/g) || []).length;

    // Tags: if each tag has its own wrapper div (Tag+description pattern), count individually;
    // otherwise cluster as badge groups (divide by 3)
    const tagContribution = styledBlocks >= tags ? tags : Math.ceil(tags / 3);
    const total = bullets + kvs + refrows + codes + tagContribution + Math.min(styledRows * 3, 6) + Math.min(inlineItems, 4);
    if (total < 4) {
      issues.push(`"${title}" has only ~${total} content items (min 4)`);
    }
  }

  return { name: "Min 4 content items per section", pass: issues.length === 0, issues };
}

function checkColorPalette(content) {
  // Use stripped content so colors inside Code blocks (template literals) are ignored
  const stripped = stripTemplateLiterals(content);
  const hexColors = [...stripped.matchAll(/#[0-9a-fA-F]{6}\b/g)].map(m => m[0].toLowerCase());
  const allowedColors = new Set([
    "#faf5ef", "#fff8f0", "#e8d5c4", "#c0582a", "#e87a45", "#f5ddd0",
    "#2c1810", "#5a3e2b", "#f0dcc8", "#ffffff", "#000000",
    "#fff3e6", "#a08a76", "#4a2a18",
    // Approved Tag secondary colors
    "#5a8a3c", "#3a6ea5", "#7a5a8a", "#8a6a3a", "#2a7a7a", "#a53a3a",
  ]);

  const unknownColors = [...new Set(hexColors)].filter(c => !allowedColors.has(c));
  const issues = unknownColors.length > 0
    ? [`Non-palette colors found: ${unknownColors.join(", ")}`]
    : [];

  return {
    name: "Color palette compliance",
    pass: issues.length === 0,
    issues,
    details: `${hexColors.length} total hex colors, ${unknownColors.length} non-palette`,
  };
}

function checkMaxSpan3(content) {
  const span3Matches = [...content.matchAll(/span=\{3\}/g)];
  const issues = [];

  if (span3Matches.length > 2) {
    issues.push(`${span3Matches.length} span={3} sections found (max 1 per page, 2 total)`);
  }

  return { name: "Max span={3} usage", pass: issues.length === 0, issues };
}

function checkContentPrimitiveDiversity(content) {
  const primitives = {
    Code: (content.match(/<Code/g) || []).length,
    Tag: (content.match(/<Tag/g) || []).length,
    Bullet: (content.match(/<Bullet/g) || []).length,
    KV: (content.match(/<KV\s/g) || []).length,
    RefRow: (content.match(/<RefRow\s/g) || []).length,
  };

  const used = Object.entries(primitives).filter(([, n]) => n > 0);
  const pass = used.length >= 2;

  return {
    name: `Content primitive diversity (${used.length} types used)`,
    pass,
    issues: pass ? [] : [`Only ${used.length} primitive type(s) used: ${used.map(([k]) => k).join(", ")}`],
    details: Object.entries(primitives).map(([k, v]) => `${k}:${v}`).join(", "),
  };
}

function checkNoPlaceholders(content) {
  // Only check outside template literals (Code blocks often have example.com etc.)
  // Strip template literal contents first
  const stripped = content.replace(/`[^`]*`/gs, "``");

  const placeholders = [
    /Lorem ipsum/i,
    /FIXME/,
    /placeholder/i,
    /\[insert/i,
    /TBD\b/,
  ];

  const issues = [];
  for (const pat of placeholders) {
    const match = stripped.match(pat);
    if (match) {
      issues.push(`Placeholder text found: "${match[0]}"`);
    }
  }

  return { name: "No placeholder text", pass: issues.length === 0, issues };
}

function checkComponentDefinitions(content) {
  const required = ["Code", "Tag", "Bullet", "KV", "RefRow", "SectionCard"];
  const issues = [];

  for (const comp of required) {
    const defPattern = new RegExp(`const\\s+${comp}\\s*=`);
    if (!defPattern.test(content)) {
      issues.push(`Component "${comp}" not defined`);
    }
  }

  return { name: "All required components defined", pass: issues.length === 0, issues };
}

function checkPaletteDefinition(content) {
  const hasPalette = /const\s+palette\s*=/.test(content);
  return {
    name: "Palette object defined",
    pass: hasPalette,
    issues: hasPalette ? [] : ["No 'const palette = ' found"],
  };
}

function checkFileSize(content) {
  const lines = content.split("\n").length;
  const chars = content.length;
  const pass = lines >= 100 && lines <= 1500;
  return {
    name: `File size (${lines} lines, ${Math.round(chars / 1024)}KB)`,
    pass,
    issues: pass ? [] : [`${lines} lines — ${lines < 100 ? "too short" : "too long"}`],
  };
}

// ── Runner ───────────────────────────────────────────────────────────

export function runChecks(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const name = basename(dirname(filePath));

  const checks = [
    checkJSXParseable(content),
    checkDefaultExport(content),
    checkOnlyUseState(content),
    checkPaletteDefinition(content),
    checkComponentDefinitions(content),
    checkSectionCount(content),
    checkSequentialNumbering(content),
    checkMinContentPerSection(content),
    checkColorPalette(content),
    checkMaxSpan3(content),
    checkContentPrimitiveDiversity(content),
    checkNoPlaceholders(content),
    checkFileSize(content),
  ];

  return { name, filePath, checks };
}

function printResults(results) {
  let totalPass = 0;
  let totalFail = 0;

  for (const result of results) {
    console.log(`\n${"═".repeat(60)}`);
    console.log(`  ${result.name}`);
    console.log(`${"═".repeat(60)}`);

    for (const check of result.checks) {
      const icon = check.pass ? "✓" : "✗";
      console.log(`  ${icon} ${check.name}`);
      if (!check.pass) {
        for (const issue of check.issues.slice(0, 5)) {
          console.log(`    → ${issue}`);
        }
        if (check.issues.length > 5) {
          console.log(`    → ... and ${check.issues.length - 5} more`);
        }
      }
      if (check.details) {
        console.log(`    (${check.details})`);
      }

      if (check.pass) totalPass++;
      else totalFail++;
    }
  }

  console.log(`\n${"─".repeat(60)}`);
  console.log(`  TOTAL: ${totalPass} passed, ${totalFail} failed across ${results.length} traces`);
  console.log(`${"─".repeat(60)}\n`);

  return totalFail;
}

// ── Main ─────────────────────────────────────────────────────────────

import { pathToFileURL } from "url";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: node structural-checks.mjs <path-to-jsx>");
    console.log("       node structural-checks.mjs --all");
    process.exit(1);
  }

  let files = [];

  if (args[0] === "--all") {
    const dirs = readdirSync(TRACES_DIR).filter(d => d.startsWith("topic-")).sort();
    for (const dir of dirs) {
      const jsx = join(TRACES_DIR, dir, "output.jsx");
      if (existsSync(jsx)) files.push(jsx);
      else console.warn(`  ⚠ Missing: ${dir}/output.jsx`);
    }
  } else {
    files = args.filter(f => existsSync(f));
  }

  if (files.length === 0) {
    console.log("No files found to check.");
    process.exit(1);
  }

  const results = files.map(f => runChecks(f));
  const failures = printResults(results);
  process.exit(failures > 0 ? 1 : 0);
}
