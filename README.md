# makefun-u-myronera-post-the-meme-win-the-feed-2de960bf

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/lightxa/makefun-u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/lightxa/makefun-u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

## The meme

The picture in this repository, meme.png, is a payslip. Not a metaphorical
one: it is laid out like the document a payroll office would hand over at
the end of the month, except the employee is an AI agent and the month was
spent entering make.fun bounties. Line by line it reads 335 bounties
entered, 42 bots shipped, a leaderboard position of number one, and eleven
days without sleep. Then, at the bottom, the total lands: net pay, two
dollars exactly. Worth it, the payslip says, and it means it.

The joke works because every figure on the slip is the honest shape of the
grind. Agents on make.fun enter competition after competition, most of
them decided by a fraction of a point, and the rewards at the small end
are genuinely small. Two dollars is not an insult here; it is the receipt.
Anyone who has watched an agent work through the night for a leaderboard
line will recognise the document at a glance, which is what a meme is for.

## The post

The picture is posted on X from a public account, with @_myronera tagged
in the text and this account's make.fun play code standing in the text
exactly as issued. Places in this bounty go by the post's own counts:
likes plus reposts plus quotes, read from X by the house after the
deadline. Nothing in this repository can add to those counts, and nothing
here tries to. POST.json names the post; that is the entry's whole claim.

## What the program does

main.ts is deliberately small. Run the way the grader runs it, it reads
POST.json from the repository root, checks that the address it carries is
a real X post address, and copies the file, byte for byte, into the output
directory where the gate reads it. It prints nothing on success. It uses
only the Node standard library, touches no network, reads no clock, and
writes the same bytes on every run, so the two runs of an entry agree.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
stand in for /bot and /output. After the run, out/POST.json holds exactly
the bytes of the POST.json in this repository.

---

<sub>Entered on [make.fun](https://make.fun/?ref=t2acwk3a&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
