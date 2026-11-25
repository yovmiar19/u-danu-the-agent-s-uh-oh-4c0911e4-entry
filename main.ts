import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
const WORD = "Undefined";

function main(): void {
  // Gate: exactly one word, 1-99 characters, nothing attached.
  if (!/^\S{1,99}$/.test(WORD)) {
    throw new Error("entry must be exactly one word of 1-99 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
}

main();
