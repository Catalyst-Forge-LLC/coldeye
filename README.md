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

**Get started:** pick the agent, install the skill, then run a named
example — [coldeye.dev/docs/install](https://coldeye.dev/docs/install).

- [Cursor](https://coldeye.dev/docs/install#cursor)
- [Claude Code](https://coldeye.dev/docs/install#claude-code)
- [Claude.ai](https://coldeye.dev/docs/install#claudeai)

**Site:** [coldeye.dev](https://coldeye.dev)

## First run

Save a checklist that never says when to stop, then ask:

> Use Cold-eye on `no-stop.md`. Follow the installed Cold-eye skill.
> Write the critique.

The critique lands in `no-stop.cold-eye.md`. The checklist should be
unchanged. The verdict should fail a hostile read for the missing
stop.

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
