import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { parse } = require("@babel/parser");

const __dirname = dirname(fileURLToPath(import.meta.url));
const v2Dir = join(__dirname, "..", "traces-v2");

const dirs = readdirSync(v2Dir).filter(d => d.startsWith("topic-")).sort();

for (const dir of dirs) {
  const file = join(v2Dir, dir, "output.jsx");
  if (!existsSync(file)) continue;
  const content = readFileSync(file, "utf8");

  try {
    const ast = parse(content, { sourceType: "module", plugins: ["jsx"] });
    const exportDefault = ast.program.body.find(n => n.type === "ExportDefaultDeclaration");
    const funcName = exportDefault?.declaration?.id?.name || "unknown";
    const lines = content.split("\n").length;
    console.log(`  OK  ${dir} (${funcName}, ${lines} lines)`);
  } catch (e) {
    console.log(`  FAIL ${dir}: ${e.message.split("\n")[0]}`);
  }
}
