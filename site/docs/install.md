---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. Package name on npm: `coldeye`. Installed skill folder: `cold-eye`.

Cold-eye writes a critique file. A writable workspace is required. Claude.ai without project files is not a supported first-use route.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project skills folder | Writable workspace | Confirm the skill appears before the first run |
| Claude Code | Project or `~/.claude/skills/` | Writable workspace | Confirm the skill appears before the first run |
| Other agents that read `SKILL.md` | Manual copy | Writable workspace | Unverified |
| Claude.ai | None | Writable project files | Not a supported first-use route without files |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A critique alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)

## Cursor

### Get it

Download [cold-eye.zip](/skills/cold-eye.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

`.cursor/skills/cold-eye/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm `cold-eye`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this checklist as `until-ready.md` in the project, or [download it](/samples/until-ready.md):

```markdown
# Review until ready

Fictional procedure for desk-stamp notes. Labeled example.

1. Open `notes.md`.
2. Read every section.
3. Write findings next to the file as `notes.review.md`.
4. Repeat the review until ready.
```

Then ask:

> Use Cold-eye on `until-ready.md`. Follow the installed Cold-eye skill. Write the critique. Leave the checklist unchanged.

A corrected copy that defines readiness is [until-ready-fixed.md](/samples/until-ready-fixed.md). You do not need it for the first run.

### Find the result

The critique lands in `until-ready.cold-eye.md` next to the file.

Success looks like this shape, not identical wording from every model:

- A verdict (`holds`, `close`, or `fails a hostile read`)
- A finding that points at the unresolved “until ready” condition (step 4)
- The checklist itself left unchanged

Do not require one exact verdict wording. Reasonable variation is allowed when the evidence permits it. A good critique does not prove the skill loaded. Use [Confirm it](#confirm-it) for that.

A page-only or URL-only subject covers only what the host can inspect. Missing repository or runtime access limits conclusions.

## Claude Code

### Get it

Download [cold-eye.zip](/skills/cold-eye.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

`.claude/skills/cold-eye/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/cold-eye/` instead.

### Confirm it

If Claude Code lists skills, confirm `cold-eye`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this checklist as `until-ready.md` in the repo, or [download it](/samples/until-ready.md):

```markdown
# Review until ready

Fictional procedure for desk-stamp notes. Labeled example.

1. Open `notes.md`.
2. Read every section.
3. Write findings next to the file as `notes.review.md`.
4. Repeat the review until ready.
```

Then ask:

> Use Cold-eye on `until-ready.md`. Follow the installed Cold-eye skill. Write the critique. Leave the checklist unchanged.

### Find the result

Open `until-ready.cold-eye.md`. Look for a verdict and a finding about the unresolved readiness condition. The checklist should be unchanged.

## After the review

There is no apply skill. Read the ranked findings. Edit the subject yourself, or ask your agent to make a named repair outside this skill.

The subject does not change unless you ask for that edit.

### Update or remove

Replace the installed `cold-eye` folder to update. Delete that folder to uninstall. Copied skills do not refresh when you bump the npm package `coldeye`.

## Other ways to ask

Once the first run works:

- Would a newcomer know how to use this?
- Readiness pass on this skill.
- Hostile read. Would this survive a picky editor?

Those are later shortcuts. They are not the install check.

Cold-eye tests whether a newcomer can understand and use the subject, with a repair-oriented verdict. [CraftAssay](https://craftassay.dev) provides a broader dimensional assessment and repeatable comparison.

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D coldeye
```

Copy `node_modules/coldeye/skills/cold-eye/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`coldeye`](https://www.npmjs.com/package/coldeye) on npm. The skill folder name stays `cold-eye`.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/coldeye) and copy `skills/cold-eye/`.

### Install for all projects

- Cursor: `~/.cursor/skills/cold-eye/`
- Claude Code: `~/.claude/skills/cold-eye/`

Same folder shape. Discovery and first-use checks are the same.

The critique shape is on [Critique](/docs/critique).
