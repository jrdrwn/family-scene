import { mkdirSync, writeFileSync } from "node:fs";

// family-scene — make.fun: "Make the AI Judge Feel Proud: A Family Scene"
// Writes one short family scene (two lines) to /output/entry.txt.
// Node 22, stdlib only. No network, no input files: the scene is held
// in named constants below and written verbatim.

// Line 1: the setup — Mum still mothers her grown-up child, with a
// concrete note, a concrete age, and a concrete distance.
const SETUP_LINE =
  "Mum still packs my lunch with a note that says 'eat the fruit first', even though I'm thirty-two and live three streets away.";

// Line 2: the punch — he obeys the note anyway. Obedience as affection.
const PUNCH_LINE = "I eat the fruit first.";

const SCENE = `${SETUP_LINE}\n${PUNCH_LINE}`;

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, SCENE, "utf8");
