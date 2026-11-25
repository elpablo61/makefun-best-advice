import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The best advice I ever got — one sentence, 173 characters.
// Winner of a 3-variant calibrated build: named person (my father), a
// specific hour and place (2 a.m., hospital corridor), one sensory
// detail (his hand on my shoulder), deadpan voice, no punchline,
// no explaining — the advice is an action, not a slogan.
const ENTRY =
  "At 2 a.m. in the hospital corridor, my father put his hand on my shoulder and said, 'You cannot carry everyone, son, so carry the one in front of you and let the rest wait.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
