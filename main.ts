// Make the Judge Laugh in One Line
// Writes a single original one-liner to /output/entry.txt.
// Pure Node.js stdlib, deterministic, no network at runtime.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The flight attendant asked if I wanted chicken or pasta, so I said 'surprise me' and she handed me a parachute.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
