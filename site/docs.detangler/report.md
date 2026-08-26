# Detangler report — site/docs (install.md + skill.md)

480 words. 7 sections. 2026-08-26.

Broken: 0. Intentional but verify: 0. Judgment calls: 1.

## Broken

None.

## Intentional but verify

None.

## Judgment calls

1. **F-001** · **skill.s1–s4** (skill.md line 13) — repetition_redundant
   Download the ZIP / Clone the repo / Install from npm / Skills directories
   Action: Keep the install on Install. On Skill, leave the pointer. Cut the four sections.
   Evidence: Install already owns zip, the skills-directory table, npm, and clone. Skill's lede already points there ("Start on Install: download the zip, put the folder where the table says"). The four Skill sections do that job again. Class: sibling. Job of Install: how to get the folder on disk. Job of the Skill block: the same.

## Reverse outline

- **install.s1** Drop the folder in (95 words) — Download the zip and put `cold-eye` where the table says.
  - **install.s2** If you already use npm (55 words) — npm or clone, then copy the folder.
  - **install.s3** What the skill writes (35 words) — The critique filename by subject.
- **skill** Title / lede (70 words) — One folder; the agent writes a critique; start on Install if you have no skills directory.
  - **skill.s1** Download the ZIP (40 words) — Unpack the zip, or upload it on claude.ai.
  - **skill.s2** Clone the repo (25 words) — Clone, then copy `skills/cold-eye/`.
  - **skill.s3** Install from npm (25 words) — `pnpm add -D coldeye`, then copy the folder.
  - **skill.s4** Skills directories (50 words) — Paths for Claude Code and Cursor.
  - **skill.s5** What the agent does (50 words) — Locate, read, ten tests, write, stop.
  - **skill.s6** Example prompts (55 words) — Five lines you can say, then the refuse.

## Argument spine

| Section | Question it answers | Raised by previous |
| --- | --- | --- |
| install.s1 | How do I get the folder on disk? | — |
| install.s2 | What if I already use npm? | yes |
| install.s3 | What file does the skill write? | partial |
| skill lede | What is the hour? | yes |
| skill.s1 | How do I get the folder on disk? | no |
| skill.s2 | How do I get the folder from git? | no |
| skill.s3 | How do I get the folder from npm? | no |
| skill.s4 | Where does the folder go? | no |
| skill.s5 | What does the agent do? | yes |
| skill.s6 | What do I say? | yes |

Four `no` in a row on Skill's install block is `spine_drift`. Same action as F-001: cut those sections. Not a second finding.

## Deferred line notes

No line-level observations were captured.
