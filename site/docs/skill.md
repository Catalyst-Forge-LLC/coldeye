---
title: Skill
---

The product is one folder: `cold-eye`. An agent reads it and writes the critique.

The folder is `SKILL.md` plus the reference files it reads.

The skill runs on anything that has shipped, is deemed done, or is ready to ship.

No skills directory yet? Start on [Install](/docs/install): download the zip, put the folder where the table says, ask for a hostile read.

## Download the ZIP

[Download cold-eye.zip](/skills/cold-eye.zip)

Unpack it. Move the folder that contains `SKILL.md` into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/coldeye.git
```

Copy `skills/cold-eye/` from the clone into a skills directory.

## Install from npm

```bash
pnpm add -D coldeye
```

Copy `node_modules/coldeye/skills/cold-eye/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/<name>/`
- Claude Code, one repo: `.claude/skills/<name>/`
- Cursor: `.cursor/skills/<name>/` or `~/.cursor/skills/<name>/`

The folder you drop in must be named `cold-eye` and must contain `SKILL.md`.

## What the agent does

1. Locate the subject. If none, ask.
2. Read as a first reader. Nothing from the thread that produced the files.
3. Run the ten tests, in order.
4. Write the critique. Hand it over. Stop. Do not rewrite unless they asked.

## Example prompts

- Hostile read of this skill.
- Would this survive a picky editor?
- Cold-eye this repo.
- What does a cold agent still have to invent?
- Extreme scrutiny. It claims to be done.

It runs on what claims to be done. A plan still on the table is a different hour.
