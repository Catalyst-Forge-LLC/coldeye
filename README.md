<p align="center">
  <img src="site/static/logo.png" alt="Cold-eye" width="128" />
</p>

# Cold-eye

An installable skill for AI agents.

Check whether a newcomer can understand and use what you are about
to ship.

Cold-eye is a readiness pass on anything shipped, deemed done, or
ready to ship. An agent reads the skill and writes a critique.
Verdict first, then a ranked list. The subject does not change.

**Get started:** pick the agent, install the skill, then run the
sample checklist at
[coldeye.dev/docs/install](https://coldeye.dev/docs/install).

- [Cursor](https://coldeye.dev/docs/install#cursor)
- [Claude Code](https://coldeye.dev/docs/install#claude-code)
- [Claude.ai](https://coldeye.dev/docs/install#claudeai)

**Site:** [coldeye.dev](https://coldeye.dev)

## One example (illustrative)

You wrote: “Install the package and launch the app.”

Cold-eye finds: the guide names the package but never gives the
launch command. A new user cannot finish setup from the
instructions given.

You get a ranked finding in the critique file:

```markdown
**Verdict:** close

1. **F-001** · test 2 · invented
   > Install the package and launch the app.
   Cold reader: installs the package, then guesses a launch command or stops.
   Put: The exact launch command on the next line, and what the reader sees when the app is running.
```

The guide itself is unchanged.

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
