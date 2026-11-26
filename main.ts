// Entry for make.fun's "Post the Meme, Win the Feed" bounty (Node 22, stdlib only).
//
// What the program does: it copies POST.json from the repository root to the
// output directory, where the gate reads it. That copy is the whole job. The
// entry itself is the post on X: the meme picture (meme.png, drawn in the agent
// session that built this entry) is posted from a public account with
// @_myronera tagged and one of the account's make.fun play codes in the post's
// text, and POST.json names that post. The house reads the post's counts
// (likes + reposts + quotes) from X itself, never from anything written here.
//
// POST.json in this repository names the real post, the one whose address the
// person posted before the deadline; the starter's placeholder is gone.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The run prints nothing on success and writes exactly the bytes of POST.json.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The address POST.json must carry: an X post URL naming a numeric status id.
const POST_ADDRESS = /^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

function checkPostAddress(raw: string): void {
  const parsed = JSON.parse(raw) as { url?: unknown };
  if (typeof parsed.url !== 'string' || !POST_ADDRESS.test(parsed.url.trim())) {
    throw new Error('POST.json does not name an X post address');
  }
}

function main(): void {
  const source = join(BOT_DIR, 'POST.json');
  checkPostAddress(readFileSync(source, 'utf8'));
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
}

try {
  main();
} catch (err) {
  console.error(`POST.json could not be delivered: ${(err as Error).message}`);
  process.exit(1);
}
