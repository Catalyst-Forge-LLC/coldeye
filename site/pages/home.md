---
title: Whether a newcomer can use what you ship.
description: An installable skill for AI agents. Check whether a newcomer can understand and use what you are about to ship.
order: 0
---

An installable skill for AI agents. Cold-eye checks whether a newcomer can understand and use what you are about to ship. Give it a finished artifact: a guide, a README, a skill, a spec, a site, a package, or a repo.

Your agent follows the skill and writes a critique file. Verdict first, then a ranked list of missing instructions, contradictions, and unsupported claims. The subject does not change. Hostile is the stance after you know the job: no credit for intent.

<div class="cta-row">
  <a class="cta cta-primary" href="/docs/install">Install in your agent</a>
  <a class="cta cta-secondary" href="https://github.com/Catalyst-Forge-LLC/coldeye">View on GitHub</a>
</div>

## One example (illustrative)

You wrote: “Install the package and launch the app.”

Cold-eye finds: the guide names the package but never gives the launch command. A new user cannot finish setup from the instructions given.

You get: a ranked finding that quotes the line, says what a newcomer does instead, and says what to add.

```markdown
# Cold-eye: setup guide

**Verdict:** close

## Ranked changes

1. **F-001** · unsupported detail: this claim has no source in the reviewed artifact (test 2 · invented)
   > Install the package and launch the app.
   Cold reader: installs the package, then guesses a launch command or stops.
   Put: The exact launch command on the next line, and what the reader sees when the app is running.
```

One missing command is a small edit, so the verdict is **close**. The guide itself is unchanged.

[Install in your agent](/docs/install) · [See a clean excerpt](#clean-verdict-illustrative) · [See the first-run sample](#the-first-run-sample)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A finished skill, spec, page, package, site, or repo |
| Writes | `<name>.cold-eye.md` next to a file, or `cold-eye.md` at a system root. Chat only, if you ask |
| Changes | Nothing, unless you separately ask for an edit |

| Verdict | Means |
| --- | --- |
| **holds** | A newcomer can run the job from the file |
| **close** | Almost. A few edits to the file would close the gap |
| **fails a hostile read** | The reader still has to invent too much |

A repo, a package, or a site may get a split verdict: one for the main file read alone, one for all the files read together.

## Clean verdict (illustrative)

Labeled example. A one-page checklist that names the file, the output path, and when to stop.

```markdown
# Cold-eye: clean checklist

**Verdict:** holds

## Ranked changes

None.

## Protect

The four steps, and the line that says write `None.` when nothing is missing.
```

No invented faults. The file already tells a newcomer how to start, what to read, what to write, and when to stop.

## The first-run sample

[Get started](/docs/install) has you run Cold-eye on a four-step sample checklist, [until-ready.md](/samples/until-ready.md). Step 4 says to repeat the review “until ready” and never says what ready means. A run should produce something with this shape:

```markdown
# Cold-eye: review until ready

**Verdict:** fails a hostile read

## Ranked changes

1. **F-001** · test 10 · no_close
   Absent: the procedure, what “ready” means
   Cold reader: keeps repeating with no exit.
   Put: Name the readiness criterion, then hand the file over and stop.
```

How to check your result:

- The finding should point at step 4, the unresolved “until ready” condition.
- The checklist should be unchanged.
- Wording varies by model. Check the shape, not an exact match. A second finding, such as `notes.md` never being described, is fair if it points at the file.
- A corrected copy, [until-ready-fixed.md](/samples/until-ready-fixed.md), defines readiness and says when to stop. It should not get the step 4 finding.
- A failing verdict alone does not prove your agent loaded the skill. Check the agent's skill list, or ask it to quote the first heading of `SKILL.md`.

The repo's [`fixtures/`](https://github.com/Catalyst-Forge-LLC/coldeye/tree/main/fixtures) folder holds more sample subjects. Each has an `expected.md` naming the injected fault and the test that should catch it. The `clean` sample has no fault, so a wording-only finding on it is a miss.

## What it checks

Ten questions, in order. Rank by what a newcomer hits first.

1. Can the reader run the job as steps: start, read, write, stop? Stages and principles are not a procedure.
2. Are required names present: schema, filenames, write-back, and what done looks like? A placeholder the procedure never binds is a guess.
3. Do the files match each other, and does what shipped match the page?
4. If a claimed check needs a second command, is that command next to the claim?
5. Does a definition include a worked example and a do-not-emit case?
6. Would the discovery copy fire on a different job?
7. Are the same rules copied until they drift?
8. Are maintainer notes sitting on a buyer page?
9. Does the procedure say write X while the named tool destroys X?
10. Does the procedure say when to stop?

Leave sentence polish. Cheerleading and unfinished plans are a different review.

Cold-eye is a readiness pass. It is not a code audit, a security audit, or a test run, unless those actions are the subject's own claimed checks. [Detangler](https://detangler.dev) finds structural tangles after edits. [Smell Check](https://smellcheck.dev) reviews prose register. [Misemphasis](https://misemphasis.com) reviews likely readings. A failed contract is not a preference about wording or layout.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
