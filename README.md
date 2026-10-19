<p align="center">
  <img src="https://coldeye.dev/logo.png" alt="Cold-eye" width="128" />
</p>

# Cold-eye

An installable skill for AI agents.

Check whether a newcomer can understand and use what you are about
to ship.

Cold-eye is a readiness pass on anything shipped, deemed done, or
ready to ship. An agent reads the skill and writes a critique.
Verdict first, then a ranked list. The subject does not change. It reconstructs
what a newcomer can understand from the public page before checking the
instructions and artifact. Weak persuasion alone does not fail a runnable job.

**Get started:** pick the agent, install the skill, then run the
sample checklist at
[coldeye.dev/docs/install](https://coldeye.dev/docs/install).

- [Cursor](https://coldeye.dev/docs/install#cursor)
- [Claude Code](https://coldeye.dev/docs/install#claude-code)

Claude.ai without project files is not a supported first-use route. The install page lists current host limits.

**Site:** [coldeye.dev](https://coldeye.dev)

## From a blocked setup to a usable guide

Illustrative review of a fictional notes app. Its `package.json` already defines `npm start`; the guide leaves that command out.

**Before: the user installs it, then gets stuck.**

> Run `npm install`. Launch the app.

**Cold-eye's report locates the missing step:**

```markdown
F-001 · Missing launch command
README.md → Quick start
Cold reader: Installs the dependencies, then has to guess how to open the app.
Put: Add npm start, the command defined in package.json, and say how to recognize a successful launch.
```

**After you make the edit:**

> Run `npm install`, then `npm start`.
> Open the local URL printed in the terminal. You should see the Notes page.

The new user can finish setup without asking for the missing step. Cold-eye writes the critique; you make the edit or explicitly ask your agent to apply it. This is a sample report and author edit, not a recorded run. [Complete sample report](https://coldeye.dev/samples/setup-guide.cold-eye.md).

## First run

Save [until-ready.md](https://coldeye.dev/samples/until-ready.md) (or the
checklist below), then ask:

> Use Cold-eye on `until-ready.md`. Follow the installed Cold-eye skill.
> Write the critique. Leave the checklist unchanged.

```markdown
# Review until ready

Fictional procedure for desk-stamp notes. Labeled example.

1. Open `notes.md`.
2. Read every section.
3. Write findings next to the file as `notes.review.md`.
4. Repeat the review until ready.
```

The critique lands in `until-ready.cold-eye.md`. The checklist should be
unchanged. A finding should point at step 4, the unresolved “until
ready” condition. Wording varies by model. A critique alone does not
prove the skill loaded: check the agent's skill list, or ask it to
quote the first heading of `SKILL.md`.

A writable workspace is required. Package `coldeye`, skill folder
`cold-eye`.

## Other installation methods

npm supplies the skill files. It does not register the skill with the
agent.

```bash
pnpm add -D coldeye
```

Copy `node_modules/coldeye/skills/cold-eye/` into the same destination
the [Get started](https://coldeye.dev/docs/install) page names for
your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

## License

MIT. Copyright Catalyst Forge LLC.

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
