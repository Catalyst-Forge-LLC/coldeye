---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download [cold-eye.zip](/skills/cold-eye.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

`.cursor/skills/cold-eye/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

Ask Cursor to use Cold-eye on the sample below. If it writes a critique, it found the skill and the reference files.

### Try it

Save this checklist as `no-stop.md` in the project:

```markdown
# Ship checklist

1. Open the file.
2. Read the steps.
3. Write the output next to the file.
```

Then ask:

> Use Cold-eye on `no-stop.md`. Follow the installed Cold-eye skill. Write the critique.

### Find the result

The critique lands in `no-stop.cold-eye.md` next to the file.

Success looks like this shape, not identical wording from every model:

- A verdict (`holds`, `close`, or `fails a hostile read`)
- A ranked finding that the procedure never says when to stop
- The checklist itself left unchanged

## Claude Code

### Get it

Download [cold-eye.zip](/skills/cold-eye.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

`.claude/skills/cold-eye/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/cold-eye/` instead.

### Confirm it

Same check as Cursor: the first run must produce a critique file.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same path as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download [cold-eye.zip](/skills/cold-eye.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent writes a Cold-eye critique, it loaded the skill.

### Try it

Paste the checklist from [Cursor](#try-it), then ask:

> Use Cold-eye on this checklist. Follow the installed Cold-eye skill. Write the critique.

### Find the result

The critique appears in the chat. When the agent can write files, it lands in `no-stop.cold-eye.md`.

## After the review

There is no apply skill. Read the ranked findings. Edit the subject yourself, or ask your agent to make a named repair outside this skill.

The subject does not change unless you ask for that edit.

## Other ways to ask

Once the first run works:

- Would a newcomer know how to use this?
- Readiness pass on this skill.
- Hostile read. Would this survive a picky editor?

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D coldeye
```

Copy `node_modules/coldeye/skills/cold-eye/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`coldeye`](https://www.npmjs.com/package/coldeye) on npm.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/coldeye) and copy `skills/cold-eye/`.

### Install for all projects

- Cursor: `~/.cursor/skills/cold-eye/`
- Claude Code: `~/.claude/skills/cold-eye/`

Same folder shape. The first-run check is the same.

The critique shape is on [Critique](/docs/critique).
