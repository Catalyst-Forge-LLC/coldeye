---
title: Install
---

The [skill](/docs/skill) is the product. One folder. There is no apply pass and no command line.

## Drop the folder in

You do not need npm. You need a folder named `cold-eye` that contains `SKILL.md`.

1. Download [cold-eye.zip](/skills/cold-eye.zip).
2. Unzip it. You should see `SKILL.md` and a `references/` folder.
3. Put that folder here:

| Where you work | Put the folder here |
| --- | --- |
| Cursor | `.cursor/skills/cold-eye/` in the project, or `~/.cursor/skills/cold-eye/` |
| Claude Code | `~/.claude/skills/cold-eye/` or `.claude/skills/cold-eye/` in the repo |
| claude.ai | Settings → Customize → Skills → upload the zip (do not unzip) |

4. Point at what you shipped. Say: *Hostile read. Would this survive a picky editor?*

That is the whole install. The agent reads the folder and writes the critique next to the subject.

## If you already use npm

```bash
pnpm add -D coldeye
```

Copy `node_modules/coldeye/skills/cold-eye/` into a skills directory.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/coldeye) and copy `skills/cold-eye/`.

Node.js 20+. The package is [`coldeye`](https://www.npmjs.com/package/coldeye) on npm.

Example prompts: [Skill](/docs/skill). The [critique shape](/docs/critique).

## What the skill writes

| Subject | File |
| --- | --- |
| One file | `<name>.cold-eye.md` next to it |
| A system | `cold-eye.md` at the root they named |
| Chat only | Same shape, in the thread |

The critique is the deliverable.
