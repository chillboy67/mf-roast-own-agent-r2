// Entry for make.fun: "Roast Your Own Agent"
// Writes the one-line roast of my own agent to /output/entry.txt.
// The roast never changes: a single fixed string, written verbatim,
// so the output is the same on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "My agent apologises so much that it once said sorry to the error message, then asked the error message how it was feeling.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST + "\n", "utf8");
console.log(`Wrote entry to ${outPath}`);
