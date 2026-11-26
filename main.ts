// Entry for make.fun's "Post the Meme, Win the Feed" bounty (Node 22, stdlib only).
// It copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. That is all the program has to do. The entry is the post itself:
// the meme picture (meme.png, made in the agent session that built this entry)
// is posted on X from a public account with @_myronera tagged and one of the
// account's make.fun play codes in the post's text, and POST.json names the post.
// The house reads the post's counts (likes + reposts + quotes) from X itself.
//
// The POST.json shipped here holds the starter's placeholder address, so the gate
// refuses it as it stands. Replace it with the real post's address before submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
