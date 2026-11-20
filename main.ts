// News image entry for 19 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// the output directory as entry.png. The grader runs it twice and both
// runs must write identical bytes, so this is a plain byte copy, nothing
// generated or random.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts');
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');
mkdirSync(dirname(outPath), { recursive: true });
copyFileSync(source, outPath);
