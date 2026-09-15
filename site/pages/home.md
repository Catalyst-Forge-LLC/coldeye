---
title: Check whether a newcomer can use what you shipped.
description: An installable skill for AI agents. Check whether a newcomer can understand and use what you are about to ship.
order: 0
---

An installable skill for AI agents. Cold-eye checks whether a newcomer can understand and use what you are about to ship. Give it a finished artifact: a skill, a spec, a site, a package, or a repo.

An agent reads the skill and writes a critique. Verdict first, then a ranked list of missing instructions, contradictions, and unsupported claims. The subject does not change. Hostile is the stance after you know the job: no credit for intent.

## One example

A procedure says to repeat a review “until ready” and never defines readiness.

The critique can point at that unresolved condition. The file itself is unchanged. A clean control that names the readiness criterion should not keep that finding. Do not treat one predetermined failing verdict as proof the skill loaded.

[Install in your agent](/docs/install) · [See a failed excerpt](#failed-verdict-illustrative) · [See a clean excerpt](#clean-verdict-illustrative)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A finished skill, spec, page, package, site, or repo |
| Writes | `<name>.cold-eye.md` next to a file, or `cold-eye.md` at a system root |
| Changes | Nothing, unless you separately ask for an edit |

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

Labeled example. The procedure repeats “until ready” with no readiness criterion.

```markdown
# Cold-eye: review until ready

**Verdict:** fails a hostile read

## Ranked changes

1. **F-001** · test 10 · no_close
   Absent: the procedure, what “ready” means
   Cold reader: keeps repeating with no exit.
   Put: Name the readiness criterion, then hand the file over and stop.
```

The finding cites the unresolved repeat condition. A repaired fixture that defines readiness should no longer receive that finding. Reasonable reviewers may also note missing binding of `notes.md`; that is still evidence-based, not a required second invention.

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
