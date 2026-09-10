---
title: Check whether a newcomer can use what you shipped.
description: Check whether a newcomer can understand and use what you are about to ship. Cold-eye returns a readiness verdict and a ranked list of missing instructions, contradictions, and unsupported claims.
order: 0
---

Check whether a newcomer can understand and use what you are about to ship. Give Cold-eye a finished artifact: a skill, a spec, a site, a package, or a repo. An agent reads the skill and writes a critique. Verdict first, then a ranked list of missing instructions, contradictions, and unsupported claims.

The subject does not change. Hostile is the stance after you know the job: no credit for intent.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [Why the name](/about)

## What you get

The skill writes `<name>.cold-eye.md` next to a file, or `cold-eye.md` at a system root.

| Verdict | Means |
| --- | --- |
| **holds** | A newcomer can run the job from the file |
| **close** | Almost. A few edits to the file would close the gap |
| **fails a hostile read** | The reader still has to invent too much |

A repo, a package, or a site may get a split verdict: the card as a card, the files as a system.

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

## Failed verdict (illustrative)

Labeled example. The procedure never says the job is finished.

```markdown
# Cold-eye: procedure with no stop

**Verdict:** fails a hostile read

## Ranked changes

1. **F-001** · test 10 · no_close
   Absent: the procedure, when to stop
   Cold reader: starts a second pass in the same breath.
   Put: End with hand the file over and stop. Do not begin the next pass here.
```

The finding cites a missing stopping condition. The smallest repair is to name that stop.

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

## Install

The [skill](/docs/skill) is a folder. [Download cold-eye.zip](/skills/cold-eye.zip), put it in `.cursor/skills/cold-eye/` (or upload the zip on claude.ai), and ask for a readiness read of what you shipped.

```bash
pnpm add -D coldeye
```

Then copy the `cold-eye` folder out of `node_modules`.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
