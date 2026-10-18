---
title: "Find the gaps that leave users stuck."
description: "About to share a README, guide, skill, or site? Cold-eye gives your AI agent a repeatable review method. You get a report that quotes the problem, explains where a new user gets stuck, and tells you what to fix before the handoff."
order: 0
---

<section class="value-hero" aria-label="Cold-eye overview">
<div class="value-intro"><div class="value-headline">
<p class="value-kind">Review skill for your AI agent</p>
<h1>Find the gaps that leave users stuck.</h1></div>
<div class="value-pitch"><p class="value-lede">About to share a README, guide, skill, or site? Cold-eye gives your AI agent a repeatable review method. You get a report that quotes the problem, explains where a new user gets stuck, and tells you what to fix before the handoff.</p>
<div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install Cold-eye</a><a class="cta cta-secondary" href="#one-example-illustrative">See before, report, and after</a></div>
<p class="value-limit">You receive a Markdown critique with prioritized fixes. You decide which edits to make; reviewing leaves the original files unchanged.</p></div>
</div>
<figure class="value-proof worked-example" id="one-example-illustrative" tabindex="-1">
<figcaption>From a blocked setup to a usable guide</figcaption>
<p class="example-context">A fictional notes app. Its setup guide omits a launch command that already exists in the app’s <code>package.json</code>.</p>
<section class="example-step" aria-labelledby="example-before">
<h2 id="example-before"><span>1 · Before</span> The user installs it, then gets stuck</h2>
<blockquote><p>Run <code>npm install</code>.<br>Launch the app.</p></blockquote>
</section>
<section class="example-step example-report" aria-labelledby="example-report">
<h2 id="example-report"><span>2 · Cold-eye’s report</span> The missing step, located and explained</h2>
<p class="example-file">Excerpt from <code>README.cold-eye.md</code></p>
<p><strong>F-001 · Missing launch command</strong><br><code>README.md → Quick start</code></p>
<p><strong>Cold reader:</strong> Installs the dependencies, then has to guess how to open the app.</p>
<p><strong>Put:</strong> Add <code>npm start</code>, the command defined in <code>package.json</code>, and say how to recognize a successful launch.</p>
</section>
<section class="example-step example-after" aria-labelledby="example-after">
<h2 id="example-after"><span>3 · After you make the edit</span> The guide now gets them to the app</h2>
<blockquote><p>Run <code>npm install</code>, then <code>npm start</code>.<br>Open the local URL printed in the terminal. You should see the Notes page.</p></blockquote>
<p class="example-payoff">A new user can finish setup without asking you for the missing step.</p>
</section>
<p class="value-note">Illustrative review and author’s edit, not a recorded tool run. Sample commands belong to the fictional app.</p>
<a class="example-download" href="/samples/setup-guide.cold-eye.md">Read the complete sample report →</a>
</figure>
</section>

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
# Cold-eye — clean checklist

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
# Cold-eye — review until ready

**Verdict:** fails a hostile read

## Ranked changes

1. **F-001** · test 10 — no_close
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
