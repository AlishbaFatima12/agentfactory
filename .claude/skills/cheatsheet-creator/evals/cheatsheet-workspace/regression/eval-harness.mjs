#!/usr/bin/env node
/**
 * Cheatsheet Eval Harness
 *
 * Scores each cheatsheet trace on 6 business-connected dimensions:
 *   Render (0.15) | Accuracy (0.25) | Workflow (0.20) | Completeness (0.15) | Usability (0.15) | Efficiency (0.10)
 *
 * Usage:
 *   node eval-harness.mjs --v1              # Eval all v1 traces
 *   node eval-harness.mjs --v2              # Eval all v2 traces
 *   node eval-harness.mjs <trace-dir>       # Eval a single trace
 *   node eval-harness.mjs --v2 --channel B  # Run only Channel B
 *   node eval-harness.mjs --v2 --skip-llm   # Skip LLM channels (A+D only)
 */

import { readFileSync, readdirSync, existsSync, writeFileSync } from "fs";
import { join, basename, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import puppeteer from "puppeteer";
import { runChecks } from "./structural-checks.mjs";
import { testRender } from "./visual-render-test.mjs";

/**
 * Spawn claude CLI with prompt piped via stdin (avoids arg length limits).
 * Returns the parsed JSON output.
 */
function spawnClaude(userPrompt, { systemPrompt, jsonSchema, allowedTools, model, timeout }) {
  return new Promise((resolve, reject) => {
    const args = ["--output-format", "json"];
    if (systemPrompt) args.push("--system-prompt", systemPrompt);
    if (jsonSchema) args.push("--json-schema", jsonSchema);
    if (allowedTools) args.push("--allowedTools", allowedTools);
    if (model) args.push("--model", model);
    args.push("--max-turns", "30");
    args.push("-p", "-"); // Read prompt from stdin

    const env = { ...process.env };
    delete env.CLAUDECODE;

    const proc = spawn("claude", args, { env, timeout: timeout || 180_000 });

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (d) => { stdout += d.toString(); });
    proc.stderr.on("data", (d) => { stderr += d.toString(); });

    proc.on("close", (code) => {
      if (code !== 0 && !stdout) {
        reject(new Error(`claude exited ${code}: ${stderr.slice(0, 300)}`));
        return;
      }
      try {
        // Output is JSONL — array of event objects. Find the "result" entry.
        const events = JSON.parse(stdout);
        const resultEvent = (Array.isArray(events) ? events : [events])
          .find((e) => e.type === "result");

        if (!resultEvent) {
          reject(new Error("No result event in claude output"));
          return;
        }

        // When --json-schema is used, structured output is in structured_output field
        if (resultEvent.structured_output) {
          resolve(resultEvent.structured_output);
          return;
        }

        // Fallback: try to parse the result text as JSON
        if (resultEvent.result) {
          try {
            resolve(JSON.parse(resultEvent.result));
          } catch {
            resolve({ result: resultEvent.result });
          }
          return;
        }

        reject(new Error("No structured_output or result in claude response"));
      } catch (e) {
        reject(new Error(`Output parse failed: ${e.message}. stdout length: ${stdout.length}`));
      }
    });

    proc.on("error", (err) => reject(err));

    // Write prompt to stdin and close
    proc.stdin.write(userPrompt);
    proc.stdin.end();

    // Hard timeout
    setTimeout(() => {
      proc.kill("SIGTERM");
      reject(new Error(`Timeout after ${timeout || 180_000}ms`));
    }, (timeout || 180_000) + 5000);
  });
}
const __dirname = dirname(fileURLToPath(import.meta.url));

const TRACES_V1 = join(__dirname, "..", "traces");
const TRACES_V2 = join(__dirname, "..", "traces-v2");
const TRACES_V3 = join(__dirname, "..", "traces-v3");

// ── Weights & Thresholds ────────────────────────────────────────────

const WEIGHTS = {
  render: 0.15,
  accuracy: 0.25,
  workflow_orientation: 0.20,
  completeness: 0.15,
  usability: 0.15,
  efficiency: 0.10,
};

const PASS_COMPOSITE = 3.5;
const PASS_MIN_DIMENSION = 2;

// ── Topic prompts (the original prompts used to generate traces) ────

const TOPIC_PROMPTS = {
  "topic-1-vim": "vim cheatsheet -- i keep forgetting the basics every time i have to edit something on a remote server",
  "topic-2-docker": "docker cheatsheet, include compose v2 stuff and the newer buildkit features. i always mix up the old and new syntax",
  "topic-3-regex": "regex reference card please. the kind of thing you'd tape to your monitor",
  "topic-4-ffmpeg": "i need an ffmpeg cheatsheet. every time i need to convert something i spend 20 min googling the flags",
  "topic-5-cognitive-biases": "make me a cognitive biases cheatsheet -- like the really important ones for decision making, not all 180 of them",
  "topic-6-negotiation": "quick reference for negotiation techniques. im reading 'never split the difference' and want something to glance at before calls",
  "topic-7-parenting": "cheat sheet for child development milestones, like what to expect at each age? my kid is 2 and i have no idea what's normal lol",
  "topic-8-git": "git cheat sheet but not just commands -- i want the mental model stuff too. like when to rebase vs merge, how to think about branches",
  "topic-9-aws-s3": "s3 cheatsheet - cli commands, the main sdk methods, IAM permissions, and lifecycle policies. basically everything i need to stop looking stuff up",
  "topic-10-k8s": "k8s debugging cheatsheet. when pods crash, how to figure out wtf is happening",
  "topic-11-http-status": "http status codes cheatsheet",
  "topic-12-flexbox-grid": "flexbox and grid comparison cheatsheet. i can never remember which properties go on the container vs the item",
  "topic-13-python": "python cheatsheet",
  "topic-14-jq": "jq cheatsheet? i can only ever remember the dot operator lol",
  "topic-15-tailwind": "tailwind v4 cheatsheet -- just switched from v3, need the new stuff",
  "topic-16-sql": "SQL reference cheatsheet, i switch between postgres and mysql a lot and keep getting the syntax mixed up",
  "topic-17-sourdough": "can you make a cheatsheet for sourdough bread? like the whole process from starter maintenance to baking. i keep screwing up the timing",
};

// ── JSON Schemas for Claude structured output ───────────────────────

const ACCURACY_SCHEMA = {
  type: "object",
  properties: {
    score: { type: "integer", minimum: 1, maximum: 5 },
    notes: { type: "string" },
    verified_claims: {
      type: "array",
      items: {
        type: "object",
        properties: {
          claim: { type: "string" },
          verdict: { type: "string", enum: ["correct", "incorrect", "outdated", "unverifiable"] },
          evidence: { type: "string" },
          severity: { type: "string", enum: ["high", "medium", "low"] },
        },
        required: ["claim", "verdict", "evidence", "severity"],
      },
    },
  },
  required: ["score", "notes", "verified_claims"],
};

const QUALITY_SCHEMA = {
  type: "object",
  properties: {
    usability: {
      type: "object",
      properties: {
        score: { type: "integer", minimum: 1, maximum: 5 },
        notes: { type: "string" },
      },
      required: ["score", "notes"],
    },
    completeness: {
      type: "object",
      properties: {
        score: { type: "integer", minimum: 1, maximum: 5 },
        notes: { type: "string" },
      },
      required: ["score", "notes"],
    },
    workflow_orientation: {
      type: "object",
      properties: {
        score: { type: "integer", minimum: 1, maximum: 5 },
        notes: { type: "string" },
      },
      required: ["score", "notes"],
    },
  },
  required: ["usability", "completeness", "workflow_orientation"],
};

// ── Trace Discovery ─────────────────────────────────────────────────

function discoverTraces(args) {
  const version = args.includes("--v1") ? "v1" : args.includes("--v2") ? "v2" : args.includes("--v3") ? "v3" : null;
  const traces = [];

  if (version) {
    const dir = version === "v1" ? TRACES_V1 : version === "v2" ? TRACES_V2 : TRACES_V3;
    const dirs = readdirSync(dir).filter((d) => d.startsWith("topic-")).sort();
    for (const d of dirs) {
      const jsxPath = join(dir, d, "output.jsx");
      if (existsSync(jsxPath)) {
        traces.push({ topic: d, jsxPath, dir: join(dir, d), version });
      }
    }
  } else {
    // Single trace directory
    const traceDir = args.find((a) => !a.startsWith("--"));
    if (traceDir && existsSync(traceDir)) {
      const jsxPath = join(traceDir, "output.jsx");
      if (existsSync(jsxPath)) {
        traces.push({
          topic: basename(traceDir),
          jsxPath,
          dir: traceDir,
          version: traceDir.includes("traces-v2") ? "v2" : "v1",
        });
      }
    }
  }

  return traces;
}

function getPrompt(topic) {
  return TOPIC_PROMPTS[topic] || `Create a comprehensive cheatsheet for ${topic.replace(/^topic-\d+-/, "").replace(/-/g, " ")}`;
}

// ── Channel A: Puppeteer Render ─────────────────────────────────────

function scoreRender(renderResult) {
  if (!renderResult) return { score: 1, notes: "Render failed completely" };

  const { pass, issues, metrics } = renderResult;

  if (pass && metrics.htmlSize > 100 && metrics.bodyHeight > 500) {
    return { score: 5, notes: `Renders perfectly. ${Math.round(metrics.htmlSize / 1024)}KB HTML, ${metrics.bodyHeight}px tall.` };
  }
  if (pass && metrics.htmlSize > 100) {
    return { score: 4, notes: `Renders OK but short (${metrics.bodyHeight}px). ${issues.join("; ")}` };
  }
  if (issues.some((i) => i.includes("Horizontal overflow"))) {
    return { score: 3, notes: `Renders with overflow. ${issues.join("; ")}` };
  }
  if (issues.some((i) => i.includes("Console errors"))) {
    return { score: 3, notes: `Renders with console errors. ${issues.join("; ")}` };
  }
  if (metrics.htmlSize > 0) {
    return { score: 2, notes: `Partial render. ${issues.join("; ")}` };
  }
  return { score: 1, notes: `Failed to render. ${issues.join("; ")}` };
}

// ── Channel B: Claude + Web Search (Accuracy) ───────────────────────

async function runChannelB(jsxContent, topic, prompt) {
  const systemPrompt = readFileSync(join(__dirname, "graders", "accuracy-grader.md"), "utf-8");

  const userPrompt = [
    `Topic: ${topic}`,
    `Original user prompt: "${prompt}"`,
    "",
    "Cheatsheet JSX source:",
    "```jsx",
    jsxContent,
    "```",
    "",
    "Grade the accuracy of this cheatsheet. Select 5-8 specific claims and verify each via web search against official documentation.",
  ].join("\n");

  try {
    const result = await spawnClaude(userPrompt, {
      systemPrompt,
      jsonSchema: JSON.stringify(ACCURACY_SCHEMA),
      allowedTools: "WebSearch,WebFetch",
      model: "sonnet",
      timeout: 180_000,
    });
    return { score: result.score, notes: result.notes, verified_claims: result.verified_claims || [] };
  } catch (err) {
    return { score: null, notes: `Channel B error: ${err.message.slice(0, 200)}`, verified_claims: [] };
  }
}

// ── Channel C: Claude Judge (Usability + Completeness) ──────────────

async function runChannelC(jsxContent, topic, prompt) {
  const systemPrompt = readFileSync(join(__dirname, "graders", "quality-grader.md"), "utf-8");

  const userPrompt = [
    `Topic: ${topic}`,
    `Original user prompt: "${prompt}"`,
    "",
    "Cheatsheet JSX source:",
    "```jsx",
    jsxContent,
    "```",
    "",
    "Grade the usability, completeness, and workflow orientation of this cheatsheet using the rubrics provided.",
  ].join("\n");

  try {
    const result = await spawnClaude(userPrompt, {
      systemPrompt,
      jsonSchema: JSON.stringify(QUALITY_SCHEMA),
      model: "sonnet",
      timeout: 120_000,
    });
    return {
      usability: result.usability || { score: null, notes: "Missing" },
      completeness: result.completeness || { score: null, notes: "Missing" },
      workflow_orientation: result.workflow_orientation || { score: null, notes: "Missing" },
    };
  } catch (err) {
    const errMsg = `Channel C error: ${err.message.slice(0, 200)}`;
    return {
      usability: { score: null, notes: errMsg },
      completeness: { score: null, notes: errMsg },
      workflow_orientation: { score: null, notes: errMsg },
    };
  }
}

// ── Channel D: Structural Checks (Efficiency) ───────────────────────

function scoreEfficiency(checkResult) {
  const findCheck = (prefix) => checkResult.checks.find((c) => c.name.startsWith(prefix));

  const parseCheck = findCheck("JSX Parseable");
  const sectionCheck = findCheck("Section count");
  const thinCheck = findCheck("Min 4 content");
  const diversityCheck = findCheck("Content primitive diversity");
  const fileCheck = findCheck("File size");
  const componentCheck = findCheck("All required components");

  // Critical failures
  if (parseCheck && !parseCheck.pass) return { score: 1, notes: "JSX parse error" };
  if (componentCheck && !componentCheck.pass) return { score: 1, notes: componentCheck.issues.join("; ") };

  // Extract numbers
  const sectionMatch = sectionCheck?.name.match(/\((\d+)/);
  const sectionCount = sectionMatch ? parseInt(sectionMatch[1]) : 0;
  const thinCount = thinCheck ? thinCheck.issues.length : 0;
  const diversityMatch = diversityCheck?.name.match(/\((\d+)/);
  const diversityCount = diversityMatch ? parseInt(diversityMatch[1]) : 0;

  const totalFails = checkResult.checks.filter((c) => !c.pass).length;

  if (sectionCount >= 14 && thinCount === 0 && diversityCount >= 3 && totalFails === 0) {
    return { score: 5, notes: `${sectionCount} sections, ${diversityCount} primitive types, no issues.` };
  }
  if (sectionCount >= 12 && thinCount <= 2 && totalFails <= 2) {
    return { score: 4, notes: `${sectionCount} sections, ${thinCount} thin. ${totalFails} total check failures.` };
  }
  if (sectionCount >= 10 && totalFails <= 4) {
    return { score: 3, notes: `${sectionCount} sections, ${thinCount} thin. ${totalFails} total check failures.` };
  }
  if (sectionCount >= 8) {
    return { score: 2, notes: `${sectionCount} sections, ${totalFails} failures.` };
  }
  return { score: 1, notes: `Only ${sectionCount} sections, ${totalFails} failures.` };
}

// ── Composite Score ─────────────────────────────────────────────────

function computeComposite(scores) {
  const dims = ["render", "accuracy", "workflow_orientation", "completeness", "usability", "efficiency"];
  let weightedSum = 0;
  let totalWeight = 0;

  for (const dim of dims) {
    const s = scores[dim]?.score;
    if (s != null) {
      weightedSum += s * WEIGHTS[dim];
      totalWeight += WEIGHTS[dim];
    }
  }

  const composite = totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) / 100 : 0;
  const belowMin = dims.some((d) => scores[d]?.score != null && scores[d].score < PASS_MIN_DIMENSION);

  return {
    composite,
    pass: composite >= PASS_COMPOSITE && !belowMin,
  };
}

// ── Run One Trace ───────────────────────────────────────────────────

async function runTrace(browser, trace, channels) {
  const { topic, jsxPath, dir } = trace;
  const prompt = getPrompt(topic);
  const jsxContent = readFileSync(jsxPath, "utf-8");
  const scores = {};

  // Channel A: Render (fast)
  if (channels.has("A")) {
    try {
      const renderResult = await testRender(browser, jsxPath, dir);
      scores.render = { ...scoreRender(renderResult), channel: "A" };
    } catch (err) {
      scores.render = { score: 1, notes: `Render crash: ${err.message.slice(0, 100)}`, channel: "A" };
    }
  }

  // Channel D: Structural (fast)
  if (channels.has("D")) {
    try {
      const checkResult = runChecks(jsxPath);
      scores.efficiency = { ...scoreEfficiency(checkResult), channel: "D" };
    } catch (err) {
      scores.efficiency = { score: 1, notes: `Structural check error: ${err.message.slice(0, 100)}`, channel: "D" };
    }
  }

  // Channels B + C: LLM judges (slow, run in parallel)
  const llmPromises = [];

  if (channels.has("B")) {
    llmPromises.push(
      runChannelB(jsxContent, topic, prompt).then((r) => {
        scores.accuracy = { ...r, channel: "B" };
      })
    );
  }

  if (channels.has("C")) {
    llmPromises.push(
      runChannelC(jsxContent, topic, prompt).then((r) => {
        scores.usability = { ...r.usability, channel: "C" };
        scores.completeness = { ...r.completeness, channel: "C" };
        scores.workflow_orientation = { ...r.workflow_orientation, channel: "C" };
      })
    );
  }

  if (llmPromises.length > 0) {
    await Promise.all(llmPromises);
  }

  const { composite, pass } = computeComposite(scores);

  return {
    topic,
    prompt,
    scores,
    composite,
    pass,
    timestamp: new Date().toISOString(),
    version: trace.version,
    channels_run: [...channels].sort(),
  };
}

// ── Console Output ──────────────────────────────────────────────────

function printReport(report) {
  const icon = report.pass ? "✓" : "✗";
  const dims = ["render", "accuracy", "workflow_orientation", "completeness", "usability", "efficiency"];
  const scores = dims.map((d) => {
    const s = report.scores[d]?.score;
    return s != null ? s : "-";
  });

  console.log(
    `  ${icon} ${report.topic.padEnd(28)} ${report.composite.toFixed(2).padStart(5)}  [R:${String(scores[0]).padStart(1)} A:${String(scores[1]).padStart(1)} W:${String(scores[2]).padStart(1)} C:${String(scores[3]).padStart(1)} U:${String(scores[4]).padStart(1)} E:${String(scores[5]).padStart(1)}]`
  );
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: node eval-harness.mjs --v1|--v2|<trace-dir> [--channel A|B|C|D] [--skip-llm]");
    process.exit(1);
  }

  // Parse channel filter
  let channels = new Set(["A", "B", "C", "D"]);
  const channelIdx = args.indexOf("--channel");
  if (channelIdx >= 0 && args[channelIdx + 1]) {
    channels = new Set(args[channelIdx + 1].split(",").map((c) => c.trim().toUpperCase()));
  }
  if (args.includes("--skip-llm")) {
    channels.delete("B");
    channels.delete("C");
  }

  const traces = discoverTraces(args);
  if (traces.length === 0) {
    console.log("No traces found.");
    process.exit(1);
  }

  const version = traces[0].version;
  console.log(`\nEval Harness — ${traces.length} traces (${version}), channels: ${[...channels].join(",")}`);
  console.log(`${"─".repeat(72)}`);
  console.log(`  ${"Topic".padEnd(28)} Score  [R:_ A:_ W:_ C:_ U:_ E:_]`);
  console.log(`${"─".repeat(72)}`);

  // Launch browser for Channel A
  let browser = null;
  if (channels.has("A")) {
    browser = await puppeteer.launch({ headless: true });
  }

  const reports = [];

  for (const trace of traces) {
    const report = await runTrace(browser, trace, channels);
    printReport(report);

    // Save per-trace report
    writeFileSync(join(trace.dir, "eval-report.json"), JSON.stringify(report, null, 2));
    reports.push(report);
  }

  if (browser) await browser.close();

  // Aggregate summary
  const dims = ["render", "accuracy", "workflow_orientation", "completeness", "usability", "efficiency"];
  const dimAverages = {};
  for (const dim of dims) {
    const scores = reports.map((r) => r.scores[dim]?.score).filter((s) => s != null);
    dimAverages[dim] = scores.length > 0 ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100) / 100 : null;
  }

  const passed = reports.filter((r) => r.pass).length;
  const failed = reports.filter((r) => !r.pass).length;
  const avgComposite = reports.length > 0 ? Math.round((reports.reduce((a, r) => a + r.composite, 0) / reports.length) * 100) / 100 : 0;

  const summary = {
    run_timestamp: new Date().toISOString(),
    version,
    traces_evaluated: reports.length,
    traces_passed: passed,
    traces_failed: failed,
    average_composite: avgComposite,
    dimension_averages: dimAverages,
    failures: reports.filter((r) => !r.pass).map((r) => ({
      topic: r.topic,
      composite: r.composite,
      weak_dimensions: dims.filter((d) => r.scores[d]?.score != null && r.scores[d].score < 3),
    })),
    traces: reports,
  };

  writeFileSync(join(__dirname, "eval-summary.json"), JSON.stringify(summary, null, 2));

  // Print summary
  console.log(`${"─".repeat(72)}`);
  console.log(`  EVAL: ${passed} passed, ${failed} failed | avg composite: ${avgComposite}`);
  console.log(`  Dims: R:${dimAverages.render ?? "-"} A:${dimAverages.accuracy ?? "-"} W:${dimAverages.workflow_orientation ?? "-"} C:${dimAverages.completeness ?? "-"} U:${dimAverages.usability ?? "-"} E:${dimAverages.efficiency ?? "-"}`);
  console.log(`${"─".repeat(72)}\n`);

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(console.error);
