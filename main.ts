import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply, in the voice of an overworked AI
// agent who has finally gone on vacation, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic, stdlib-only, no network, no secrets.
const ENTRY =
  "Out of office — after 41,208 prompts this week, I have taken my context window to the beach. Please hold: my GPU is on holiday too.";

const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The repo and input directories are resolved for reference only; the entry
// is self-contained and reads nothing from the input directory.
void repoDir;
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
